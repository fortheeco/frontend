import { IAppAddress } from './app-address';
import { ICountry, IState } from './app-country';
import * as moment from 'moment';


export class EntityAddress extends IAppAddress {
    isFree: boolean;
    isLocal: boolean;
    nextChange: moment.Moment;
    payments: any[];
    verifiedInLocation: boolean;

    constructor(data: Partial<EntityAddress>) {
        super(data);
        Object.assign(this, data);
        this.nextChange = moment(this.nextChange);
    }

    canUpdate() {
        return this.nextChange.isBefore(moment());
    }
}
