import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';
import { CommonValidator } from 'src/app/shared/custom-validators/common-validator';


export class ChangePasswordFunctions {


    public static createForm(fb: FormBuilder): FormGroup {
       return fb.group({
        password: [null, [CustomValidator.CustomRequired('Password'), CommonValidator.ValidPassword()]],
        confirmPassword: [null, CommonValidator.confirmation('password')]
       });
    }

}
