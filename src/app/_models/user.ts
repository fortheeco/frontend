import { EntityAddress } from './address/entity-address';


export class AppCurrentUser {
    email: string;
    fullName: string;
    id: string;
    localAddress: EntityAddress;
    placeOfWork: any;
    profilePicture: string;
    userType: string;

    constructor(data: Partial<AppCurrentUser>) {
        Object.assign(this, data);
        this.localAddress = new EntityAddress(this.localAddress);
    }

    isOwner(userId: string) {
        return this.id === userId;
    }
}

export class User {
    user: AppCurrentUser;
    role: string;
    token?: string;
    access_token?: string;

    constructor(data: Partial<User>) {
        Object.assign(this, data);
        this.user = new AppCurrentUser(this.user);
    }
}
