import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
declare var $: any;
import { AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';
import {BASE_URL} from "../../_providers/config/config";
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateOptionsComponent } from '../../shared/modals/create-options/create-options.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  public BASE_URL = BASE_URL;

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;
  userProfile : any;
  notifications = [];
  
  constructor(
    private modalService: NgbModal,
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}


  logout(){
    this.router.navigate(['/']);
    this.authenticationService.logout();
  }

  viewCreateOptions() {
    const modalRef = this.modalService.open(CreateOptionsComponent, { size: 'lg',centered: true,windowClass: 'clear-bg-modal'  });
    modalRef.result.then((result) => {
      // this._success.next("Successfully Deleted");
    })
  }
  ngAfterViewInit() {
  }
}
