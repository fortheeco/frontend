import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/_models';
import { BASE_URL } from 'src/app/_providers/config/config';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    private BASE_URL = environment.BASE_URL;
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

      /**
   * @description Toggle accepting or rejecting individual request to join organization
   * @return Response
   */
  toggleAcceptIndividualRequest(): Observable<any> {
    const id = this.currentUserValue.user.id;
      const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/toggle-accept-individual`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.get(url, {headers: this.headers});
  }

  /**
   * @description As the name implies either accepts or reject employee wanting to join an organization
   * @return Response
   */
  acceptOrRejectEmployee(data: any): Observable<any> {
    const id = this.currentUserValue.user.id;
      const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/answer-individual`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.patch(url, data, {headers: this.headers});
  }

  /**
   * @description Organization terminate the profession of an individual
   * @return Response
   */
  terminateProfession(data: any): Observable<any> {
    const id = this.currentUserValue.user.id;
      const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/terminate-profession`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.patch(url, data, { headers: this.headers });
  }

  /**
   * @description Toggle professions to either as main place of work or not
   * @return Response
   */
  toggleProfessions(data: any): Observable<any> {
    const id = this.currentUserValue.user.id;
      const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/toggle-place-of-work`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.patch(url, data, { headers: this.headers });
  }

    /**
   * @description Get the list of branches from an organization
   * @return Response
   */
  getBranches(data: any): Observable<any> {
    const id = this.currentUserValue.user.id;
      const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/branches`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.post(url, data, { headers: this.headers });
  }

    /**
   * @description Get the list of searched organization
   * @return Response
   */
  searchOrganization(data: any): Observable<any> {

    data = new URLSearchParams(data as {}).toString();

    const id = this.currentUserValue.user.id;
      const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/search?${data}`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.get(url, { headers: this.headers });
  }

  /**
   * @description request to join an organization
   * @return Response
   */
  requestToJoin(data: any): Observable<any> {
    const id = this.currentUserValue.user.id;
      const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/request-branch`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.patch(url, data, { headers: this.headers });
  }

  /**
   * @description Remove organization service, I hope you know what you are doing
   * @return Response
   */
  leaveOrganization(): Observable<any> {

    const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/leave-headquarter`;

    this.headers = new Headers({'Content-Type': 'application/json'});
    this.headers.append('Authorization', userToken);

    return this.httpc.delete(url, {headers: this.headers, body: {}});
  }

  /**
   * @description Answer an organization's request
   * @return Response
   */
  answerOrganization(data: any): Observable<any> {
    const id = this.currentUserValue.user.id;
      const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/answer-organization`;

    console.log(data);

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.patch(url, data, { headers: this.headers });
  }

  /**
   * @description Remove organization service, I hope you know what you are doing
   * @return Response
   */
  removeBranch(data: any): Observable<any> {

    const userToken: string = 'Bearer ' + this.currentUserValue.token;
    const url = `${this.BASE_URL}api/organization/remove-branch`;

    this.headers = new Headers({'Content-Type': 'application/json'});
    this.headers.append('Authorization', userToken);

    return this.httpc.delete(url, {headers: this.headers, body: data});
  }

}
