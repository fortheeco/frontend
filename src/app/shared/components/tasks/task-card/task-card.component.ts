import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ViewComponent } from '../../../../shared/modals/tasks/view/view.component';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedServiceProvider } from '../../../../_providers/shared-provider';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
  @Input() post: any;

  constructor(
    private modalService: NgbModal,
    private sharedService: SharedServiceProvider, 
  ) { }

  ngOnInit() {
  }

  

  viewPost(row) {
    this.viewTask(row)
  }

  viewTask(row) {
    this.sharedService.updatePassedProblem(row);
    const modalRef = this.modalService.open(ViewComponent, { size: 'lg',centered: true,windowClass: 'right-modal'  });
    modalRef.componentInstance.inputData = row;
    modalRef.result.then((result) => {
      // this.getGlobalPosts();
    }).catch((res) => {
      console.log(res)
      // this.getGlobalPosts();
    });
  }
}
