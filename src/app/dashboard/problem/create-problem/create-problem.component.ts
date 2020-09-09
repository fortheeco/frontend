import { Component, OnInit } from '@angular/core';
import {RestService} from "../../../_services/rest.service";
import {AuthenticationService} from "../../../_services/authentication.service";
import { Router, ActivatedRoute } from '@angular/router';
import {UtilityProvider} from "../../../_providers/utility";


@Component({
  selector: 'app-create-problem',
  templateUrl: './create-problem.component.html',
  styleUrls: ['./create-problem.component.css']
})
export class CreateProblemComponent implements OnInit {

  form = {
    "title": "",
    "description": "",
    "address": {
      "countryId": '',
      "stateId": '',
      "street": "",
      "postCode": ""
    },
    "ecoDetails": {
      "ecoEntity": '',
      "unSDGGoalId": [],
      "unSDGGoalsOther": "",
      "icoId": [],
      "icoOther": ""
    },
    "suggestion": {
      "durationInDays": '',
      "description": "",
      "requiredSkills": []
    },
    "photos": []
  }
  skill ='';
  profile: any;
  goal: any;
  addresses: any;
  ecoDetails: any;
  selectedAddress: any;
  unSDGGoals = [];
  
  selectedItems = [];
	dropdownList = [];

  dropdownSettings = {};
  singledropdownSettings = {};
  closeDropdownSelection=false;
  


  skillsList = [{id:1,name:'cooking'}, {id:2,name:'gardening'}, {id:3,name:'fishing'}, {id:4,name:'carpenting'}, {id:5,name:'programming'}]
  filteredSkills : any;

  unSDGGoalsList: any;
  errors: any;
  submiting: boolean;
  submitting: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router, 
    private rest: RestService,
    private utility: UtilityProvider,
  ) { 
    this.selectedItems = [];
  }

  ngOnInit() {
    // this.editSkills()
    this.getUserProfile()
    this.getUserContacts()
    this.getEcoDetails();

    this.dropdownSettings = {
      singleSelection: false,
      limitSelection: 15,
      enableCheckAll:false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  getUserProfile(){
    // this.isLoading = true;
    this.authenticationService.getIndividualData().subscribe(response => {
        // this.isLoading = false;
        this.profile = response.json();
        // this.temp = response.json().data;
        console.log(this.profile.detail)
    },
      error => {  
        // this.isLoading = false;
      });
  }

  
  async onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log();
      this.getBase64(file)
  
    }
  }

  getBase64(file) {
    let env = this;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      env.form.photos.push(reader.result);
      // env.gift.photo = reader.result;
      return reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

  getUserContacts(){
    // this.isLoading = true;
    this.authenticationService.getUserContacts().subscribe(response => {
        // this.isLoading = false;
        let d = response.json();
        this.addresses = d.addresses.entities;
        console.log(this.addresses)
    },
      error => {  
        // this.isLoading = false;
      });
  }

  icoSelected(event,id,name){
    // console.log('Selected Ids ', event.target.checked);

    if (event.target.checked === true) {
      this.form.ecoDetails.icoId.push(id);
      this.form.ecoDetails.ecoEntity = id;
      let filteredEntities = this.unSDGGoals.filter((item) => item.ecoEntityId == id);
      this.unSDGGoalsList = filteredEntities;

      console.log(filteredEntities[0].unSDGGoals)
      // console.log('Selected Ids ', this.form.ecoDetails);
    }
    if (event.target.checked === false) {
      this.form.ecoDetails.icoId = this.form.ecoDetails.icoId.filter((item) => item !== id);
      console.log('Selected Ids ', this.form.ecoDetails);
    }
  }
  
  goalSelected(goal: any) {
    // console.log(item);
    this.form.ecoDetails.unSDGGoalId.push(goal.id);
  }

  goalDeSelect(goal: any) {
      console.log(goal);
      this.form.ecoDetails.unSDGGoalId = this.form.ecoDetails.icoId.filter(function( obj ) {
        return obj !== goal;
    });
  }

  selectSkill(s){
    let d= {
      "name": s.name,
      "level": 1
    }
    this.form.suggestion.requiredSkills.push(d)
    console.log(this.form.suggestion.requiredSkills);

  }

  skillDeSelect(skill: any) {
    // console.log(this.form.suggestion.requiredSkills);

      this.form.suggestion.requiredSkills = this.form.suggestion.requiredSkills.filter(function( obj ) {
        return obj.name !== skill.name;
    });
    console.log(this.form.suggestion.requiredSkills);
  }

  addressSelected(address){
    this.form.address.street = address.street;
    this.form.address.stateId = address.state.id;
    this.form.address.countryId = address.country.id;
    this.form.address.postCode = address.postCode;
    // console.log(this.form)
  }
  onSubmit(){
    console.log(this.form)
    this.submitting = true;

    this.rest.createProblem(this.form).subscribe(response => {
        this.submitting = false;
        this.utility.showToast('success', 'Post created successfully')
        this.router.navigate(['/dashboard/overview']);

        console.log(response.json())
    },
      error => {  
        console.log(error.json())
        let err = error.json();
        this.errors = err.errors;
        this.submitting = false;
        // this.showSuccess()
      });
  }

  getEcoDetails(){
    // this.isLoading = true;
    this.rest.getEcoDetails().subscribe(response => {
        // this.isLoading = false;
        let d = response.json();
        this.ecoDetails = d;

        let un = d.ecoEntities.map(function (val) {
          return val.unSDGGoals
        });

        this.unSDGGoals = un.flat();

        console.log(this.ecoDetails)
        // console.log(un.flat())
    },
      error => {  
        // this.isLoading = false;
      });
  }
}
