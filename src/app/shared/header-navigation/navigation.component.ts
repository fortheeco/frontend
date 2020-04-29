import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
declare var $: any;
import { AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';
import {BASE_URL} from "../../_providers/config/config";

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
  
  constructor(private modalService: NgbModal,
        public authenticationService: AuthenticationService,
        private router: Router) {}


  logout(){
    this.router.navigate(['/']);
    this.authenticationService.logout();
  }

  ngAfterViewInit() {
  }
}
