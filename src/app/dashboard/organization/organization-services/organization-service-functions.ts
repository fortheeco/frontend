import { ApplicationRequestPagination } from "src/app/_models/iheritable/app-pagination";


export class OrganizationServiceRequestPagination extends ApplicationRequestPagination {
    organizationId: string;
    filter: {
        serviceName: string;
    };
}
