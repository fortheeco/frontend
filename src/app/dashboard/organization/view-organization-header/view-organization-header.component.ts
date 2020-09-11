import { Component, OnInit, Input } from '@angular/core';
import { AppOrganization } from 'src/app/_models/organization/app-organization';

@Component({
  selector: 'app-view-organization-header',
  templateUrl: './view-organization-header.component.html',
  styleUrls: ['./view-organization-header.component.css']
})
export class ViewOrganizationHeaderComponent implements OnInit {

  @Input()profile: AppOrganization = {} as AppOrganization;

  constructor() { }

  ngOnInit() {
  }

}
