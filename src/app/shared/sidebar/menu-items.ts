import { RouteInfo } from './sidebar.metadata';
import { AuthenticationService } from '../../_services';
import { Injectable } from '@angular/core';


export class MenuItems {

    returnItems() {


      let userData = JSON.parse(localStorage.getItem('currentUser'));
      let role = "";
      let items = [];


        
        items = 
        [
         
          {
            path: '/dashboard/overview',
            title: 'Overview',
            icon: 'icon-grid',
            class: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/dashboard/profile',
            title: 'Profile',
            icon: 'icon-user',
            class: '',
            extralink: false,
            submenu: []
          },
         
        ];



      return items;

    }

}