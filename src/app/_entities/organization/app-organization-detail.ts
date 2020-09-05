import * as moment from "moment";


export class AppOrganizationetails
{
    about: string;
    dateJoined: moment.Moment;
    name: string;
    organizationType: string;
    website: string;
    yearFounded: number;

    constructor(data: Partial<AppOrganizationetails>) {
        Object.assign(this, data);

        this.dateJoined = moment(this.dateJoined);
    }
}
