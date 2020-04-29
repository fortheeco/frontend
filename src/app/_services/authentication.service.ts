import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Headers, Http} from "@angular/http";

import { User } from '../_models';
import { Router, ActivatedRoute } from '@angular/router';
import {BASE_URL} from "../_providers/config/config";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
        private currentUserSubject: BehaviorSubject<User>;
        public currentUser: Observable<User>;

        private BASE_URL = BASE_URL;
        private headers: Headers = new Headers({'Content-Type': 'application/json'});
        private headers_formdata: Headers = new Headers({'Content-Type': undefined});

    constructor(
        private http: HttpClient,
        private httpClient: HttpClient,
        private route: ActivatedRoute,
        private httpc:Http,
        private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    login(email: string, password: string) {
        const url = `${this.BASE_URL}api/auth/login`;

        return this.http.post<any>(url, { email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.access_token) {
                    console.log(user);
                    if(user.user.default_password_changed == 'yes'){
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        this.currentUserSubject.next(user);
                        return {status: 1};
                    }else{
                        this.currentUserSubject.next(user);
                        return {status: 2};
                    }
                }

            }));
    }
    signup(registrationData) {
        const url = `${this.BASE_URL}api/auth/signup`;

        // return this.http.post<any>(`/users/authenticate`, { username, password })
        return this.http.post<any>(url, registrationData)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                // if (user && user.access_token) {
                //     // store user details and jwt token in local storage to keep user logged in between page refreshes
                //     localStorage.setItem('currentUser', JSON.stringify(user));
                //     this.currentUserSubject.next(user);
                // }

                // return user;
            }));
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/authentication/login']);
    }
}