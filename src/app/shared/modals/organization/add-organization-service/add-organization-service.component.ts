import { Component, OnInit, Output, OnDestroy, EventEmitter } from '@angular/core';
import { IAppOrganizationService } from 'src/app/_models/organization/app-organization-service';
import { OrganizationService } from 'src/app/_services/organization/organization.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-organization-service',
  templateUrl: './add-organization-service.component.html',
  styleUrls: ['./add-organization-service.component.css']
})
export class AddOrganizationServiceComponent implements OnInit, OnDestroy {

  @Output() newOrganizationService = new EventEmitter<IAppOrganizationService>() ;

  addOrganizationServiceForm: FormGroup;

  // close all subscriptions
  subscriptions: Subscription[] = [];

  loading = false;

  constructor(
    private organizationService: OrganizationService,
    private fb: FormBuilder,
    public formError: FormErrorService,
    public activeModal: NgbActiveModal,
    ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.formError.genericError = null;
    this.addOrganizationServiceForm = this.fb.group({
      serviceName: [null, [CustomValidator.CustomRequired('Service Name'), CustomValidator.MaxLength(200)]],
    });
  }

  addService() {
    this.formError.genericError = null;

    if (this.addOrganizationServiceForm.invalid) { this.formError.validateAllFields(this.addOrganizationServiceForm); }

    this.loading = true;

    const sub = this.organizationService.addNewOrganizationService(this.addOrganizationServiceForm.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => {
        this.newOrganizationService.emit(x.json() as IAppOrganizationService);
        this.activeModal.close();
      },
        error => this.formError.setFormErrors(error.json(), this.addOrganizationServiceForm)
      );

      this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
