import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ViewComponent } from '../../../../shared/modals/tasks/view/view.component';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedServiceProvider } from '../../../../_providers/shared-provider';

@Component({
  selector: 'app-problem-card',
  templateUrl: './problem-card.component.html',
  styleUrls: ['./problem-card.component.css']
})
export class ProblemCardComponent implements OnInit {
  @Input() post: any;
	shownGroup = null;

  constructor(
    private modalService: NgbModal,
    private sharedService: SharedServiceProvider, 
  ) { }

  ngOnInit() {
  }

  
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };

  isGroupShown(group) {
      return this.shownGroup === group;
  };
  

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
