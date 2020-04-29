import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-user-cv',
  templateUrl: './view-user-cv.component.html',
  styleUrls: ['./view-user-cv.component.css']
})
export class ViewUserCvComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
