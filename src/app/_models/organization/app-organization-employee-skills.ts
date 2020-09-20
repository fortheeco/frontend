import { AppIndividualSkill } from '../individual/individual-skill';
import { EntityAddress } from '../address/entity-address';


export interface AppOrganizationSkills {
    totalSkills: number;
    topTenSKills: AppIndividualSkill[];
}

export class AppOrganizationEmployees {
    individualId: string;
    professionId: string;
    entityType: string;
    fullName: string;
    position: string;
    status: AppEmploymentStatus;
    department: string;
    totalSkills: number;
    topTenSkills: AppIndividualSkill[];
    dateStarted: Date;
    dateLeft: Date;
    localAddress: EntityAddress;

    constructor(data: Partial<AppOrganizationEmployees>) {
        Object.assign(this, data);
        this.localAddress = new EntityAddress(this.localAddress);
    }
}

export enum AppEmploymentStatus {
    accepted = 'Accepted',
    left = 'Left',
    requestSentPendingReply = 'Request Sent and Pending Reply From Organization'
}
