import { EntityAddress } from '../address/entity-address';


export class AppOrganizationBranch {
    branchStatus: string;
    entityType: string;
    isHeadQuarters: boolean;
    localAddress: EntityAddress;
    organizationId: string;
    organizationName: string;
    headQuarterId: string;

    constructor(data: Partial<AppOrganizationBranch>) {
        Object.assign(this, data);
        this.localAddress = new EntityAddress(this.localAddress);
    }
}
