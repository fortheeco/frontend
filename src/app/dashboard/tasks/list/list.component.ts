import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../../../shared/modals/tasks/view/view.component';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  editTaskModal() {
    const modalRef = this.modalService.open(ViewComponent, { size: 'lg',centered: true });
    modalRef.result.then((result) => {
      // this._success.next("Successfully Deleted");
    })
  }
}
