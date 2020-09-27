import { FormBuilder, FormGroup } from "@angular/forms";
import { OrganizationBranchFilter } from 'src/app/dashboard/organization/organization-branches/organization-branches-functions';
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';


export class FilterOrganizationBranchesFunctions {

    public static filter: OrganizationBranchFilter = {
        accepted: null,
        countryId: null,
        countryName: null,
        stateId: null,
        stateName: null,
        organizationName: null,
    };

    public static createForm(fb: FormBuilder, currentFilter: OrganizationBranchFilter, data: OrganizationBranchFilter): FormGroup {
        data.countryId = currentFilter.countryId;
        data.countryName = currentFilter.countryName;

        data.stateId = currentFilter.stateId;
        data.stateName = currentFilter.stateName;
        
        return fb.group({
            accepted: [currentFilter.accepted],
            countryId: [currentFilter.countryId],
            countryName: [currentFilter.countryName],
            stateId: [currentFilter.stateId],
            stateName: [currentFilter.stateName],
            organizationName: [currentFilter.organizationName, [CustomValidator.MaxLength(128)]],
          });
    }

    public static compileData(data: OrganizationBranchFilter, form: FormGroup): OrganizationBranchFilter  {
        data.accepted = form.get('accepted').value;
        data.organizationName = form.get('organizationName').value;

        return data;
    }


}
