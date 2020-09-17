import { ApplicationRequestPagination } from "src/app/_models/iheritable/app-pagination";


export class UserContactAddressesRequestPagination extends ApplicationRequestPagination {
    userId: string;
}

export interface IFreeAddresses {
    globalAddress: boolean;
    localAddress: boolean;
}
