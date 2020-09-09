import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';




export class ForgotPasswordFunctions {


    public static createForm(fb: FormBuilder): FormGroup {
       return fb.group({
        emailAddress: [null, [CustomValidator.CustomRequired('Email Address'), CustomValidator.CustomEmail()]]
       });
    }

}