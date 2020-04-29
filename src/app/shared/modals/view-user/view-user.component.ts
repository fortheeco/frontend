import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ViewUserCvComponent} from '../view-user-cv/view-user-cv.component'
import {AddUserComponent} from '../add-user/add-user.component'

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  viewCv(){
    this.activeModal.close();
    const modalRef = this.modalService.open(ViewUserCvComponent);
  }

  addUser(){
    this.activeModal.close();
    const modalRef = this.modalService.open(AddUserComponent);
  }
  close(){
    this.activeModal.close();
  }
}
