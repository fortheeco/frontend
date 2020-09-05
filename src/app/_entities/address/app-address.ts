import { ICountry, IState } from './app-country';


export interface IAppAddress {
    id: string;
    country: ICountry;
    state: IState;
    postCode: string;
    street: string;
}
