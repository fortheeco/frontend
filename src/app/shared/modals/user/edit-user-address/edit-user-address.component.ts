import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IContact } from 'src/app/_models/users/app-contacts';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/_services';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { EntityAddress } from 'src/app/_models/address/entity-address';
import { ICountry, IState } from 'src/app/_models/address/app-country';
import { RestService } from 'src/app/_services/rest.service';
import { UpdatedUserAddressFunctions } from './edit-user-address-functions';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-user-address',
  templateUrl: './edit-user-address.component.html',
  styleUrls: ['./edit-user-address.component.css']
})
export class EditUserAddressComponent implements OnInit, OnDestroy {

  @Output() updatedAddress  = new EventEmitter<EntityAddress>();

  @Input() entityAddress: EntityAddress;

  // close all subscriptions
  subscriptions: Subscription[] = [];

  countries: ICountry[] = [];
  states: IState[] = [];

  updatedUserAddressForm: FormGroup;

  loading = false;

  loadingCountry = false;
  loadingState = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public activeModal: NgbActiveModal,
    public formError: FormErrorService,
    private restService: RestService,
    ) { }

  ngOnInit() {
    this.initializeForm();
    this.getCountries();
  }

  initializeForm() {
    this.formError.genericError = null;
    this.updatedUserAddressForm = UpdatedUserAddressFunctions.createForm(this.fb, this.entityAddress);
  }

  getCountries() {
    this.loadingCountry = true;
    const sub = this.restService.getLocationsCountries()
      .pipe(finalize(() => this.loadingCountry = false))
      .subscribe(x => {
        this.countries = x.json();

        if (this.entityAddress && this.entityAddress.country) {
          this.getState(this.entityAddress.country.id);
        }

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

  updateUserAddress() {

    this.formError.genericError = null;

    if (this.updatedUserAddressForm.invalid) { this.formError.validateAllFields(this.updatedUserAddressForm); return; }

    this.loading = true;

    const sub = this.userService.updateUserAddress(this.updatedUserAddressForm.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe((x) => {
        this.updatedAddress.emit(x.json() as EntityAddress);
        this.activeModal.close();
      },
        error => this.formError.setFormErrors(error.json(), this.updatedUserAddressForm)
      );

    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
