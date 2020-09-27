import * as moment from 'moment';
import { CustomApplicationConstant } from '../app-constant';


export class AppOrganizationetails {

    about: string;
    dateJoined: moment.Moment;
    name: string;
    industry: string;
    organizationType: string;
    website: string;
    yearFounded: number;

    constructor(data: Partial<AppOrganizationetails>) {
        Object.assign(this, data);

        this.dateJoined = moment(this.dateJoined);
    }

    displayTypeOfOrganization() {

        if (!this.organizationType) { return null; }

        const type =  CustomApplicationConstant.organizationType.find(x => x.key === this.organizationType);
        return type.value;

    }
}
