import { Component, OnInit, Input } from '@angular/core';
import {RestService} from "../../../../_services/rest.service";
import {UtilityProvider} from "../../../../_providers/utility";
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-globaladdress',
  templateUrl: './edit-globaladdress.component.html',
  styleUrls: ['./edit-globaladdress.component.css']
})
export class EditGlobaladdressComponent implements OnInit {

  countries: any;
  states: any;
  // form = {
  //   emailAddress: "",
  //   addressId: "",
  //   phoneNumber: "",
  //   countryId: "",
  //   stateId: "",
  //   street: "",
  //   postCode: ""
  // }
  form = [{
    countryId: "",
    stateId: "",
    street: "",
    postCode: "",
    states: [],
  }]
  submitted = false;

  constructor(
    private utility: UtilityProvider,
    private rest: RestService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.getCountries();
    this.getContacts();
  }

  getContacts(){
    // this.isLoading = true;
    this.rest.getContacts().subscribe(response => {
        // this.isLoading = false;
        let d = response.json();
        let addresses = d.addresses;
        let i = 0;
        addresses.forEach(add=> {
          console.log(add)

          let addData = {
            countryId: add.country.id,
            stateId: add.state.id,
            street: add.street,
            postCode: add.postCode,
            states: this.states,
          }

          console.log(addData)
          if(add.isFree){
            this.form[0] = addData
            this.getStates(i,addData.countryId)
          }else{
            this.form.push(addData)
            this.getStates(i,addData.countryId)
          }

          i++;
        });

        
        // console.log(addresses)
    },
      error => {  
        // this.isLoading = false;
      });
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

  getStates(i,id){
    // this.isLoading = true;
    this.rest.getStates(id).subscribe(response => {
        // this.isLoading = false;
        this.form[i].states = response.json();
        // console.log(response.json())
    },
      error => {  
        // this.isLoading = false;
      });
  }

  addContact(){
    this.form.push({
      countryId: "",
      stateId: "",
      street: "",
      postCode: "",
      states: []
    })
  }
  
  onSubmit(){
    this.submitted = true;
    console.log(this.form)
    this.form.forEach(form=> {

      this.rest.updateAddress(form).subscribe(response => {
          // this.isLoading = false;
          // this.states = response.json();
          this.close();
          this.utility.showToast('success', 'Address successfully added')

          console.log(response.json())
      },
        error => {  
          // this.isLoading = false;
          this.showSuccess()
        });
   });
  }

  close(){
    this.activeModal.close();
  }


  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }
}
