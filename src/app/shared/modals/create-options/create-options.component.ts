import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-options',
  templateUrl: './create-options.component.html',
  styleUrls: ['./create-options.component.css']
})
export class CreateOptionsComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  gotoPage(page){
    this.closeModal();
    if(page == 'task'){
      this.router.navigate(['dashboard/tasks/create']);
    }else{
      this.router.navigate(['dashboard/problems/create']);
    }

    // routerLink="/dashboard/tasks/create"
  }

  closeModal(){
    this.activeModal.dismiss()
  }
}
