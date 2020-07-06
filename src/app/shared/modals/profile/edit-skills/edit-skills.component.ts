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

  form = {
    name: "",
  }

  skillsList = ['cooking', 'gardening', 'fishing', 'carpenting', 'programming']
  filteredSkills : any;


  submitted = false;
  constructor(
    private utility: UtilityProvider,
    private rest: RestService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
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

}
