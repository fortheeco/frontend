import { FormBuilder, FormGroup } from "@angular/forms";
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';


export class JoinOrganizationFunctions {

    public static createForm(fb: FormBuilder): FormGroup {
        return fb.group({
            organizationName: [null,
                [CustomValidator.CustomRequired('Organization Name'), CustomValidator.MinLength(3), CustomValidator.MaxLength(128)]],
            organizationId: [null]
        });
    }
}

export interface IJoinOrganization {
    organizationName: string;
    orgniazationId: string;
}

