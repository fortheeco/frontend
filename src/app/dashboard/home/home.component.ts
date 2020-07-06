import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateOptionsComponent } from '../../shared/modals/create-options/create-options.component';
import { ViewComponent } from '../../shared/modals/tasks/view/view.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private router: Router, 
    ) { }

    ngOnInit() {
      // this.editAbout(null)
      // this.createTask()
      // this.router.navigate(['/dashboard/tasks/view-user-profile']);

    }
  
    viewCreateOptions() {
      const modalRef = this.modalService.open(CreateOptionsComponent, { size: 'lg',centered: true,windowClass: 'clear-bg-modal'  });
      modalRef.result.then((result) => {
        // this._success.next("Successfully Deleted");
      })
    }
    viewTask(row) {
      const modalRef = this.modalService.open(ViewComponent, { size: 'lg',centered: true  });
      modalRef.componentInstance.inputData = row;
      modalRef.result.then((result) => {
        // this._success.next("Successfully Deleted");
      })
    }

    createTask(){
        this.router.navigate(['/dashboard/tasks/create']);
    }
}
