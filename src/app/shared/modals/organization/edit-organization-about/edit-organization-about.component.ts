import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppOrganization } from 'src/app/_models/organization/app-organization';
import { AppOrganizationetails } from 'src/app/_models/organization/app-organization-detail';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EditOrganizationAboutFunctions } from './edit-organization-about-functions';
import { ApplicationConstant } from 'src/app/_models/app-constant';
import { OrganizationService } from 'src/app/_services/organization/organization.service';
import { Subscription } from 'rxjs';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-organization-about',
  templateUrl: './edit-organization-about.component.html',
  styleUrls: ['./edit-organization-about.component.css']
})
export class EditOrganizationAboutComponent implements OnInit, OnDestroy {

  @Input() organization: AppOrganization;

  @Output() editedOrganization = new EventEmitter<AppOrganizationetails>();

  subscriptions: Subscription[] = [];

  editOrganizationDetailsForm: FormGroup;

  organizationTypes = ApplicationConstant.organizationType;
  industries: string[] = [];

  loading = false;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private organizationService: OrganizationService,
    private formError: FormErrorService
    ) { }

  ngOnInit() {
    this.initializaeForm();
    this.getIndustries();
  }

  initializaeForm() {
    this.editOrganizationDetailsForm = EditOrganizationAboutFunctions.createForm(this.fb, this.organization);
  }

  getIndustries() {

    const sub = this.organizationService.getOrganizationIndustries().subscribe((x: any) => {
      this.industries = x.json().industries;
    });

    this.subscriptions.push(sub);
  }

  updateOrganization() {

    if (this.editOrganizationDetailsForm.invalid) { this.formError.validateAllFields(this.editOrganizationDetailsForm); return; }

    this.loading = true;


    console.log(this.editOrganizationDetailsForm.value);

    const sub = this.organizationService.updateOrganizationDetails(this.editOrganizationDetailsForm.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => {
        console.log(x);

        // just a slight change in the backend
        const update = this.editOrganizationDetailsForm.value as AppOrganizationetails;

        update.dateJoined = this.organization.detail.dateJoined;

        this.editedOrganization.emit(new AppOrganizationetails(update));
        this.activeModal.close();
      },
        error => console.log(error)
      );

  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
