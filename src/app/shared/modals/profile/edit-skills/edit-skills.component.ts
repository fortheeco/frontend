import { Component, OnInit, Input } from '@angular/core';
import {RestService} from "../../../../_services/rest.service";
import {UtilityProvider} from "../../../../_providers/utility";
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  form : any = {
    skillName: "",
  }
  responseMessage: any;
  skillsList = ['cooking', 'gardening', 'fishing', 'carpenting', 'programming']
  filteredSkills : any;


  submitted = false;
  userSkills: any;
  constructor(
    private utility: UtilityProvider,
    private rest: RestService,
    private toastr: ToastrService,
    public modal: NgbActiveModal,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
    this.getUserSkills()
  }

  close(){
    this.activeModal.close()
  }
  
  filterItems(ev: any) {
    console.log(ev)
    // set val to the value of the searchbar
    let val = ev;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filteredSkills = this.skillsList.filter((s) => {
        return (s.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  getUserSkills(){
    // this.isLoading = true;
    this.rest.getUserSkills().subscribe(response => {
        // this.isLoading = false;
        // this.countries = response.json();
        let data = response.json();
        this.userSkills = data.entities;
        
        console.log(response.json())
    },
      error => {  
        // this.isLoading = false;
      });
  }

  selectSkill(s){
    this.form.skillName = s;
    this.filteredSkills = undefined;
    // this.skill ='';

    // let d= {
    //   "name": s,
    //   "level": 0
    // }
    // this.form.suggestion.requiredSkills.push(d)
  }
  
  onSubmit(){
    this.submitted = true;
    console.log(this.form)
    // this.form.forEach(form=> {

      this.rest.addSkill(this.form).subscribe(response => {
          // this.isLoading = false;
          // this.states = response.json();
          this.getUserSkills();
          this.form.skillName = "";
          this.utility.showToast('success', 'Skill successfully added')

          console.log(response.json())
      },
        error => {  
          // this.isLoading = false;
          // this.showSuccess()
        });
  //  });
  }
  
  deleteSkill(id){
    console.log(this.form)
    // this.form.forEach(form=> {

      this.rest.deleteSkill(id).subscribe(response => {
          // this.isLoading = false;
          // this.states = response.json();
          this.getUserSkills();
          this.utility.showToast('success', 'Skill successfully deleted')

          // console.log(response.json())
      },
        error => {  
          // this.isLoading = false;
          // this.showSuccess()
        });
  //  });
  }
}
