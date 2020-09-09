import { Routes } from '@angular/router';

import { NotfoundComponent } from './404/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RequestNewEmailVerificationComponent } from './request-new-email-verification/request-new-email-verification.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotfoundComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: RegisterComponent
      },
      {
        path: 'verify-email',
        component: VerifyEmailComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'request-verification',
        component: RequestNewEmailVerificationComponent
      },
    ]
  }
];
