import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services';
import { debounceTime, first, finalize } from 'rxjs/operators';
import { RegisterAsIndividual } from './register-as-individual';
import { UtilityProvider } from 'src/app/_providers/utility';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import * as moment from 'moment';

@Component({
  selector: 'app-register-as-individual',
  templateUrl: './register-as-individual.component.html',
  styleUrls: ['./register-as-individual.component.css']
})
  export class RegisterAsIndividualComponent implements OnInit, OnDestroy {

    signupForm: FormGroup;
    loading = false;

    showPassword = false;

    // close all subscriptions
    subscriptions: Subscription[] = [];

    // Register as organization
    @Output() registerAsOrganization = new EventEmitter<any>();

    // For manipulating the date field
    newDate = new Date();

    staticAlertClosed = false;
    uploadSuccess = false;
    responseMessage: string;
    messageType: any;

    constructor(
          private formBuilder: FormBuilder,
          private route: ActivatedRoute,
          private router: Router,
          private authenticationService: AuthenticationService,
          private utility: UtilityProvider,
          private formError: FormErrorService
    ) {

    }

    ngOnInit() {
      this.initialeForm();
    }

    initialeForm() {
      this.signupForm = RegisterAsIndividual.createForm(this.formBuilder);
    }

    onSubmit() {

      if (this.signupForm.invalid) { this.formError.validateAllFields(this.signupForm); return null; }

      this.loading = true;

      // quick fix to reformart the date entered
      const data = this.signupForm.value;
      data.dateOfBirth = moment(this.signupForm.get('dateOfBirth').value);

      const sub = this.authenticationService.signup(data)
        .pipe(finalize(() => this.loading = false))
        .subscribe(x => {
          this.utility.showToast('success', 'Account created. kindly check your email');
          this.router.navigate(['/authentication/login']);
        },
          error => this.formError.setFormErrors(error.json(), this.signupForm)
        );

      this.subscriptions.push(sub);
    }

    registerAsOrganizationAction() {
      this.registerAsOrganization.emit();
    }

    ngOnDestroy() {
      this.subscriptions.forEach(x => x.unsubscribe());
    }

}
