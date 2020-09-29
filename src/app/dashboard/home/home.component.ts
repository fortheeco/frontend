import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateOptionsComponent } from '../../shared/modals/create-options/create-options.component';
import { ViewComponent } from '../../shared/modals/tasks/view/view.component';
import { ViewApplicantComponent } from '../../shared/modals/tasks/view-applicant/view-applicant.component';
import { Router } from '@angular/router';
import { SharedServiceProvider } from '../../_providers/shared-provider';
import {RestService} from "../../_services/rest.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any;
  problems: any;
	shownGroup = null;
  pageParams ={
    "filter": {
      "userId": "",
      "title": "",
      "countryId": "",
      "stateId": "",
      "createdBefore": "",
      "createdAfter": "",
      "endedBefore": "",
      "endedAfter": "",
      "postType": ""
    },
    "pageNumber": "0",
    "pageSize": "0"
  }

  constructor(
    private modalService: NgbModal,
    private router: Router, 
    private rest: RestService,
    private sharedService: SharedServiceProvider, 
    ) { }
 
    ngOnInit() {
      // this.viewModal()
      this.getGlobalPosts()
      // this.router.navigate(['/dashboard/tasks/view-user-profile']);

    }


    toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
      }
    };

    isGroupShown(group) {
        return this.shownGroup === group;
    };
    
    getGlobalPosts(){
      // this.isLoading = true;
      this.rest.getGlobalPosts(this.pageParams).subscribe(response => {
          // this.isLoading = false;
         let posts = response;
          this.problems = posts.problems;
          console.log(this.problems)
          this.posts = posts.tasks.concat(posts.problems);
          console.log(posts.tasks.concat(posts.problems));

      },
        error => {  
          // this.isLoading = false;
        });
    }
  
    viewCreateOptions() {
      const modalRef = this.modalService.open(CreateOptionsComponent, { size: 'lg',centered: true,windowClass: 'clear-bg-modal'  });
    }

  
    viewModal() {
      const modalRef = this.modalService.open(ViewApplicantComponent, { size: 'lg',centered: true,windowClass: 'mini-modal'  });
    }

    viewPost(row) {
      this.viewTask(row)
    }

    viewTask(row) {
      this.sharedService.updatePassedProblem(row);
      const modalRef = this.modalService.open(ViewComponent, { size: 'lg',centered: true,windowClass: 'right-modal'  });
      modalRef.componentInstance.inputData = row;
      modalRef.result.then((result) => {
        this.getGlobalPosts();
      }).catch((res) => {
        console.log(res)
        this.getGlobalPosts();
      });
    }

    createTask(){
        this.router.navigate(['/dashboard/tasks/create']);
    }
}
