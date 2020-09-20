import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/_models';
import { BASE_URL } from 'src/app/_providers/config/config';


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


  getOrganizationData(data: any): Observable<any> {
    data = new URLSearchParams(data as {}).toString();
    
    const id = this.currentUserValue.user.id;
      const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization?${data}`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.get(url, {headers: this.headers});
  }


  /**
   * @description Returns the industries used in this application for organization to select from
   * @return Response
   */

  getOrganizationIndustries(): Observable<any> {
    // const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/industries`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      // this.headers.append('Authorization', userToken);
      return this.httpc.get(url, {headers: this.headers});
  }

  /**
   * @description Update the organization details
   * @return Response
   */

  updateOrganizationDetails(data: any): Observable<any> {
    const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/organization`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.patch(url, data, {headers: this.headers});
  }

  /**
   * @description Adds a new service to an organization
   * @return Response
   */
  getOrganizationServices(data: any): Observable<any> {
    const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/services`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.post(url, data, {headers: this.headers});
  }

  /**
   * @description Adds a new service to an organization
   * @return Response
   */
  addNewOrganizationService(data: any): Observable<any> {
    const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/service`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.post(url, data, {headers: this.headers});
  }

  /**
   * @description Remove organization service, I hope you know what you are doing
   * @return Response
   */
  removeOrganizationService(data: any): Observable<any> {

    const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/service`;

    this.headers = new Headers({'Content-Type': 'application/json'});
    this.headers.append('Authorization', userToken);

    return this.httpc.delete(url, {headers: this.headers, body: data});
  }

    /**
   * @description Get the total number of skills and top ten skills
   * @return Response
   */
  getOrganizationSkillsInfo(data: any): Observable<any> {
    data = new URLSearchParams(data as {}).toString();
    
    const id = this.currentUserValue.user.id;
      const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/skills?${data}`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.get(url, {headers: this.headers});
  }

  /**
   * @description Get the organization employees (either, left, accepted or pending request)
   * @return Response
   */
  getOrganizationEmployees(data: any): Observable<any> {
    const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/employees`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.post(url, data, {headers: this.headers});
  }

}
