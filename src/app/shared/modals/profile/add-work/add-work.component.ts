
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
import {UtilityProvider} from "../../../../_providers/utility";

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css']
})
export class AddWorkComponent implements OnInit {

  dataForm: FormGroup;
  form = {
    position: "",
    dateStarted: "",
    dateLeft: "",
    organizationAddressIfNotInDatabase: {
      countryId: 0,
      stateId: 0,
      street: "",
      postCode: ""
    },
    organizationNameIfNotInDatabase: ""
  }
  loading = false;
  submitted = false;
  error = '';
  processing = false;
  // End the Closeable Alert
  // This is for the self closing alert
  private _message = new Subject<string>();
  countries: any;
  states: any;

  staticAlertClosed = false;
  addingWork = false;
  responseMessage: string;
  messageType:any;
  profile: any;
  submitting: boolean;
  errors: any;
  pageParams ={
    "userId": "",
    "pageNumber": 0,
    "pageSize": 0
  }
  professions: any;
  isLoading: boolean;

  constructor(
    private sharedService: SharedServiceProvider, 
    private rest: RestService,
    private formBuilder: FormBuilder,
    private ngbDateParserFormatter: NgbDateParserFormatter,
    public modal: NgbActiveModal,
    private utility: UtilityProvider,
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
        this.getCountries();
        this.getWorkExperience();
      }
    
      getWorkExperience(){
        this.pageParams.userId = this.authenticationService.currentUserValue.user.id;
        this.isLoading = true;
        this.authenticationService.getWorkExperience(this.pageParams).subscribe(response => {
            this.isLoading = false;
            let u = response;
            this.professions = u.entities; 
            if(this.professions && this.professions.length < 1){
              this.addingWork = true;
            }
            // console.log(response.json())
        },
          error => {  
            this.isLoading = false;
          });
      }
    
      getCountries(){
        // this.isLoading = true;
        this.rest.getLocationsCountries().subscribe(response => {
            // this.isLoading = false;
            this.countries = response.json();
            // console.log(response.json())
        },
          error => {  
            // this.isLoading = false;
          });
      }

      toggleAdding(){
        this.addingWork = !this.addingWork;
      }

      deleteProfession(id){
      this.authenticationService.deleteWorkExperience(id).subscribe(response => {
        this.utility.showToast('success', 'Deleted successfully')
        this.getWorkExperience();
      },
        error => {  
          // this.isLoading = false;
        });

      }

      getStates(id){
        // this.isLoading = true;
        this.rest.getStates(id).subscribe(response => {
            // this.isLoading = false;
            this.states = response;
            // console.log(response.json())
        },
          error => {  
            // this.isLoading = false;
          });
      }

    // convenience getter for easy access to form fields
    get f() { return this.dataForm.controls; }
    
    onSubmit(){
      this.submitted = true;

      this.form.dateStarted = this.getServerDate(this.form.dateStarted);
      this.form.dateLeft = this.getServerDate(this.form.dateLeft);

      console.log(this.form);
      
  
      this.authenticationService.addWork(this.form).subscribe(response => {
          this.submitting = false;
          console.log(response)
          this.clearForm();
          let env = this;
          this.utility.showToast('success', 'Profession added successfully')
          setInterval(function () {
            env.closeModal()
          }, 2000);
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
    clearForm(){
      this.form = {
        position: "",
        dateStarted: "",
        dateLeft: "",
        organizationAddressIfNotInDatabase: {
          countryId: 0,
          stateId: 0,
          street: "",
          postCode: ""
        },
        organizationNameIfNotInDatabase: ""
      }
    }


    closeModal(){
      this.activeModal.dismiss()
    }
    getServerDate(dateStruct) {
      return this.ngbDateParserFormatter.format(dateStruct);
    }

}
