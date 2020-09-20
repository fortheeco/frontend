import { Component, OnInit } from '@angular/core';
import {RestService} from "../../../../_services/rest.service";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedServiceProvider } from '../../../../_providers/shared-provider';

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
  passedProfile: any;
  passedContact: any;

  constructor(
    public modal: NgbActiveModal,
    public activeModal: NgbActiveModal,
    private rest: RestService,
    private sharedService: SharedServiceProvider, 
  ) {
    this.sharedService.userProfile$.subscribe((data) => {
      this.passedProfile = data;
      console.log(data)
    });
    this.sharedService.userContact$.subscribe((data) => {
      this.passedContact = data;
      console.log(data)
    });
   }

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
