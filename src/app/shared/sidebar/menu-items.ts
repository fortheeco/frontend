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
            title: 'Home',
            icon: 'fas fa-stop',
            class: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/dashboard/tasks',
            title: 'Tasks',
            icon: 'fas fa-stop',
            class: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/dashboard/notifications',
            title: 'Notifications',
            icon: 'fas fa-stop',
            class: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/dashboard/store',
            title: 'Store',
            icon: 'fas fa-stop',
            class: '',
            extralink: false,
            submenu: []
          },
         
        ];



      return items;

    }

}