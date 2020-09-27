import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders, HttpRequest } from  '@angular/common/http';
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
        private httpc: Http,
        private router: Router)
         {
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
                    // console.log(user);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('ecoUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return {status: 1};
                }

            }, error => {
                console.log(error);

            }
            ));
    }

    /**
     * @description Sign ups a user to the platform
     * @param data
     */
    signup(data: any) {
        const url = `${this.BASE_URL}api/auth/signup`;

        this.headers = new Headers({'Content-Type': 'application/json'});

        return this.httpc.post(url, data, {headers: this.headers});
    }

    /**
     * @description Api to sign up as organization
     * @param data
     */
    signUpAsOrganization(data: any) {
        const url = `${this.BASE_URL}api/auth/signup-organization`;

        this.headers = new Headers({'Content-Type': 'application/json'});

        return this.httpc.post(url, data, {headers: this.headers});
    }

    /**
     * @description Api to verify email address
     * @param data
     */
    verifyEmailAddress(data: any) {
        const url = `${this.BASE_URL}api/auth/verify-email`;

        this.headers = new Headers({'Content-Type': 'application/json'});

        return this.httpc.post(url, data, {headers: this.headers});
    }

    /**
     * @description Api to request for forgot password link
     * @param data
     */
    forgotPassword(data: any) {
        const url = `${this.BASE_URL}api/auth/forgot-password`;

        this.headers = new Headers({'Content-Type': 'application/json'});

        return this.httpc.post(url, data, {headers: this.headers});
    }

    /**
     * @description Api to change password using token
     * @param data
     */
    changePassword(data: any) {
        const url = `${this.BASE_URL}api/auth/reset-password`;

        this.headers = new Headers({'Content-Type': 'application/json'});

        return this.httpc.put(url, data, {headers: this.headers});
    }

    /**
     * @description Request Email verification link
     * @param data
     */
    requestEmailVerificationAgain(data: any) {
        const url = `${this.BASE_URL}api/auth/resend-confirm-email`;

        this.headers = new Headers({'Content-Type': 'application/json'});

        return this.httpc.post(url, data, {headers: this.headers});
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
    


	getUserEducation(data): Observable<any> {
		// console.log(this.currentUserValue)
		let id = this.currentUserValue.user.id;
	    const userToken: string = 'Bearer ' + this.currentUserValue.token;
        const url = `${this.BASE_URL}api/Education/education?IndividualId=${data.userId}&pageNumber=${data.pageNumber}&pageSize=${data.pageSize}`;

	    this.headers = new Headers({'Content-Type': 'application/json'});
	    this.headers.append('Authorization', userToken);
	    return this.httpc.get(url,{headers: this.headers});
    }

	getWorkExperience(data): Observable<any> {
		// console.log(this.currentUserValue)
		let id = this.currentUserValue.user.id;
	    const userToken: string = 'Bearer ' + this.currentUserValue.token;
        const url = `${this.BASE_URL}api/Individual/professions?IndividualId=${data.userId}&pageNumber=${data.pageNumber}&pageSize=${data.pageSize}`;

	    this.headers = new Headers({'Content-Type': 'application/json'});
	    this.headers.append('Authorization', userToken);
	    return this.httpc.get(url,{headers: this.headers});
    }

    deleteWorkExperience(id): Observable<any> {
        let data = {professionId:id}
        const userToken: string = 'Bearer ' + this.currentUserValue.token;
          const url = `${this.BASE_URL}api/Individual/profession
          `;
    
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
        };
        
        this.headers = new Headers({'Content-Type': 'application/json'});
        httpOptions.headers.append('Authorization', userToken);
        
        // return this.httpc.delete(url, data ,{headers: this.headers});
    
        let req = new HttpRequest('DELETE', url);
          let newReq = req.clone({body: data});
         return this.http.request(newReq);
    }
  
    deleteEducation(id): Observable<any> {
        let data = {educationId:id}
        const userToken: string = 'Bearer ' + this.currentUserValue.token;
          const url = `${this.BASE_URL}api/Education/education
          `;
    
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
        };
        
        this.headers = new Headers({'Content-Type': 'application/json'});
        httpOptions.headers.append('Authorization', userToken);
        
        // return this.httpc.delete(url, data ,{headers: this.headers});
    
        let req = new HttpRequest('DELETE', url);
          let newReq = req.clone({body: data});
         return this.http.request(newReq);
    }
      
    

	addWork(data): Observable<any> {
		let id = this.currentUserValue.user.id;
	    const userToken: string = 'Bearer ' + this.currentUserValue.token;
		const url = `${this.BASE_URL}api/Education/education`;

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