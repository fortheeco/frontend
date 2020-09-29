import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateOptionsComponent } from '../../../shared/modals/create-options/create-options.component';
import { ViewComponent } from '../../../shared/modals/tasks/view/view.component';
import { Router } from '@angular/router';
import { SharedServiceProvider } from '../../../_providers/shared-provider';
import {RestService} from "../../../_services/rest.service";
import {UtilityProvider} from "../../../_providers/utility";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts: any;
  problems: any;
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
    private utility: UtilityProvider,
    private sharedService: SharedServiceProvider, 
    ) { }


    ngOnInit() {
      this.getGlobalPosts()
    }

    getGlobalPosts(){
      this.problems = undefined;
      // this.isLoading = true;
      this.rest.getGlobalPosts(this.pageParams).subscribe(response => {
          // this.isLoading = false;
         let posts = response;
          this.problems = posts.problems; 
          console.log(this.problems)
      },
        error => {  
          // this.isLoading = false;
        });
    }

    votePost(id){
      // this.isLoading = true;
      this.rest.votePost(id).subscribe(response => {
        this.utility.showToast('primary', 'post voted')
          // this.isLoading = false;
         let res = response;
         this.getGlobalPosts()
          console.log(res)
      },
        error => {  
          // this.isLoading = false;
        });
    }

    viewPost(row) {
      this.viewTask(row)
    }

    viewTask(row) {
      this.sharedService.updatePassedProblem(row);
      const modalRef = this.modalService.open(ViewComponent, { size: 'lg',centered: true  });
      modalRef.componentInstance.inputData = row;
      modalRef.result.then((result) => {
        this.getGlobalPosts();
      }).catch((res) => {
        console.log(res)
        this.getGlobalPosts();
      });
    }

  editTaskModal() {
    const modalRef = this.modalService.open(ViewComponent, { size: 'lg',centered: true });
    modalRef.result.then((result) => {
      // this._success.next("Successfully Deleted");
    })
  }
}
