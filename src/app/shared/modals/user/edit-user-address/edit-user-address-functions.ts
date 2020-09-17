import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IAppAddress } from 'src/app/_models/address/app-address';
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';
import { EntityAddress } from 'src/app/_models/address/entity-address';


/**
 * @description helper function for this component, a habit I picked up
 */
export class UpdatedUserAddressFunctions {

    public static createForm(fb: FormBuilder, entityAddress: EntityAddress): FormGroup {

        return fb.group({
            countryId: [entityAddress.country.id, [CustomValidator.CustomRequired('Country')]],
            stateId: [entityAddress.state.id, [CustomValidator.CustomRequired('State')]],
            postCode: [entityAddress.postCode, CustomValidator.MaxLength(100)],
            street: [entityAddress.street, CustomValidator.MaxLength(500)],
            addressId: [entityAddress.id]
        });
    }

}