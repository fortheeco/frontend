import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditAboutComponent } from '../../shared/modals/profile/edit-about/edit-about.component';
import { EditContactComponent } from '../../shared/modals/profile/edit-contact/edit-contact.component';
import { EditGlobaladdressComponent } from '../../shared/modals/profile/edit-globaladdress/edit-globaladdress.component';
import { EditSkillsComponent } from '../../shared/modals/profile/edit-skills/edit-skills.component';
import { AddWorkComponent } from '../../shared/modals/profile/add-work/add-work.component';
import { AddEducationComponent } from '../../shared/modals/profile/add-education/add-education.component';
import { EditEducationComponent } from '../../shared/modals/profile/edit-education/edit-education.component';
import { EditProblemComponent } from '../../shared/modals/problems/edit-problem/edit-problem.component';
import {RestService} from "../../_services/rest.service";
import {AuthenticationService} from "../../_services/authentication.service";
import { SharedServiceProvider } from '../../_providers/shared-provider';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  problems: any;
  modalRef: NgbModalRef;
  contact: any;
  photoForm: FormGroup;
  pageParams ={
    "filter": {
      "userId": "",
      "title": "",
      "countryId": "",
      "stateId": "",
      "createdBefore": "",
      "createdAfter": "",
      "endedBefore": "",
      "endedAfter": "",
      "postType": ""
    },
    "pageNumber": "0",
    "pageSize": "0"
  }
  tasks: any;

  params = {
    "userId": "",
    "pageNumber": 0,
    "pageSize": 0
  }
  userSkills: any;
  professions: any;
  educationList: any;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private rest: RestService,
    private sharedService: SharedServiceProvider, 
  ) { 
      this.photoForm = this.formBuilder.group({
        ProfilePicture: ['', Validators.required],
      });
    // this.sharedService.passedProblem$().subscribe((data) => {
    //   this.GdprConsentDetails = data;
    // });
  }

  ngOnInit() {
    this.getUserProfile()
    this.getUserPosts()
    this.getUserContacts()
    this.getUserAddresses()
    this.getUserSkills()
    this.getWorkExperience()
    this.getUserEducation()
  }

  selectedFile: File

  get f() { return this.photoForm.controls; }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      // const file = event.target.files[0];
      this.selectedFile = event.target.files[0]
      // this.photoForm.get('ProfilePicture').setValue(file);
      this.onSubmitPhoto()
    }
  }
    
  getUserEducation(){
    this.params.userId = this.authenticationService.currentUserValue.user.id;
    this.authenticationService.getUserEducation(this.params).subscribe(response => {
        let u = response;
        this.educationList = u.entities; 
        // console.log(response.json())
    },
      error => {  
      });
  }

  getUserSkills(){
    this.rest.getUserSkills().subscribe(response => {
        let data = response;
        this.userSkills = data.entities;
        
        console.log(response)
    },
      error => {  
      });
  }
    
  getWorkExperience(){
    this.params.userId = this.authenticationService.currentUserValue.user.id;
    this.authenticationService.getWorkExperience(this.params).subscribe(response => {
        let u = response;
        this.professions = u.entities;
        // console.log(response.json())
    },
      error => {  
      });
  }

  onSubmitPhoto() {
    console.log('get here');
    // this.loading = true;
    // console.log(this.photoForm.value);
    // console.log(this.photoForm.get('ProfilePicture').value);
    const formData = new FormData();
    // formData.append('ProfilePicture', this.photoForm.get('ProfilePicture').value);
    formData.append('ProfilePicture', this.selectedFile, this.selectedFile.name);
    console.log(formData.get('ProfilePicture'));

   

    // let data = {ProfilePicture:this.selectedFile}
    this.authenticationService.changeProfilePhoto(formData)
      .pipe(first())
      .subscribe(
        data => {
          if (data['body'].status) {
            // this.data = data['body'].data;
            // this.loading = false;
            // this.onSecondSubmit();
          }
          else {
            // this.success_msg = data['message'];
          }
        },
        error => {
          // this.alertService.error(error);
          // this.loading = false;
        });
  }
  getUserProfile(){
    // this.isLoading = true;
    this.authenticationService.getIndividualData().subscribe(response => {
        // this.isLoading = false;
        this.profile = response;
        this.sharedService.updateProfile(this.profile);
        // this.temp = response.json().data;
        console.log(this.profile)
    },
      error => {  
        // this.isLoading = false;
      });
  }
  getUserContacts(){
    // this.isLoading = true;
    this.authenticationService.getUserContacts().subscribe(response => {
        // this.isLoading = false;
        this.contact = response;
        this.sharedService.updateContact(this.contact);
        // this.temp = response.json().data;
        console.log(response)
    },
      error => {  
        // this.isLoading = false;
      });
  }

  getUserAddresses(){
    this.params.userId = this.authenticationService.currentUserValue.user.id;

    // this.isLoading = true;
    this.authenticationService.getUserAddresses(this.params).subscribe(response => {
        // this.isLoading = false;
        this.contact = response;
        this.sharedService.updateContact(this.contact);
        // this.temp = response.json().data;
        console.log(response)
    },
      error => {  
        // this.isLoading = false;
      });
  }

  deleteProblem(id){
    console.log(id)
    this.rest.deleteProblem(id).subscribe(response => {
        // this.isLoading = false;
        // let d = response.json();
        // console.log(d)
        this.getUserPosts();
    },
      error => {  
        // this.isLoading = false;
      });
  }
  
  editProblem(row) {
    this.sharedService.updatePassedProblem(row);
    this.modalRef = this.modalService.open(EditProblemComponent, { size: 'lg' });
    this.modalRef.componentInstance.inputData = 'row';
    this.modalRef.result.then(
      (result) => {
        console.log("MODAL RESULT",result);
      },
      (reason) => {
        console.log(reason);
      }
    );
  }
  
  getUserPosts(){
    // this.isLoading = true;
    this.rest.getUserPosts(this.pageParams).subscribe(response => {
        // this.isLoading = false;
        let d = response;
        this.problems = d.problems;
        this.tasks = d.tasks;
        console.log(this.tasks)
    },
      error => {  
        // this.isLoading = false;
      });
  }
  editSkills() {
    const modalRef = this.modalService.open(EditSkillsComponent, { size: 'lg',centered: true  });
    modalRef.componentInstance.inputData = 'this.profile';
    modalRef.result.then((result) => {
      // this._success.next("Successfully Deleted");
    })
  }

  editAbout() {
    const modalRef = this.modalService.open(EditAboutComponent, { size: 'lg',centered: true  });
    modalRef.componentInstance.inputData = 'this.profile';
    modalRef.result.then((result) => {
      this.getUserProfile();
      // this._success.next("Successfully Deleted");
    })
  }

  manageWork() {
    const modalRef = this.modalService.open(AddWorkComponent, { size: 'lg',centered: true  });
    modalRef.componentInstance.inputData = 'this.profile';
    modalRef.result.then((result) => {
      this.getUserProfile();
      // this._success.next("Successfully Deleted");
    })
  }

  manageEducation() {
    const modalRef = this.modalService.open(AddEducationComponent, { size: 'lg',centered: true  });
    modalRef.componentInstance.inputData = 'this.profile';
    modalRef.result.then((result) => {
      this.getUserProfile();
      // this._success.next("Successfully Deleted");
    })
  }
  
  showEditContactModal(row) {
    const modalRef = this.modalService.open(EditContactComponent, { size: 'lg',centered: true  });
    modalRef.componentInstance.inputData = row;
    modalRef.result.then((result) => {
      // this._success.next("Successfully Deleted");
    })
  }

  showEditGlobaladdressModal(row) {
    const modalRef = this.modalService.open(EditGlobaladdressComponent, { size: 'lg',centered: true  });
    modalRef.componentInstance.inputData = row;
    modalRef.result.then((result) => {
      // this._success.next("Successfully Deleted");
    })
  }

}
