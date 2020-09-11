import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';
import { AppOrganization } from 'src/app/_models/organization/app-organization';
import { CommonValidator } from 'src/app/shared/custom-validators/common-validator';


export class RegisterAsOrganizationFunctions {

    public static createForm(fb: FormBuilder): FormGroup {
        return fb.group({
            name: [null,  [CustomValidator.CustomRequired('Name of Organization'), CustomValidator.MaxLength(200)]],
            industry: [null, [CustomValidator.CustomRequired('Industry'), CustomValidator.MaxLength(500)]],
            emailAddress: [null, [CustomValidator.CustomRequired('Email'), CustomValidator.CustomEmail()]],
            organizationType: [null, [CustomValidator.CustomRequired('Organization type'), CustomValidator.OrganizationType]],
            password: [null, [CustomValidator.CustomRequired('Password'), CommonValidator.ValidPassword()]],
            confirmPassword: [null, [CommonValidator.confirmation('password')]],
        });
    }

}




// Just keeping this code 
// getAddress() {
//     const modalref =  this.modalService.open(GetViewLocationComponent);

//     modalref.componentInstance.address = this.address;

//     const sub = modalref.componentInstance.addressChanged.subscribe((x: IAppAddress) => {
//       this.address = x;
//     });

//     this.subscriptions.push(sub);

//   }

//   displayAddress() {

//     if (!this.address) { return null; }

//     if (!this.address.country) {return null; }

//     const postCode = this.address.postCode ? this.address.postCode : '';
//     const street = this.address.street ? this.address.street : '';

//     const fullAddress = `${this.address.country.name}, ${this.address.state.name} ${street} ${postCode}`;

//     if (fullAddress.length <= 50) { return fullAddress; }

//     return fullAddress.substring(0, 50) + ' ...';
//   }
