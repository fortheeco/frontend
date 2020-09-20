import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeSkillsFilter } from 'src/app/dashboard/organization/organization-employees-skills/organization-employees-skills-functions';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppEmploymentStatus } from 'src/app/_models/organization/app-organization-employee-skills';
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';

@Component({
  selector: 'app-filter-employees',
  templateUrl: './filter-employees.component.html',
  styleUrls: ['./filter-employees.component.css']
})
export class FilterEmployeesComponent implements OnInit {

  filterEmployeesForm: FormGroup;

  @Output() updatedFilter = new EventEmitter<EmployeeSkillsFilter>();
  @Input() currentFilter: EmployeeSkillsFilter;

  employementStatus: {key: string, value: string}[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    public formError: FormErrorService
  ) { }

  ngOnInit() {
    this.setEmploymentStatus();
    this.initializeForm();
  }

  initializeForm() {
    this.filterEmployeesForm = this.fb.group({
      staffName: [this.currentFilter.staffName, [CustomValidator.MinLength(3), CustomValidator.MaxLength(256)]],
      position: [this.currentFilter.position, [CustomValidator.MinLength(3), CustomValidator.MaxLength(256)]],
      department: [this.currentFilter.department, [CustomValidator.MinLength(3), CustomValidator.MaxLength(256)]],
      status: [this.currentFilter.status]
    });
  }

  setEmploymentStatus() {
    for (const key in AppEmploymentStatus) {
      if ( AppEmploymentStatus[key] ) {
        this.employementStatus.push( { key, value: AppEmploymentStatus[key] } );
      }
    }
  }

  resetFilter() {
    this.updatedFilter.emit({} as EmployeeSkillsFilter);
    this.activeModal.close();
  }

  updateFilter() {
    this.updatedFilter.emit(this.filterEmployeesForm.value);
    this.activeModal.close();
  }

}
