
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import 'rxjs/Rx';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationService } from '../../../../_services/authentication.service';
import {RestService} from "../../../../_services/rest.service";
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Papa } from 'ngx-papaparse';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { SharedServiceProvider } from '../../../../_providers/shared-provider';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})

export class EditAboutComponent implements OnInit {

  dataForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  processing = false;
	// inputData = {
	// 	name: "",
	// 	fda: "",
	// 	price: "",
	// 	notes: "",
	// 	unit: "",
	// 	unit_amount: "",
	// 	sku: "",
	// 	tags: "",
	// };

  // End the Closeable Alert
  // This is for the self closing alert
  private _message = new Subject<string>();

  staticAlertClosed = false;
  uploadSuccess = false;
  responseMessage: string;
  messageType:any;
  profile: any;
  submitting: boolean;
  errors: any;
  
  constructor(
    private rest: RestService,
    private papa: Papa,
    private sharedService: SharedServiceProvider, 
    private formBuilder: FormBuilder,
    private ngbDateParserFormatter: NgbDateParserFormatter,
    public modal: NgbActiveModal,
    public activeModal: NgbActiveModal,
    private authenticationService: AuthenticationService
    ) 
    {
    // set up Alert
      setTimeout(() => (this.staticAlertClosed = true), 20000);

      this._message.subscribe(message => (this.responseMessage = message));
      this._message.pipe(debounceTime(5000)).subscribe(() => (this.responseMessage = null));
    }

    ngOnInit() {
      // Initialize form with Validation rules
        this.dataForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            aboutMe: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            gender: ['', Validators.required],
            otherName: ['', Validators.required],
        });
        // this.getUserProfile()

        this.sharedService.userProfile$.subscribe((data) => {
          console.log(data)
          // console.log(this.postDetails.problem.ecoDetail.ecoEntity.name)
          if(data.detail){
            this.dataForm = this.formBuilder.group({
                firstName: [data.detail.firstName, Validators.required],
                lastName: [data.detail.lastName, Validators.required],
                aboutMe: [data.detail.aboutMe, Validators.required],
                dateOfBirth: [data.detail.dateOfBirth, Validators.required],
                gender: [data.detail.gender, Validators.required],
                otherName: [data.detail.otherName, Validators.required],
            });

          }

        });

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
    get f() { return this.dataForm.controls; }
    
    onSubmit(){
      this.submitted = true;
      console.log(this.dataForm.value);

      // stop here if form is invalid
      console.log(this.dataForm.invalid);
      if (this.dataForm.invalid) {
        return;
      }
      console.log(this.dataForm.value);

      let dob = this.getServerDate(this.dataForm.get('dateOfBirth').value);
      this.submitting = true;
      let d ={
        'firstName':this.dataForm.get('firstName').value,
        'lastName':this.dataForm.get('lastName').value,
        'aboutMe':this.dataForm.get('aboutMe').value,
        'otherName':this.dataForm.get('otherName').value,
        'dateOfBirth':dob,
        'gender':this.dataForm.get('gender').value,
      }
  
      this.authenticationService.updateAbout(d).subscribe(response => {
          this.submitting = false;
          // this.utility.showToast('success', 'Post created successfully')
          // this.router.navigate(['/dashboard/overview']);
  
          console.log(response.json())
      },
        error => {  
          // console.log(error.json())
          let err = error.json();
          this.errors = err.errors;
          console.log(this.errors)
  
          this.submitting = false;
          // this.showSuccess()
        });

    }

    getServerDate(dateStruct) {
      return this.ngbDateParserFormatter.format(dateStruct);
    }
}
