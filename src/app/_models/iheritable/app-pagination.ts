

export class ApplicationResponsePagination<T> {
    pageNumber: number;
    pageSize: number;
    totalItems: number;
    entities: T[];
}

export class ApplicationRequestPagination {
    pageNumber: number;
    pageSize: number;
}
