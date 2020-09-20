import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SharedServiceProvider {

//   public _passedProblemSource = new BehaviorSubject<[]>(null);
//   passedProblem$ = this._passedProblemSource.asObservable();


      
  public passedProblemSource  = new BehaviorSubject<any>(null);
  passedProblem$ = this.passedProblemSource.asObservable();
        
  public passedApplicantSource  = new BehaviorSubject<any>(null);
  passedApplicant$ = this.passedApplicantSource.asObservable();

  public userProfileSource  = new BehaviorSubject<any>(null);
  userProfile$ = this.userProfileSource.asObservable();


  public userContactSource  = new BehaviorSubject<any>(null);
  userContact$ = this.userContactSource.asObservable();


  constructor(public http: HttpClient) {
    console.log('Hello SharedServiceProvider Provider');
  }

  updatePassedProblem(details){
    this.passedProblemSource.next(details);
  }

  updatePassedApplicant(details){
    this.passedApplicantSource.next(details);
  }

  updateProfile(details){
    this.userProfileSource.next(details);
  }

  updateContact(details){
    this.userContactSource.next(details);
  }


}
