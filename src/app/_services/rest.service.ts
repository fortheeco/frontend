import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import {BASE_URL} from "../_providers/config/config";
import { AuthenticationService } from '../_services';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

private BASE_URL = BASE_URL;
private headers: Headers = new Headers({'Content-Type': 'application/json'});
private headers_formdata: Headers = new Headers({'Content-Type': undefined});

  constructor(
		private httpc:Http,
        private http: HttpClient,
		private authenticationService: AuthenticationService
		) { }


    /**
     * RETURN Countries
     *
     * @param 
     * @return Response
     */


    getLocationsCountries(): Observable<any> {
      // console.log(this.currentUserValue)
      let id = this.authenticationService.currentUserValue.user.id;
        const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Location/countries`;
  
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url,{headers: this.headers});
      }


    /**
     * RETURN Contacts
     *
     * @param 
     * @return Response
     */


    getContacts(): Observable<any> {
      // console.log(this.currentUserValue)
      let id = this.authenticationService.currentUserValue.user.id;
        const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/User/contacts?id=${id}`;
  
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url,{headers: this.headers});
      }

    /**
     * RETURN States
     *
     * @param id
     * @return Response
     */


    getStates(id): Observable<any> {
        const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Location/states?CountryId=${id}`;
  
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url,{headers: this.headers});
      }


      updateAddress(data): Observable<any> {
          const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
            const url = `${this.BASE_URL}api/User/free-address`;
          this.headers = new Headers({'Content-Type': 'application/json'});
          this.headers.append('Authorization', userToken);
          return this.httpc.post(url, data ,{headers: this.headers});
      }
    


}
