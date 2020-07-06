
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
  
  constructor(
    private rest: RestService,
    private papa: Papa,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
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
            name: ['', Validators.required],
            fda: [],
            price: ['', Validators.required],
            unit: ['', Validators.required],
            unit_amount: ['', Validators.required],
            notes: [],
            tags: [],
            sku: ['', Validators.required],
        });
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
    get f() { return this.dataForm.controls; }
    
    onSubmit(){

    }


}
