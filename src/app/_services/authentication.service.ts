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
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('ecoUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    login(emailAddress: string, password: string) {
        const url = `${this.BASE_URL}api/auth/signin`;

        return this.http.post<any>(url, { emailAddress, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    console.log(user);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('ecoUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return {status: 1};
                }

            },error => {
                console.log(error);

            }
            ));
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


    /**
     * RETURN Individual Data
     *
     * @param id
     * @return Response
     */


	getIndividualData(): Observable<any> {
		// console.log(this.currentUserValue)
		let id = this.currentUserValue.user.id;
	    const userToken: string = 'Bearer ' + this.currentUserValue.token;
		const url = `${this.BASE_URL}api/Individual?IndividualId=${id}`;

	    this.headers = new Headers({'Content-Type': 'application/json'});
	    this.headers.append('Authorization', userToken);
	    return this.httpc.get(url,{headers: this.headers});
    }
    


    changeProfilePhoto(passedData) {
        const url = `${this.BASE_URL}api/User/profile-picture`;
        // return this.http.post<any>(url, passedData)
        //     .pipe(map(user => {
                
        //     }));
        const userToken: string = 'Bearer ' + this.currentUserValue.token;
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);
        return this.httpc.put(url, passedData ,{headers: this.headers});
    }

    /**
     * RETURN User Contacts
     *
     * @param id
     * @return Response
     */


	getUserContacts(): Observable<any> {
		// console.log(this.currentUserValue)
		let id = this.currentUserValue.user.id;
	    const userToken: string = 'Bearer ' + this.currentUserValue.token;
		const url = `${this.BASE_URL}api/User/contacts?Id=${id}`;

	    this.headers = new Headers({'Content-Type': 'application/json'});
	    this.headers.append('Authorization', userToken);
	    return this.httpc.get(url,{headers: this.headers});
    }

    /**
     * RETURN User Address
     *
     * @param id
     * @return Response
     */


	getUserAddresses(data): Observable<any> {
		// console.log(this.currentUserValue)
		let id = this.currentUserValue.user.id;
	    const userToken: string = 'Bearer ' + this.currentUserValue.token;
		const url = `${this.BASE_URL}api/User/more-address`;

	    this.headers = new Headers({'Content-Type': 'application/json'});
	    this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data ,{headers: this.headers});
    }
    

    updateAbout(passedData) {
        const url = `${this.BASE_URL}api/Individual/about`;
        const userToken: string = 'Bearer ' + this.currentUserValue.token;
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);
        return this.httpc.put(url, passedData ,{headers: this.headers});
    }
    
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/authentication/login']);
    }
}