import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IAppAddress } from 'src/app/_models/address/app-address';
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';


/**
 * @description helper function for this component, a habit I picked up
 */
export class NewUserAddressFunctions {

    public static createForm(fb: FormBuilder): FormGroup {

        return fb.group({
            countryId: [null, [CustomValidator.CustomRequired('Country')]],
            stateId: [null, [CustomValidator.CustomRequired('State')]],
            postCode: [null, CustomValidator.MaxLength(100)],
            street: [null, CustomValidator.MaxLength(500)],
        });
    }

}