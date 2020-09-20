import { Component, OnInit } from '@angular/core';
import {RestService} from "../../../_services/rest.service";
import {AuthenticationService} from "../../../_services/authentication.service";
import { Router, ActivatedRoute } from '@angular/router';
import {UtilityProvider} from "../../../_providers/utility";
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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
    // "suggestion": {
    //   "durationInDays": '',
    //   "description": "",
    //   "requiredSkills": []
    // },
    "taskRequirement": {
      "numberOfPeople": '',
      "requiredSkill": [],
      "durationOfTaskInDays": '',
      "startDate": '',
      "reportSubmissionFrequency": ''
    },
    "taskPayment": {
      "paymentType": "",
      "amountPerPerson": ""
    },
    "photos": []
  }
/*
  {
    "title": "string",
    "description": "string",
    "address": {
      "countryId": 0,
      "stateId": 0,
      "street": "string",
      "postCode": "string"
    },
    "ecoDetails": {
      "ecoEntity": 0,
      "unSDGGoalId": [
        0
      ],
      "unSDGGoalsOther": "string",
      "icoId": [
        0
      ],
      "icoOther": "string"
    },
    "photos": [
      "string"
    ],
    "taskRequirement": {
      "numberOfPeople": 0,
      "requiredSkill": [
        {
          "name": "string",
          "level": 0
        }
      ],
      "durationOfTaskInDays": 0,
      "startDate": "2020-08-21T06:42:28.604Z",
      "reportSubmissionFrequency": 0
    },
    "taskPayment": {
      "paymentType": "string",
      "amountPerPerson": 0
    }
  }
*/

  addressParams = {
    "userId": "",
    "pageNumber": 0,
    "pageSize": 0
  }

  skill ='';
  selectedAddress: any;
  profile: any;
  goal: any;
  addresses: any;
  ecoDetails: any;
  unSDGGoals = [];

  selectedItems = [];
	dropdownList = [];

  dropdownSettings = {};
  singledropdownSettings = {};
  closeDropdownSelection=false;
  submitted=false;
  
  

  skillsList = [{id:1,name:'cooking'}, {id:2,name:'gardening'}, {id:3,name:'fishing'}, {id:4,name:'carpenting'}, {id:5,name:'programming'}]
  filteredSkills : any;

  unSDGGoalsList: any;
  errors: any;
  submiting: boolean;
  submitting: boolean;
  startDate: any;


  constructor(
    private authenticationService: AuthenticationService,
    private router: Router, 
    private ngbDateParserFormatter: NgbDateParserFormatter,
    private rest: RestService,
    private utility: UtilityProvider,
  ) { 
    this.selectedItems = [];
  }

  
  ngOnInit() {
    // this.editSkills()
    this.getUserProfile()
    // this.getUserContacts()
    this.getEcoDetails();
    this.getUserAddresses();

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
       console.log(this.addresses.entities)
   },
     error => {  
       // this.isLoading = false;
     });
 }

 getUserAddresses(){
   this.addressParams.userId = this.authenticationService.currentUserValue.user.id;
   // this.isLoading = true;
   this.authenticationService.getUserAddresses(this.addressParams).subscribe(response => {
       // this.isLoading = false;
       let d = response.json();
       this.addresses = d.entities;
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
    this.form.taskRequirement.requiredSkill.push(d)
    console.log(this.form.taskRequirement.requiredSkill);

  }

  skillDeSelect(skill: any) {
    // console.log(this.form.suggestion.requiredSkills);

      this.form.taskRequirement.requiredSkill = this.form.taskRequirement.requiredSkill.filter(function( obj ) {
        return obj.name !== skill.name;
    });
    console.log(this.form.taskRequirement.requiredSkill);
  }

  addressSelected(address){
    this.form.address.street = address.street;
    this.form.address.stateId = address.state.id;
    this.form.address.countryId = address.country.id;
    this.form.address.postCode = address.postCode;
    // console.log(this.form)
  }
  onSubmit(){
    console.log(this.getServerDate(this.form.taskRequirement.startDate))
    this.form.taskRequirement.startDate = this.getServerDate(this.form.taskRequirement.startDate);
    // console.log(this.form)
    this.submitting = true;

    this.rest.createTask(this.form).subscribe(response => {
        this.submitting = false;
        this.utility.showToast('success', 'Post created successfully')
        this.router.navigate(['/dashboard/overview']);

        console.log(response.json())
    },
      error => {  
        // console.log(error.json())
        let err = error.json();
        this.errors = err.errors;
        console.log(this.errors)

        this.submitting = false;
        // this.showSuccess()
      });
  }
  getServerDate(dateStruct) {
    return this.ngbDateParserFormatter.format(dateStruct);
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

    // format date from bootstrap date plugin
    format(str): string {
      return `${str.year}-${str.month}-${str.day}`;
    }
}
