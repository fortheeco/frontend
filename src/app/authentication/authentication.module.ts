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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule
  ],
  declarations: [
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    RegisterAsIndividualComponent,
    RegisterAsOrganizationComponent,
  ],
  exports: [
    CommonModule,
  ]
})
export class AuthenticationModule {}
