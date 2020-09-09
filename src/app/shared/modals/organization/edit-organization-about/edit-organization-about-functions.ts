import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';
import { AppOrganization } from 'src/app/_models/organization/app-organization';
import { CommonValidator } from 'src/app/shared/custom-validators/common-validator';


export class EditOrganizationAboutFunctions {

    public static createForm(fb: FormBuilder, organization: AppOrganization): FormGroup {
        return fb.group({
            about: [organization.detail.about, [CustomValidator.MaxLength(2000)]],
            industry: [organization.detail.industry, [CustomValidator.CustomRequired('Industry'), CustomValidator.MaxLength(500)]],
            website: [organization.detail.website, [CustomValidator.ValidaUrl, CustomValidator.MaxLength(1000)]],
            organizationType: [organization.detail.organizationType,
                [CustomValidator.CustomRequired('Organization type'), CustomValidator.OrganizationType]],
            yearFounded: [organization.detail.yearFounded, [CommonValidator.ValidNumberRange(1000, new Date().getFullYear())]]
        });
    }

}
