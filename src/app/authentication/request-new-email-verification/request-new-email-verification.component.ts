import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { AuthenticationService } from 'src/app/_services';
import { RequestNewVerifyEmailFunctions } from './request-new-email-functions';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-request-new-email-verification',
  templateUrl: './request-new-email-verification.component.html',
  styleUrls: ['./request-new-email-verification.component.css']
})
export class RequestNewEmailVerificationComponent implements OnInit, OnDestroy {

  requestVerificationEmailForm: FormGroup;

  loading = false;

  sent = false;

  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private formError: FormErrorService,
    private auth: AuthenticationService,
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.requestVerificationEmailForm = RequestNewVerifyEmailFunctions.createForm(this.fb);
  }

  makeRequest() {
    if (this.requestVerificationEmailForm.invalid) { this.formError.validateAllFields(this.requestVerificationEmailForm); return; }

    this.loading = true;

    const sub = this.auth.requestEmailVerificationAgain(this.requestVerificationEmailForm.value)
      .pipe(finalize(() => {
        this.loading = false;
        this.sent = true;
      }))
      .subscribe(x => {

      });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
