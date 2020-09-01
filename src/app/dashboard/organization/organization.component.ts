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

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  profile: any;
  problems: any;
  modalRef: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private authenticationService: AuthenticationService,
    private rest: RestService,
    private sharedService: SharedServiceProvider, 
  ) { 
    // this.sharedService.passedProblem$().subscribe((data) => {
    //   this.GdprConsentDetails = data;
    // });
  }

  ngOnInit() {
    this.getUserProfile()
    this.getUserPosts()
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

    // const modalRef = this.modalService.open(EditProblemComponent, { size: 'lg',centered: true  });
    // modalRef.componentInstance.inputData = 'row';
    // modalRef.result.then((result) => {
    //   // this._success.next("Successfully Deleted");
    // })
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
    this.rest.getUserPosts().subscribe(response => {
        // this.isLoading = false;
        let d = response.json();
        this.problems = d.problems;
        console.log(this.problems)
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
