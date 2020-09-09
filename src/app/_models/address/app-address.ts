import { ICountry, IState } from './app-country';


export class IAppAddress {
    id: string;
    country: ICountry;
    state: IState;
    postCode: string;
    street: string;
}
