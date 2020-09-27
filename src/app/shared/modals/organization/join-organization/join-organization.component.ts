import { Component, OnInit, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrganizationService } from 'src/app/_services/organization/organization.service';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchOrganizationAutocompleteComponent } from '../search-organization-autocomplete/search-organization-autocomplete.component';
import { debounceTime, distinctUntilChanged, finalize } from 'rxjs/operators';
import { JoinOrganizationFunctions, IJoinOrganization } from './join-organization-functions';
import { UtilityProvider } from 'src/app/_providers/utility';


@Component({
  selector: 'app-join-organization',
  templateUrl: './join-organization.component.html',
  styleUrls: ['./join-organization.component.css']
})
export class JoinOrganizationComponent implements OnInit, OnDestroy {

  searchOrganizationForm: FormGroup;

  // close all subscriptions
  subscriptions: Subscription[] = [];

  searchedOrganization = new EventEmitter<IJoinOrganization>();

  loading = false;

  // Get the search organization auto complete component
  @ViewChild('autocomplete_organization') autoCompleteOrganization: SearchOrganizationAutocompleteComponent;

  constructor(
    private organizationService: OrganizationService,
    private fb: FormBuilder,
    public formError: FormErrorService,
    public activeModal: NgbActiveModal,
    private utility: UtilityProvider
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.beginListeningForInput();
  }

  initializeForm() {
    this.formError.genericError = null;
    this.searchOrganizationForm = JoinOrganizationFunctions.createForm(this.fb);
  }

  beginListeningForInput() {
    this.searchOrganizationForm.get('organizationName').valueChanges
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .subscribe((word: string) => {

        if (word && word.length >= 3) {
          this.autoCompleteOrganization.beginSearchWord(word);
        }

      });
  }

  organizationSelected(organization: IJoinOrganization) {
    this.searchOrganizationForm.patchValue({
      organizationName: organization.organizationName,
      organizationId: organization.orgniazationId
    });
  }

  sendOrganization() {

    if (this.searchOrganizationForm.invalid) { this.formError.validateAllFields(this.searchOrganizationForm); return; }

    this.loading = true;

    const sub = this.organizationService.requestToJoin(this.searchOrganizationForm.value)
      .pipe(finalize(() => this.loading = false ))
      .subscribe(x => {
        const name = this.searchOrganizationForm.get('organizationName').value;
        this.utility.showToast('success', `Request sent to ${name}`);
        this.searchedOrganization.emit();
        this.activeModal.close();
      },
        error => this.formError.setFormErrors(error.json(), this.searchOrganizationForm)
      );

    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
