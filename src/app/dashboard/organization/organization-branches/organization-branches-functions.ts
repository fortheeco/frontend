import { ApplicationRequestPagination, ApplicationResponsePagination } from 'src/app/_models/iheritable/app-pagination';
import { AppOrganizationBranch } from 'src/app/_models/organization/app-organization-branch';


export class OrganizationBranchesFunctions {

    public static AppFilterConstant = {
        accepted: {
            name: 'Accepted',
            value: null,
        },
        countryName: {
            name: 'Country',
            value: null,
        },
        stateName: {
            name: 'State',
            value: null
        },
        organizationName: {
            name: 'Name',
            value: null,
        }
    };

    public static avaliableFilter(currentFilter: OrganizationBranchFilter): {name: string, value: string}[] {
        const filter: {name: string, value: string}[] = [];

        for (const key in currentFilter) {


            if ((currentFilter[key] || currentFilter[key] === false) && OrganizationBranchesFunctions.AppFilterConstant[key]) {
                filter.push(
                    {
                        name: OrganizationBranchesFunctions.AppFilterConstant[key].name,
                        value: currentFilter[key]
                    }
                );
            }

        }

        return filter;

    }

}

export class OrganizationBranchRequestPagination extends ApplicationRequestPagination {
    organizationId: string;
    filter: OrganizationBranchFilter;
}

export class OrganizationBranchFilter {
    accepted: boolean;
    countryId: number;
    countryName: string;
    stateId: number;
    stateName: string;
    organizationName: string;
}

export class OrganizationBranchResponsePagination extends ApplicationResponsePagination<AppOrganizationBranch> {}

