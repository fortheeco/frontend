import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css']
})
export class AddWorkComponent implements OnInit {

  constructor(
    public modal: NgbActiveModal,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

}
