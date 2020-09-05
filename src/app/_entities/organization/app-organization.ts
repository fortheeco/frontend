import { AppOrganizationetails } from "./app-organization-detail";
import { IFollows } from "../iheritable/app-follows";
import { IAppAddress } from "../address/app-address";
import { IProfileMedia } from "../media/app-profile-media";

export class AppOrganization
{
    entityType: string;
    detail: AppOrganizationetails;
    id: string;
    follows: IFollows;
    localAddress: IAppAddress;
    media: IProfileMedia;
    numberOfEmployees: number;
    rating: number;

    constructor(data: Partial<AppOrganization>) {
        Object.assign(this, data);
    }

}