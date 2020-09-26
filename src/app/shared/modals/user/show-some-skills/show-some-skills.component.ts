import { Component, OnInit, Input } from '@angular/core';
import { AppIndividualSkill } from 'src/app/_models/individual/individual-skill';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomApplicationConstant } from 'src/app/_models/app-constant';

@Component({
  selector: 'app-show-some-skills',
  templateUrl: './show-some-skills.component.html',
  styleUrls: ['./show-some-skills.component.css']
})
export class ShowSomeSkillsComponent implements OnInit {

  @Input() userName: string;
  @Input() skills: AppIndividualSkill[];

  AppConstant = CustomApplicationConstant;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
