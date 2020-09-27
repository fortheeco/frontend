import { Component, OnInit, Input } from '@angular/core';
import { AppOrganization } from 'src/app/_models/organization/app-organization';

@Component({
  selector: 'app-organization-about',
  templateUrl: './organization-about.component.html',
  styleUrls: ['./organization-about.component.css']
})
export class OrganizationAboutComponent implements OnInit {

  @Input() organization: AppOrganization;

  constructor() { }

  ngOnInit() {
  }

}
