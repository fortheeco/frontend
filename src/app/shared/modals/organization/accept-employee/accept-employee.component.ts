import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppOrganizationEmployee } from 'src/app/_models/organization/app-organization-employee-skills';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrganizationService } from 'src/app/_services/organization/organization.service';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { AcceptEmployeeFunctions } from './accept-employee-fundtions';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-accept-employee',
  templateUrl: './accept-employee.component.html',
  styleUrls: ['./accept-employee.component.css']
})
export class AcceptEmployeeComponent implements OnInit, OnDestroy {

  acceptEmployeeForm: FormGroup;
  subscriptions: Subscription[] = [];

  @Input() employee: AppOrganizationEmployee;
  @Output() completed = new EventEmitter();

  loading = false;

  constructor(
    public activeModal: NgbActiveModal,
    private organizationService: OrganizationService,
    public formError: FormErrorService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.acceptEmployeeForm = AcceptEmployeeFunctions.createForm(this.fb, this.employee);
  }

  acceptThisIndividual() {

    if (this.acceptEmployeeForm.invalid) { this.formError.validateAllFields(this.acceptEmployeeForm); return; }

    this.loading = true;
    const sub = this.organizationService.acceptOrRejectEmployee(this.acceptEmployeeForm.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => {
        console.log(x.json);
        this.completed.emit();
        this.activeModal.close();
      },
        error => this.formError.setFormErrors(error, this.acceptEmployeeForm)
      );

    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
