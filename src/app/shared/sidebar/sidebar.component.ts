import { Component, AfterViewInit, OnInit } from '@angular/core';
import { MenuItems } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
import { AuthenticationService } from '../../_services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: any[];
  ROUTES = [];
  // this is for the open close
  // bc = new BroadcastChannel("profile-update");

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    public authenticationService: AuthenticationService,
    private menu: MenuItems,
    private route: ActivatedRoute
  ) {
      const bc = new BroadcastChannel("profile-update")
      bc.onmessage = (ev) => {
         console.log(ev); 
         this.ngOnInit();
         }

  }

  // End open close
  ngOnInit() {
    this.ROUTES = this.menu.returnItems();
    this.sidebarnavItems = this.ROUTES.filter(sidebarnavItem => sidebarnavItem);
  }
  logout(){
    this.router.navigate(['/']);
    this.authenticationService.logout();
  }
}
