import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';
import { RestService } from 'src/app/_services/rest.service';
import { Subscription } from 'rxjs';
import { ICountry, IState } from 'src/app/_models/address/app-country';
import { finalize } from 'rxjs/operators';
import { OrganizationBranchFilter } from 'src/app/dashboard/organization/organization-branches/organization-branches-functions';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FilterOrganizationBranchesFunctions } from './filter-organization-branches.functions';

@Component({
  selector: 'app-filter-organization-branches',
  templateUrl: './filter-organization-branches.component.html',
  styleUrls: ['./filter-organization-branches.component.css']
})
export class FilterOrganizationBranchesComponent implements OnInit {

  filterOrganizationBranchFrom: FormGroup;

  @Output() updatedFilter = new EventEmitter<OrganizationBranchFilter>();
  @Input() currentFilter: OrganizationBranchFilter;

  // close all subscriptions
  subscriptions: Subscription[] = [];

  countries: ICountry[] = [];
  states: IState[] = [];

  loadingCountry = false;
  loadingState = false;

  dataToSend: OrganizationBranchFilter;

  constructor(
    private fb: FormBuilder,
    private restService: RestService,
    public formError: FormErrorService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.getCountries();
  }

  initializeForm() {
    this.dataToSend = FilterOrganizationBranchesFunctions.filter;
    this.filterOrganizationBranchFrom = FilterOrganizationBranchesFunctions.createForm(this.fb, this.currentFilter, this.dataToSend);
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
        // this.
        this.states = x.json();
        this.states = this.states.filter(s => s.name.toLowerCase() !== 'all regions');
      });

    this.subscriptions.push(sub);
  }

  onCountrySelected(countryId: string) {

    const newCountry = this.countries.find(x => x.id.toString() === countryId);

    if (newCountry) {
      this.dataToSend.countryName = newCountry.name;
      this.dataToSend.countryId = newCountry.id;
    }
  }

  onStateSelected(stateId: string) {

    const newState = this.states.find(x => x.id.toString() === stateId);

    if (!newState) { return; }

    this.dataToSend.stateId = newState.id;
    this.dataToSend.stateName = newState.name;
  }

  resetFilter() {
    this.dataToSend = {} as OrganizationBranchFilter;
    this.filterOrganizationBranchFrom.reset();
  }

  updateFilter() {
    if (this.filterOrganizationBranchFrom.invalid) { this.formError.validateAllFields(this.filterOrganizationBranchFrom); return; }

    this.dataToSend = FilterOrganizationBranchesFunctions.compileData(this.dataToSend, this.filterOrganizationBranchFrom);

    this.updatedFilter.emit(this.dataToSend);
    this.activeModal.close();
  }

}
