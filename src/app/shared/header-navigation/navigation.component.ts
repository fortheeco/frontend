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
  profile: any;


  
  constructor(
    private modalService: NgbModal,
    public authenticationService: AuthenticationService,
    private router: Router
  ) {

    let u = this.authenticationService.currentUserValue;
    this.profile = u.user;
    console.log(this.profile);
  }


  logout() {
    this.router.navigate(['/']);
    this.authenticationService.logout();
  }

  viewCreateOptions() {
    const modalRef = this.modalService.open(CreateOptionsComponent, { size: 'lg',centered: true,windowClass: 'clear-bg-modal'  });
    modalRef.result.then((result) => {
      // this._success.next("Successfully Deleted");
    });
  }

  /**
   * @description navigate to either an individual or organization depending on the entity type
   */
  navigateToProfile() {
    const userType: string = this.profile.userType;

    // If an individual then go to the individual page
    if (userType.toLocaleLowerCase() === 'individual') { this.router.navigate(['/dashboard/profile']); }

    // If an organization then go to the organization page
    if (userType.toLocaleLowerCase() === 'organization') { this.router.navigate([`/dashboard/organization/${this.profile.id}`]); }
  }


  ngAfterViewInit() {
  }
}
