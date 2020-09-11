import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validator-error-message',
  templateUrl: './validator-error-message.component.html',
  styleUrls: ['./validator-error-message.component.css']
})
export class ValidatorErrorMessageComponent implements OnInit {
  
  // The form to manipulate
  @Input() form: FormGroup;

  // The form field to manipulate
  @Input() field: string;

  // Get the div element
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngDoCheck(): void {}

  // displayError() {
  //   $('#errorDiv').slideDown();
  // }

}
