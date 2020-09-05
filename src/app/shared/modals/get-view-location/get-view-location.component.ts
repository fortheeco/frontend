import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { RestService } from 'src/app/_services/rest.service';
import { ICountry, IState } from 'src/app/_entities/address/app-country';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GetViewLocationFunctions } from './get-view-location-functions';
import { IAppAddress } from 'src/app/_entities/address/app-address';

@Component({
  selector: 'app-get-view-location',
  templateUrl: './get-view-location.component.html',
  styleUrls: ['./get-view-location.component.css']
})
export class GetViewLocationComponent implements OnInit, OnDestroy {

    @Input() address: IAppAddress;

    @Output() addressChanged  = new EventEmitter<IAppAddress>();

    // close all subscriptions
    subscriptions: Subscription[] = [];

    countries: ICountry[] = [];
    states: IState[] = [];

  locationForm: FormGroup;

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private restService: RestService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.getCountries();
  }

  initializeForm() {
    this.locationForm = GetViewLocationFunctions.createForm(this.fb, this.address);
  }

  getCountries() {
    const sub = this.restService.getLocationsCountries()
      .subscribe(x => {
        this.countries = x.json();

        if (this.address && this.address.country) { this.getState(this.address.country.id); this.address.country = null; }
      });

    this.subscriptions.push(sub);
  }

  getState(countryId: number) {
    const sub = this.restService.getStates(countryId)
      .subscribe(x => {
        this.states = x.json();
      });

    this.subscriptions.push(sub);
  }

  saveAddress() {
    const address: IAppAddress = {} as IAppAddress;

    address.country = this.countries.find(x => x.id.toString() === this.locationForm.get('countryId').value);
    address.state = this.states.find(x => x.id.toString() === this.locationForm.get('stateId').value);
    address.postCode = this.locationForm.get('postCode').value;
    address.street = this.locationForm.get('street').value;
    address.id = this.locationForm.get('id').value;

    this.addressChanged.emit(address);
    this.activeModal.close();
  }


  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
