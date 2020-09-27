import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASE_URL } from '../_providers/config/config';
import { ActivatedRoute, Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    private BASE_URL = environment.BASE_URL;
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private headers_formdata: Headers = new Headers({'Content-Type': undefined});

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private httpc: Http,
        private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('ecoUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    getUserContact(data: any): Observable<any> {
        // console.log(this.currentUserValue)
        const id = this.currentUserValue.user.id;
        const userToken: string = 'Bearer ' + this.currentUserValue.token;
        const url = `${this.BASE_URL}api/user/contacts?id=${id}`;

        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url, {headers: this.headers});
    }

    getUserAddresses(data: any): Observable<any> {

        const userToken: string = 'Bearer ' + this.currentUserValue.token;
        const url = `${this.BASE_URL}api/user/more-address`;

        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, {headers: this.headers});
    }

    addUserContact(data: any): Observable<any> {

        const userToken: string = 'Bearer ' + this.currentUserValue.token;
        const url = `${this.BASE_URL}api/user/contact`;

        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, {headers: this.headers});
    }

    removeUserContact(data: any): Observable<any> {

        const userToken: string = 'Bearer ' + this.currentUserValue.token;
        const url = `${this.BASE_URL}api/user/contact`;

        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);

        return this.httpc.delete(url, {headers: this.headers, body: data});
    }

    addNewAddress(data: any): Observable<any> {

        const userToken: string = 'Bearer ' + this.currentUserValue.token;
        const url = `${this.BASE_URL}api/user/address`;

        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);

        return this.httpc.post(url, data, {headers: this.headers});
    }

    addFreeNewAddress(data: any): Observable<any> {

        const userToken: string = 'Bearer ' + this.currentUserValue.token;
        const url = `${this.BASE_URL}api/user/free-address`;

        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);

        return this.httpc.post(url, data, {headers: this.headers});
    }

    updateUserAddress(data: any): Observable<any> {

        const userToken: string = 'Bearer ' + this.currentUserValue.token;
        const url = `${this.BASE_URL}api/user/address`;

        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);

        return this.httpc.put(url, data, {headers: this.headers});
    }

    getAvaliableFreeAddress(): Observable<any> {

        const userToken: string = 'Bearer ' + this.currentUserValue.token;
        const url = `${this.BASE_URL}api/user/free-address`;

        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);

        return this.httpc.get(url, {headers: this.headers});
    }

    removeUserAddress(data: any): Observable<any> {

        const userToken: string = 'Bearer ' + this.currentUserValue.token;
        const url = `${this.BASE_URL}api/user/address`;

        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);

        return this.httpc.delete(url, {headers: this.headers, body: data});
    }


    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`/users/${id}`);
    }
}