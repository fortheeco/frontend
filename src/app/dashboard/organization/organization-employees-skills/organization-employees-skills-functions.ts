import { ApplicationRequestPagination, ApplicationResponsePagination } from 'src/app/_models/iheritable/app-pagination';
import { AppOrganizationSkills, AppOrganizationEmployees, AppEmploymentStatus } from 'src/app/_models/organization/app-organization-employee-skills';

export const AppFilterConstant = {
    staffName: {
        name: 'Name',
        value: null,
    },
    position: {
        name: 'Position',
        value: null,
    },
    status: {
        name: 'Status',
        value: null,
    },
    department: {
        name: 'Department',
        value: null,
    },
};

export class OrganizationEmpployeesSKillsFunctions {

    public static avaliableFilter(request: EmployeeSkillsRequestPagination): {name: string, value: string}[] {
        const filter: {name: string, value: string}[] = [];

        for (const key in request.filter) {
            if (request.filter[key]) {
                if (key === 'status') {
                    filter.push(
                        {
                            name: AppFilterConstant[key].name,
                            value: AppEmploymentStatus[request.filter[key]]
                        }
                    );
                 } else {
                    filter.push(
                        {
                            name: AppFilterConstant[key].name,
                            value: request.filter[key]
                        }
                    );
                 }

             }
        }

        return filter;
    }

}

export class EmployeeSkillsRequestPagination extends ApplicationRequestPagination {
    organizationId: string;
    filter: EmployeeSkillsFilter;
}

export class EmployeeSkillsFilter {
    staffName: string;
    position: string;
    status: AppEmploymentStatus;
    department: string;
}


export class EmployeeSkillsResponsePagination extends ApplicationResponsePagination<AppOrganizationEmployees> {
    numberOfEmployees: number;
}


