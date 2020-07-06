import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAboutComponent } from '../../shared/modals/profile/edit-about/edit-about.component';
import { EditContactComponent } from '../../shared/modals/profile/edit-contact/edit-contact.component';
import { EditGlobaladdressComponent } from '../../shared/modals/profile/edit-globaladdress/edit-globaladdress.component';
import { EditSkillsComponent } from '../../shared/modals/profile/edit-skills/edit-skills.component';
import { AddWorkComponent } from '../../shared/modals/profile/add-work/add-work.component';
import { AddEducationComponent } from '../../shared/modals/profile/add-education/add-education.component';
import { EditEducationComponent } from '../../shared/modals/profile/edit-education/edit-education.component';
import {RestService} from "../../_services/rest.service";
import {AuthenticationService} from "../../_services/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(
    private modalService: NgbModal,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    // this.editSkills()
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
