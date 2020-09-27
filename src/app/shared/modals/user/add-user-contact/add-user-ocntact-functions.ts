import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';


export class AddUserContactFunctions {

    public static createForm(fb: FormBuilder): FormGroup
    {
        return fb.group({
            contactType: [null, [CustomValidator.CustomRequired('Contact Type'), CustomValidator.MaxLength(50)]],
            value: [null, [CustomValidator.CustomRequired('Value'), CustomValidator.MaxLength(50)]],
        });
    }

}
