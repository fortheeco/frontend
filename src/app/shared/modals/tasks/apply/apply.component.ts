import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import 'rxjs/Rx';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {UtilityProvider} from "../../../../_providers/utility";
import { AuthenticationService } from '../../../../_services/authentication.service';
import {RestService} from "../../../../_services/rest.service";
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Papa } from 'ngx-papaparse';
import { SharedServiceProvider } from '../../../../_providers/shared-provider';


@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  loading = false;
  submitted = false;
  error = '';
  processing = false;

  // End the Closeable Alert
  // This is for the self closing alert
  private _message = new Subject<string>();

  staticAlertClosed = false;
  uploadSuccess = false;
  responseMessage: string;
  messageType:any;
  profile: any;
  form = {
    "taskId" : "",
    "reason": "",
    "description": "",
  }
  postDetails: any;
  submitting: boolean;
  errors: any;

  constructor(
    private utility: UtilityProvider,
    private rest: RestService,
    private papa: Papa,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public modal: NgbActiveModal,
    public activeModal: NgbActiveModal,
    private sharedService: SharedServiceProvider, 
    private authenticationService: AuthenticationService
  ) {
    // set up Alert
      setTimeout(() => (this.staticAlertClosed = true), 20000);

      this._message.subscribe(message => (this.responseMessage = message));
      this._message.pipe(debounceTime(5000)).subscribe(() => (this.responseMessage = null));

      this.sharedService.passedProblem$.subscribe((data) => {
        console.log(data)
        this.postDetails = data;
        if(this.postDetails.task){
          this.form.taskId = this.postDetails.task.id;
        }
      });
   }

   ngOnInit() {
       this.getUserProfile()

   }
 
   getUserProfile(){
     // this.isLoading = true;
     this.authenticationService.getIndividualData().subscribe(response => {
         // this.isLoading = false;
         this.profile = response.json();
         // this.temp = response.json().data;
         console.log(this.profile.detail)
     },
       error => {  
         // this.isLoading = false;
       });
   }
   // convenience getter for easy access to form fields
   
  onSubmit(){
    console.log(this.form)
    this.submitting = true;

    this.rest.applyForTask(this.form).subscribe(response => {
        this.submitting = false;
        this.utility.showToast('success', 'Application created successfully')
        this.closeModal()
        // this.router.navigate(['/dashboard/overview']);

        console.log(response.json())
    },
      error => {  
        console.log(error.json())
        let err = error.json();
        this.errors = err.errors;
        this.utility.showToast('danger', err.error)
        this.submitting = false;
        // this.showSuccess()
      });
  }

  closeModal(){
    this.activeModal.dismiss()
  }

}
