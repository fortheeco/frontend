import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotfoundComponent } from './404/not-found.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutes } from './authentication.routing';
import { RegisterComponent } from './register/register.component';
import { RegisterAsIndividualComponent } from './register/register-as-individual/register-as-individual.component';
import { RegisterAsOrganizationComponent } from './register/register-as-organization/register-as-organization.component';
import { SharedModule } from '../shared/shared.module';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RequestNewEmailVerificationComponent } from './request-new-email-verification/request-new-email-verification.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    SharedModule,
  ],
  declarations: [
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    RegisterAsIndividualComponent,
    RegisterAsOrganizationComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    RequestNewEmailVerificationComponent,
  ],
  exports: [
    CommonModule,
  ]
})
export class AuthenticationModule {}
