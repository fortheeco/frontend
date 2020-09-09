import { AppOrganizationetails } from './app-organization-detail';
import { IFollows } from '../iheritable/app-follows';
import { IProfileMedia } from '../media/app-profile-media';
import { EntityAddress } from '../address/entity-address';

export class AppOrganization {
    entityType: string;
    detail: AppOrganizationetails;
    id: string;
    follows: IFollows;
    localAddress: EntityAddress;
    media: IProfileMedia;
    numberOfEmployees: number;
    rating: number;

    constructor(data: Partial<AppOrganization>) {
        Object.assign(this, data);
        this.localAddress = new EntityAddress(this.localAddress);
        this.detail = new AppOrganizationetails(this.detail);
    }

    displayLocalAddress() {

        if (!this.localAddress) { return 'Not set yet'; }

        if (!this.localAddress.country) { return 'Not set yet'; }

        if (!this.localAddress.state) { return 'Not set yet'; }

        let address = `${this.localAddress.country.name}, ${this.localAddress.state.name} `;
        address += `${this.localAddress.street} ${this.localAddress.postCode}`;

        return address;
    }

}
