import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SharedServiceProvider {

//   public _passedProblemSource = new BehaviorSubject<[]>(null);
//   passedProblem$ = this._passedProblemSource.asObservable();


      
  public passedProblemSource  = new BehaviorSubject<any>(null);
  passedProblem$ = this.passedProblemSource.asObservable();


  constructor(public http: HttpClient) {
    console.log('Hello SharedServiceProvider Provider');
  }

//   UpdatePassedProblem(val: any) {
//     this._passedProblemSource.next(val);
//   }
  
    updatePassedProblem(details){
      this.passedProblemSource.next(details);
    }



}
