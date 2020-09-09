import { IAppAddress } from './app-address';
import { ICountry, IState } from './app-country';
import * as moment from 'moment';


export class EntityAddress extends IAppAddress
{
    isFree: boolean;
    isLocal: boolean;
    nextChange: moment.Moment;
    payment: any[];
    varifiedInLocation: boolean;

    constructor(data: Partial<EntityAddress>) {
        super();
        Object.assign(this, data);
        this.nextChange = moment(this.nextChange);
    }
}
