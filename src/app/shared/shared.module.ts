import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorErrorMessageComponent } from './custom-validators/validator-error-message/validator-error-message.component';
import { UserContactCommunicateComponent } from './components/user/user-contact/user-contact-communicate/user-contact-communicate.component';
import { UserContactAddressesComponent } from './components/user/user-contact/user-contact-addresses/user-contact-addresses.component';
import { UserContactComponent } from './components/user/user-contact/user-contact.component';

@NgModule({
  declarations: [
    ValidatorErrorMessageComponent,
    UserContactCommunicateComponent,
    UserContactAddressesComponent,
    UserContactComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ValidatorErrorMessageComponent,
    UserContactCommunicateComponent,
    UserContactAddressesComponent,
    UserContactComponent,
  ]
})
export class SharedModule { }
