import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isIndividual = true;

  constructor() {}

  ngOnInit(): void {

  }

  toggoleIndividual() {
    this.isIndividual = !this.isIndividual;
  }

}
