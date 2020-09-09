import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IAppAddress } from 'src/app/_models/address/app-address';


/**
 * @description helper function for this component, a habit I picked up
 */
export class GetViewLocationFunctions {

    public static createForm(fb: FormBuilder, address: IAppAddress): FormGroup {

        const countryId = address && address.country ? address.country.id : null;
        const stateId = address && address.state ? address.state.id : null;
        const postCode = address ? address.postCode : null;
        const street = address ? address.street : null;
        const id = address ? address.id : null;

        return fb.group({
            countryId: [countryId, [Validators.required]],
            stateId: [stateId, [Validators.required]],
            postCode: [postCode, Validators.maxLength(100)],
            street: [street, Validators.maxLength(500)],
            id: [id]
        });
    }

}