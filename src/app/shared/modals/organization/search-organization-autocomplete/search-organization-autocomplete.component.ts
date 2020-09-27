import { Component, OnInit, EventEmitter, OnDestroy, Output } from '@angular/core';
import { OrganizationService } from 'src/app/_services/organization/organization.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { AppOrganizationBranch } from 'src/app/_models/organization/app-organization-branch';
import { IJoinOrganization } from '../join-organization/join-organization-functions';

@Component({
  selector: 'app-search-organization-autocomplete',
  templateUrl: './search-organization-autocomplete.component.html',
  styleUrls: ['./search-organization-autocomplete.component.css']
})
export class SearchOrganizationAutocompleteComponent implements OnInit, OnDestroy {

  // When the chosen organization has been clicked
  @Output() selectedOrganization = new EventEmitter<IJoinOrganization>();

  // loading
  loading = false;

  subscription: Subscription[] = [];

  // List of suggested organization
  organizations: AppOrganizationBranch[] = [];

  constructor(
    private organizationService: OrganizationService,
    private formError: FormErrorService
  ) { }

  ngOnInit() {
  }

  beginSearchWord(word: string) {
    this.loading = true;
    this.organizations = [];

    const sub = this.organizationService.searchOrganization({ organizationName: word })
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => {
        this.organizations = x.json().map(y => new AppOrganizationBranch(y));
      },
        error => this.formError.setFormErrors(error.json())
      );

    this.subscription.push(sub);

  }

  selectOrganization(organization: AppOrganizationBranch) {
    this.selectedOrganization.emit({
      organizationName: organization.organizationName,
      orgniazationId: organization.organizationId
    });
  }

  ngOnDestroy() {
    this.subscription.forEach(x => x.unsubscribe());
  }
}
