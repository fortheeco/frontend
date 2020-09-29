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
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  form = {
    universityId: "",
    levelOfStudy: "",
    courseOfStudy: "",
    stateDate: "",
    endDate: ""
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
  addingEducation = false;
  responseMessage: string;
  messageType:any;
  profile: any;
  submitting: boolean;
  errors: any;
  pageParams ={
    "UniversityName": "",
    "pageNumber": 0,
    "pageSize": 0
  }
  pageParams2 ={
    "userId": "",
    "pageNumber": 0,
    "pageSize": 0
  }
  professions: any;
  isLoading: boolean;
  str = "";
  filteredUniversities: any;
  levels: any;
  educationList: any;


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
    this.getUniversityLevels();
    this.getUserEducation();
  }




  deleteEducation(id){
    this.authenticationService.deleteEducation(id).subscribe(response => {
      this.utility.showToast('success', 'Deleted successfully')
      this.getUserEducation();
    },
      error => {  
        // this.isLoading = false;
      });

    }

    
  getUniversityLevels(){
    // this.isLoading = true;
    this.rest.getUniversityLevels().subscribe(response => {
        // this.isLoading = false;
        let d = response;
        this.levels = d;
        // console.log(response.json())
    },
      error => {  
        // this.isLoading = false;
      });
  }

    
  getCountries(){
    // this.isLoading = true;
    this.rest.getLocationsCountries().subscribe(response => {
        // this.isLoading = false;
        this.countries = response;
        // console.log(response.json())
    },
      error => {  
        // this.isLoading = false;
      });
  }

    
  getUserEducation(){
    this.pageParams2.userId = this.authenticationService.currentUserValue.user.id;
    this.isLoading = true;
    this.authenticationService.getUserEducation(this.pageParams2).subscribe(response => {
        this.isLoading = false;
        let u = response;
        this.educationList = u.entities; 
        if(this.educationList && this.educationList.length < 1){
          this.addingEducation = true;
        }
        // console.log(response.json())
    },
      error => {  
        this.isLoading = false;
      });
  }

  toggleAdding(){
    this.addingEducation = !this.addingEducation;
  }

  filterUniversities(str){
    console.log(str)
    // this.isLoading = true;
    if(str && str.length > 2){
      this.pageParams.UniversityName = str;
      this.rest.getUniversities(this.pageParams).subscribe(response => {
          // this.isLoading = false;
          let data = response.json();
          this.filteredUniversities = data.entities;
          
          console.log(response.json())
      },
        error => {  
          // this.isLoading = false;
        });

    }
  }

  selectUniversity(d){
    this.form.universityId = d.id;
    this.str = d.universityName;
    this.filteredUniversities = undefined;
  }

  onSubmit(){
    this.submitted = true;

    this.form.stateDate = this.getServerDate(this.form.stateDate);
    this.form.endDate = this.getServerDate(this.form.endDate);

    console.log(this.form);
    

    this.authenticationService.addWork(this.form).subscribe(response => {
        this.submitting = false;
        console.log(response)
        this.clearForm();
        let env = this;
        this.utility.showToast('success', 'Education added successfully')
        setInterval(function () {
          env.closeModal()
        }, 2000);
    },
      error => {  
        // console.log(error.json())
        let err = error;
        this.errors = err.errors;
        console.log(this.errors)

        this.submitting = false;
        // this.showSuccess()
      });

  }
  clearForm(){
    this.form = {
      universityId: "",
      levelOfStudy: "",
      courseOfStudy: "",
      stateDate: "",
      endDate: ""
    }
  }


  closeModal(){
    this.activeModal.dismiss()
  }
  getServerDate(dateStruct) {
    return this.ngbDateParserFormatter.format(dateStruct);
  }

}
