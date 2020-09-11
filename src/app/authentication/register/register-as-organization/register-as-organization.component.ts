import { Component, OnInit, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrganizationService } from 'src/app/_services/organization/organization.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GetViewLocationComponent } from 'src/app/shared/modals/get-view-location/get-view-location.component';
import { IAppAddress } from 'src/app/_models/address/app-address';
import { ApplicationConstant } from 'src/app/_models/app-constant';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterAsOrganizationFunctions } from './register-as-organization-functions';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { AuthenticationService } from 'src/app/_services';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { UtilityProvider } from 'src/app/_providers/utility';

@Component({
  selector: 'app-register-as-organization',
  templateUrl: './register-as-organization.component.html',
  styleUrls: ['./register-as-organization.component.css']
})
export class RegisterAsOrganizationComponent implements OnInit, OnDestroy {

  address: IAppAddress = {} as IAppAddress;

  // close all subscriptions
  subscriptions: Subscription[] = [];

  // Register as organization
  @Output() registerAsIndividual = new EventEmitter<any>();

  organizationTypes = ApplicationConstant.organizationType;
  industries: string[] = [];

  registerOrganizationForm: FormGroup;

  loading = false;

  constructor(
    private organizationService: OrganizationService,
    private fb: FormBuilder,
    private formError: FormErrorService,
    private auth: AuthenticationService,
    private utility: UtilityProvider,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getIndustries();
    this.initializeForm();
  }

  initializeForm() {
    this.registerOrganizationForm = RegisterAsOrganizationFunctions.createForm(this.fb);
  }

  registerAsIndividualAction() {
    this.registerAsIndividual.emit();
  }

  getIndustries() {
    const sub = this.organizationService.getOrganizationIndustries()
      .subscribe((x) => {
        this.industries = x.json().industries;
      });

    this.subscriptions.push(sub);
  }

  registerOrganization() {

    if (this.registerOrganizationForm.invalid) { this.formError.validateAllFields(this.registerOrganizationForm); return; }

    this.loading = true;

    const sub = this.auth.signUpAsOrganization(this.registerOrganizationForm.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => {
        this.utility.showToast('success', 'Account created. kindly check your email');
        this.router.navigate(['/authentication/login']);
      },
        error => {
          this.formError.setFormErrors(error.json(), this.registerOrganizationForm);
          // console.log(error.json());
          // this.utility.showToast('danger', 'It seems something went wrong, kindly check/change your details and try again')
        }
      );

      this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
