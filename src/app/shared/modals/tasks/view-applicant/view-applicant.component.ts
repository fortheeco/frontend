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
  selector: 'app-view-applicant',
  templateUrl: './view-applicant.component.html',
  styleUrls: ['./view-applicant.component.css']
})
export class ViewApplicantComponent implements OnInit {

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
    "employeeId" : "",
    "paymentType": "",
  }
  applicantDetails: any;
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

      this.sharedService.passedApplicant$.subscribe((data) => {
        console.log(data)
        this.applicantDetails = data;
        this.form.employeeId = this.applicantDetails.employeeId;
      });
     }

  ngOnInit() {
  }
   
  onSubmit(){
    console.log(this.form)
    this.submitting = true;

    this.rest.sendContract(this.form).subscribe(response => {
        this.submitting = false;
        this.utility.showToast('success', 'Contract sent successfully')
        this.closeModal()
        // this.router.navigate(['/dashboard/overview']);

        console.log(response)
    },
      error => {  
        console.log(error)
        let err = error;
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
