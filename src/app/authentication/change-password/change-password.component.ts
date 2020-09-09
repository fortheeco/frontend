import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChangePasswordFunctions } from './change-password-functions';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/_services';
import { finalize } from 'rxjs/operators';
import { UtilityProvider } from 'src/app/_providers/utility';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

  changePasswordFrom: FormGroup;

  loading = false;

  sent = false;

  userId: string;
  token: string;

  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private formError: FormErrorService,
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private utility: UtilityProvider
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.changePasswordFrom = ChangePasswordFunctions.createForm(this.fb);
    this.token = this.route.snapshot.queryParamMap.get('token');
    this.userId = this.route.snapshot.queryParamMap.get('userId');
  }

  changePassword() {
    if (this.changePasswordFrom.invalid) { this.formError.validateAllFields(this.changePasswordFrom); return; }

    this.loading = true;

    const data = {
      token : encodeURIComponent(this.token),
      userId: this.userId,
      password: this.changePasswordFrom.get('password').value
    };

    const sub = this.auth.changePassword(data)
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => {
        this.sent = true;
      },
        error => {
          this.utility.showToast('danger', 'Could not change password, kindly request new link and try again later');
          this.loading = false;
        }
      );

    this.subscriptions.push(sub);

  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
