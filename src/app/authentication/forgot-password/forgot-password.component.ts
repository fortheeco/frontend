import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ForgotPasswordFunctions } from './forgot-password-functions';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { AuthenticationService } from 'src/app/_services';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  forgotPasswordForm: FormGroup;

  loading = false;

  sent = false;

  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private formError: FormErrorService,
    private auth: AuthenticationService,
  ) { }

  ngOnInit() {
    this.initiliazeForm();
  }

  initiliazeForm() {
    this.forgotPasswordForm = ForgotPasswordFunctions.createForm(this.fb);
  }

  sendEmail() {

    if (this.forgotPasswordForm.invalid) { this.formError.validateAllFields(this.forgotPasswordForm); return; }

    this.loading = true;

    const sub = this.auth.forgotPassword(this.forgotPasswordForm.value)
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
