import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import { HttpClientModule, HttpHeaders, HttpRequest } from '@angular/common/http';
import {BASE_URL} from "../_providers/config/config";
import { AuthenticationService } from '../_services';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

private BASE_URL = environment.BASE_URL;;
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
     * RETURN Posts
     *
     * @param 
     * @return Response
     */


    getGlobalPosts(data): Observable<any> {
      // console.log(this.currentUserValue)
        const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Post/global`;
  
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data ,{headers: this.headers});
      }


      /**
       * RETURN Applications
       *
       * @param 
       * @return Response
       */
  
  
        getTaskApplications(data): Observable<any> {
          const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
          const url = `${this.BASE_URL}api/Task/applicants`;
    
          this.headers = new Headers({'Content-Type': 'application/json'});
          this.headers.append('Authorization', userToken);
          return this.httpc.post(url, data ,{headers: this.headers});
        }


        /**
         * Create Idea
         *
         * @param 
         * @return Response
         */
    
    
        submitIdea(data): Observable<any> {
          const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
          const url = `${this.BASE_URL}api/Task/idea`;
    
          this.headers = new Headers({'Content-Type': 'application/json'});
          this.headers.append('Authorization', userToken);
          return this.httpc.post(url, data ,{headers: this.headers});
        }

        /**
         * Create Idea
         *
         * @param 
         * @return Response
         */
    
    
        submitProblemIdea(data): Observable<any> {
            const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
            const url = `${this.BASE_URL}api/Problem/idea`;
      
            this.headers = new Headers({'Content-Type': 'application/json'});
            this.headers.append('Authorization', userToken);
            return this.httpc.post(url, data ,{headers: this.headers});
          }

      /**
       * RETURN Posts
       *
       * @param 
       * @return Response
       */
  
  
      getUserPosts(data): Observable<any> {
        // console.log(this.currentUserValue)
          const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
        const url = `${this.BASE_URL}api/Post/personal`;
    
          this.headers = new Headers({'Content-Type': 'application/json'});
          this.headers.append('Authorization', userToken);
          return this.httpc.post(url, data ,{headers: this.headers});
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
     * RETURN Eco details
     *
     * @param 
     * @return Response
     */


    getEcoDetails(): Observable<any> {
      // console.log(this.currentUserValue)
      let id = this.authenticationService.currentUserValue.user.id;
        const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Eco/eco-details`;
  
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


    getUserSkills(): Observable<any> {
      let userId = this.authenticationService.currentUserValue.user.id;
      const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Individual/skills`;
      let data = {id:userId}
      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.post(url, data ,{headers: this.headers});
    }

    addSkill(data): Observable<any> {
      const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
        const url = `${this.BASE_URL}api/Individual/skill`;
      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.post(url, data ,{headers: this.headers});
  }

  deleteSkill(id): Observable<any> {
    let data = {skillId:id}
    const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
    const url = `${this.BASE_URL}api/Individual/skill`;

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


getUniversities(data): Observable<any> {
  // console.log(this.currentUserValue)
  let id = this.authenticationService.currentUserValue.user.id;
    const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Education/search-university?UniversityName=${data.UniversityName}&pageNumber=${data.pageNumber}&pageSize=${data.pageSize}`;

    this.headers = new Headers({'Content-Type': 'application/json'});
    this.headers.append('Authorization', userToken);
    return this.httpc.get(url,{headers: this.headers});
  }


  getUniversityLevels(): Observable<any> {
    // console.log(this.currentUserValue)
    let id = this.authenticationService.currentUserValue.user.id;
      const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
        const url = `${this.BASE_URL}api/Education/university-level`;
  
      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.get(url,{headers: this.headers});
  }

  createProblem(data): Observable<any> {
    const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Problem`;
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.headers.append('Authorization', userToken);
    return this.httpc.post(url, data ,{headers: this.headers});
  }

  applyForTask(data): Observable<any> {
    const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Individual/apply-task`;
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.headers.append('Authorization', userToken);
    return this.httpc.put(url, data ,{headers: this.headers});
  }

  sendContract(data): Observable<any> {
    const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Task/send-contract`;
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.headers.append('Authorization', userToken);
    return this.httpc.post(url, data ,{headers: this.headers});
  }

  createTask(data): Observable<any> {
    const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Task`;
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.headers.append('Authorization', userToken);
    return this.httpc.post(url, data ,{headers: this.headers});
  }

  getTaskComments(tId="",cId=""): Observable<any> {
      const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Task/comments?TaskId=${tId}&CommentId=${cId}`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.get(url,{headers: this.headers});
    }


    getTaskIdeas(tId=""): Observable<any> {
      const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Task/ideas?TaskId=${tId}`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.get(url,{headers: this.headers});
    }


    getProblemIdeas(pId=""): Observable<any> {
      const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Problem/ideas?ProblemId=${pId}`;

      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.get(url,{headers: this.headers});
    }

    getProblemComments(pId="",cId=""): Observable<any> {
        const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
        const url = `${this.BASE_URL}api/Problem/comments?ProblemId=${pId}&CommentId=${cId}`;
  
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url,{headers: this.headers});
      }

    postComment(data): Observable<any> {
      const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
        const url = `${this.BASE_URL}api/Problem/comment`;
      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.post(url, data ,{headers: this.headers});
  }
  taskPostComment(data): Observable<any> {
      const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
        const url = `${this.BASE_URL}api/Task/comment`;
      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.post(url, data ,{headers: this.headers});
  }

  voteTaskPost(id): Observable<any> {
    let data = {taskId:id}
      const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Task/vote`;
      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.patch(url, data ,{headers: this.headers});
  }
    

  votePost(id): Observable<any> {
    let data = {problemId:id}
      const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Problem/vote`;
      this.headers = new Headers({'Content-Type': 'application/json'});
      this.headers.append('Authorization', userToken);
      return this.httpc.patch(url, data ,{headers: this.headers});
  }
    

  deleteProblem(id): Observable<any> {
    let data = {problemId:id}
    const userToken: string = 'Bearer ' + this.authenticationService.currentUserValue.token;
      const url = `${this.BASE_URL}api/Problem
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



}
