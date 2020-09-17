import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { EntityAddress } from 'src/app/_models/address/entity-address';
import { Subscription } from 'rxjs';
import { ICountry, IState } from 'src/app/_models/address/app-country';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RestService } from 'src/app/_services/rest.service';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { UserService } from 'src/app/_services';
import { NewFreeUserAddressFunctions } from './add-free-address-functions';
import { finalize } from 'rxjs/operators';
import { IFreeAddresses } from 'src/app/shared/components/user/user-contact/user-contact-addresses/user-contact-addresses-functions';

@Component({
  selector: 'app-add-free-addresses',
  templateUrl: './add-free-addresses.component.html',
  styleUrls: ['./add-free-addresses.component.css']
})
export class AddFreeAddressesComponent implements OnInit, OnDestroy {

  @Output() newAddress  = new EventEmitter<EntityAddress>();

  @Input() freeAddresses: IFreeAddresses;

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
    this.addNewUserAddressForm = NewFreeUserAddressFunctions.createForm(this.fb);
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

    const sub = this.userService.addFreeNewAddress(this.addNewUserAddressForm.value)
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
