import { ICountry, IState } from './app-country';


export class IAppAddress {
    id: string;
    country: ICountry;
    state: IState;
    postCode: string;
    street: string;

    constructor(data: Partial<IAppAddress>) {
        Object.assign(this, data);
    }

    displayAddress() {

        let addr = '';

        if (this.street) { addr += this.street + ', '; }

        if (this.postCode) { addr += this.postCode + ', '; }

        addr += this.state.name + ', ';

        addr += this.country.name;

        return addr;


    }
}
