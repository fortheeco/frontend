import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserContactAddressesComponent } from './components/user/user-contact/user-contact-addresses/user-contact-addresses.component';
import { UserContactCommunicateComponent } from './components/user/user-contact/user-contact-communicate/user-contact-communicate.component';
import { UserContactComponent } from './components/user/user-contact/user-contact.component';
import { ValidatorErrorMessageComponent } from './custom-validators/validator-error-message/validator-error-message.component';

@NgModule({
  declarations:[
    UserContactCommunicateComponent,
    UserContactAddressesComponent,
    UserContactComponent,
    ValidatorErrorMessageComponent,
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule,
    RouterModule,

    UserContactCommunicateComponent,
    UserContactAddressesComponent,
    UserContactComponent,
    ValidatorErrorMessageComponent
  ]
})
export class SharedModule { }
