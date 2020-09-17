

export interface IAppContacts {
    entityType: string;
    contacts: IContact[];
}

export interface IContact {
    id: string;
    contactType: string;
    value: string;
}

