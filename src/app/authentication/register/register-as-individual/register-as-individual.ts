import { FormBuilder } from '@angular/forms';
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';
import { CommonValidator } from 'src/app/shared/custom-validators/common-validator';
import { TimeValidator } from 'src/app/shared/custom-validators/time-validation';


export class RegisterAsIndividual {

    public static createForm(fb: FormBuilder) {
        return fb.group({
            firstName: [null, [CustomValidator.CustomRequired('First Name'), CustomValidator.MaxLength(128)]],
            lastName: [null, [CustomValidator.CustomRequired('Last Name'), CustomValidator.MaxLength(128)]],
            emailAddress: [null, [CustomValidator.CustomRequired('Email Address'), CustomValidator.CustomEmail()]],
            dateOfBirth: [null, TimeValidator.CustomValidDate],
            password: [null, [CustomValidator.CustomRequired('Password'), CommonValidator.ValidPassword()]],
            confirmPassword: [null, [CommonValidator.confirmation('password')]],
        });
    };

}
