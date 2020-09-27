import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css']
})
export class UserContactComponent implements OnInit {

  @Input() userId: string;

  constructor() { }

  ngOnInit() {
  }

}
