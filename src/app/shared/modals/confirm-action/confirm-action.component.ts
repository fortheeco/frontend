import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IConfirmAction } from './ocnfirm-action-functions';

@Component({
  selector: 'app-confirm-action',
  templateUrl: './confirm-action.component.html',
  styleUrls: ['./confirm-action.component.scss']
})
export class ConfirmActionComponent implements OnInit {

  @Input() confirmData: IConfirmAction;
  @Output() action = new EventEmitter<boolean>();

  constructor(
    public activeModal: NgbActiveModal,
    ) { }

  ngOnInit(): void {
  }

  confirm(action: boolean) {
    this.action.emit(action);
    this.activeModal.close();
  }

}
