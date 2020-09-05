import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Headers, Http} from '@angular/http';
import { BASE_URL } from 'src/app/_providers/config/config';
import { User } from 'src/app/_models';
import { ActivatedRoute, Router } from '@angular/router';
import { AppOrganization } from 'src/app/_entities/organization/app-organization';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
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
    private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('ecoUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   * RETURN Organization initial Data
   *
   * @param id
   * @return Response
   */


  getOrganizationData(): Observable<any> {
    // console.log(this.currentUserValue)
    const id = this.currentUserValue.user.id;
      const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization?organizationId=${id}`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.get(url, {headers: this.headers});
  }


  /**
   * @description Returns the industries used in this application for organization to select from
   * @return Response
   */

  getOrganizationIndustries(): Observable<any> {
    const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/industries`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.get(url, {headers: this.headers});
  }

}
