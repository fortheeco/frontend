import { Component, OnInit } from '@angular/core';
import {RestService} from "../../../../_services/rest.service";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  countries: any;
  states: any;
  responseMessage: any;
  form = {
    emailAddress: "",
    addressId: "",
    phoneNumber: "",
    countryId: "",
    stateId: "",
    street: "",
    postCode: ""
  }
  submitted = false;

  constructor(
    public modal: NgbActiveModal,
    public activeModal: NgbActiveModal,
    private rest: RestService
  ) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(){
    // this.isLoading = true;
    this.rest.getLocationsCountries().subscribe(response => {
        // this.isLoading = false;
        this.countries = response.json();
        // console.log(response.json())
    },
      error => {  
        // this.isLoading = false;
      });
  }

  getStates(id){
    // this.isLoading = true;
    this.rest.getStates(id).subscribe(response => {
        // this.isLoading = false;
        this.states = response.json();
        // console.log(response.json())
    },
      error => {  
        // this.isLoading = false;
      });
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form)
    this.rest.updateAddress(this.form).subscribe(response => {
        // this.isLoading = false;
        // this.states = response.json();
        console.log(response.json())
    },
      error => {  
        // this.isLoading = false;
      });
  }

}
