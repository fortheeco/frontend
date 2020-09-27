import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ICountry, IState } from 'src/app/_models/address/app-country';
import { EntityAddress } from 'src/app/_models/address/entity-address';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { RestService } from 'src/app/_services/rest.service';
import { NewUserAddressFunctions } from './new-user-address-functions';
import { UserService } from 'src/app/_services';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-new-user-address',
  templateUrl: './new-user-address.component.html',
  styleUrls: ['./new-user-address.component.css']
})
export class NewUserAddressComponent implements OnInit, OnDestroy {

  @Output() newAddress  = new EventEmitter<EntityAddress>();

  // close all subscriptions
  subscriptions: Subscription[] = [];

  countries: ICountry[] = [];
  states: IState[] = [];

  addNewUserAddressForm: FormGroup;

  loading = false; 
  loadingCountry = false;
  loadingState = false;

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private restService: RestService,
    private fb: FormBuilder,
    public formError: FormErrorService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.initializarForm();
    this.getCountries();
  }

  initializarForm() {
    this.formError.genericError = null;
    this.addNewUserAddressForm = NewUserAddressFunctions.createForm(this.fb);
  }

  getCountries() {
    this.loadingCountry = true;
    const sub = this.restService.getLocationsCountries()
      .pipe(finalize(() => this.loadingCountry = false))
      .subscribe(x => {
        this.countries = x.json();
      });

    this.subscriptions.push(sub);
  }

  getState(countryId: number) {
    this.loadingState = true;
    const sub = this.restService.getStates(countryId)
      .pipe(finalize(() => this.loadingState = false))
      .subscribe(x => {
        this.states = x.json();
        this.states = this.states.filter(s => s.name.toLowerCase() !== 'all regions');
      });

    this.subscriptions.push(sub);
  }

  addNewAddress() {

    this.formError.genericError = null;

    if (this.addNewUserAddressForm.invalid) { this.formError.validateAllFields(this.addNewUserAddressForm); return; }

    this.loading = true;

    const sub = this.userService.addNewAddress(this.addNewUserAddressForm.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => {
        this.newAddress.emit(x.json());
        this.activeModal.close();
      },
        error => this.formError.setFormErrors(error.json(), this.addNewUserAddressForm)
      );

    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
