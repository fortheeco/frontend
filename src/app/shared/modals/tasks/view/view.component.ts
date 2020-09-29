import { Component, OnInit, Input } from '@angular/core';
import {RestService} from "../../../../_services/rest.service";
import {UtilityProvider} from "../../../../_providers/utility";
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from "../../../../_services/authentication.service";
import { SharedServiceProvider } from '../../../../_providers/shared-provider';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ApplyComponent } from './../apply/apply.component';
import { ViewApplicantComponent } from './../view-applicant/view-applicant.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  postDetails: any;

  public showSidebar = false;
  public selectedUser: any;
	shownGroup = null;

  commentForm = {
    message: "",
    replyCommentId: "",
    problemId: "",
    taskId: "",
  };

  ideaForm = {
    message: "",
    taskId: "",
  };

  ideaForm2 = {
    message: "",
    problemId: "",
  };

  commenting: boolean;
  comments: any;
  commentToReply: any;
  currentUser: any;
  deleting: boolean;
  viewMode = 'comments';
  pageParams = {
    "taskId": "",
    "filter": {
      "contractStatus": ""
    },
    "pageNumber": 0,
    "pageSize": 0
  }
  applications: any;
  ideas: any;
  submitting1: boolean;

  constructor(
    private utility: UtilityProvider,
    private rest: RestService,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private sharedService: SharedServiceProvider, 

  ) { 

    this.sharedService.passedProblem$.subscribe((data) => {
      console.log(data)
      this.postDetails = data;
      // console.log(this.postDetails.problem.ecoDetail.ecoEntity.name)
      if(data.task){
        this.pageParams.taskId = data.task.id;
        this.ideaForm.taskId = data.task.id;
        this.getTaskComments();
        this.getTaskIdeas();
        this.getTaskApplications();
      }else{
        this.ideaForm2.problemId = data.problem.id;
        this.getComments();
        this.getProblemIdeas();
      }

    });

    this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user.user;
      console.log('User value', this.currentUser);
    });
  }

  ngOnInit() {
  }

  
  viewApplicantModal(data) {
    this.sharedService.updatePassedApplicant(data);
    const modalRef = this.modalService.open(ViewApplicantComponent, { size: 'lg',centered: true,windowClass: 'mini-modal'  });
  }


  applyToTask(row) {
    const modalRef = this.modalService.open(ApplyComponent, { size: 'sm',centered: true, windowClass: 'wide-modal'  });
    modalRef.componentInstance.inputData = row;
    modalRef.result.then((result) => {
      // this.getGlobalPosts();
    }).catch((res) => {
      console.log(res)
      // this.getGlobalPosts();
    });
  }


  commentOnTask(){
    this.commenting = true;
    if(this.commentToReply){
      this.commentForm.replyCommentId = this.commentToReply.id;
    }

    this.commentForm.taskId = this.postDetails.task.id;
    console.log(this.commentForm)
    this.rest.taskPostComment(this.commentForm).subscribe(response => {
      this.utility.showToast('primary', 'comment posted')
        this.commenting = false;
       let res = response;
        console.log(res)
        this.clearForm();
        this.getTaskComments();
      },
      error => {  
        this.commenting = true;
      });

  }

  commentOnPost(){
    this.commenting = true;
    if(this.commentToReply){
      this.commentForm.replyCommentId = this.commentToReply.id;
    }

    this.commentForm.problemId = this.postDetails.problem.id;
    this.rest.postComment(this.commentForm).subscribe(response => {
      this.utility.showToast('primary', 'comment posted')
        this.commenting = false;
       let res = response.json();
        console.log(res)
        this.clearForm();
        this.getComments();
      },
      error => {  
        this.commenting = true;
      });

  }
  scroll(el: HTMLElement,comment) {
    console.log(comment)
    if(comment){
      this.commentToReply = comment;
    }
    el.scrollIntoView(); 
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      el.focus();
    },0);  
  }

  getComments(){
    // this.isLoading = true;
    this.rest.getProblemComments(this.postDetails.problem.id?this.postDetails.problem.id:this.postDetails.task.id).subscribe(response => {
        // this.isLoading = false;
       let res = response;
       this.comments = res.entities;
        console.log(res)
    },
      error => {  
        // this.isLoading = false;
      });
  }
  
  getTaskComments(){
    // this.isLoading = true;
    this.rest.getTaskComments(this.postDetails.task.id).subscribe(response => {
        // this.isLoading = false;
       let res = response;
       this.comments = res.entities;
        console.log(res)
    },
      error => {  
        // this.isLoading = false;
      });
  }

  
  getTaskIdeas(){
    // this.isLoading = true;
    this.rest.getTaskIdeas(this.postDetails.task.id).subscribe(response => {
        // this.isLoading = false;
       let res = response;
       this.ideas = res.entities;
        console.log(res)
    },
      error => {  
        // this.isLoading = false;
      });
  }


  
  getProblemIdeas(){
    // this.isLoading = true;
    this.rest.getProblemIdeas(this.postDetails.problem.id).subscribe(response => {
        // this.isLoading = false;
       let res = response;
       this.ideas = res.entities;
        console.log(res)
    },
      error => {  
        // this.isLoading = false;
      });
  }

  getCommentReplies(cId){
    // this.isLoading = true;
    this.rest.getProblemComments(this.postDetails.problem.id?this.postDetails.problem.id:this.postDetails.task.id,cId).subscribe(response => {
        // this.isLoading = false;
       let res = response.json();
       this.comments = res.entities;
        console.log(res)
    },
      error => {  
        // this.isLoading = false;
      });
  }

  getTaskApplications(){
    this.applications = undefined;
    // this.isLoading = true;
    this.rest.getTaskApplications(this.pageParams).subscribe(response => {
        // this.isLoading = false;
       let posts = response;
        this.applications = posts.entities; 
        console.log(this.applications)
    },
      error => {  
        // this.isLoading = false;
      });
  }

  submitIdea(){
    this.applications = undefined;
    this.submitting1 = true;
    this.rest.submitIdea(this.ideaForm).subscribe(response => {
        this.submitting1 = false;
       let posts = response;
       this.ideaForm = {
        message: "",
        taskId: "",
      };
      this.utility.showToast('success', 'Idea submitted successfully')
        // this.applications = posts.entities; 
        this.getTaskIdeas();
        console.log(this.applications)
    },
      error => {  
        this.submitting1 = false;
      });
  }


  submitProblemIdea(){
    this.applications = undefined;
    this.submitting1 = true;
    this.rest.submitProblemIdea(this.ideaForm2).subscribe(response => {
        this.submitting1 = false;
       let posts = response;
       this.ideaForm2 = {
        message: "",
        problemId: "",
      };
      this.utility.showToast('success', 'Idea submitted successfully')
        // this.applications = posts.entities; 
        this.getProblemIdeas();
        console.log(this.applications)
    },
      error => {  
        this.submitting1 = false;
      });
  }


  deleteProblem(id){
    this.deleting = true;
    console.log(id)
    this.rest.deleteProblem(id).subscribe(response => {
      this.deleting = false;
      this.close();
      this.utility.showToast('success', 'Post deleted successfully')
    },
      error => {  
        this.deleting = false;
        // this.isLoading = false;
      });
  }
  
  close(){
    this.activeModal.dismiss();
  }

  toggleGroup(group) {
    console.log(group)
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
        this.getCommentReplies(group);
    }
  };
  
	isGroupShown(group) {
	    return this.shownGroup === group;
  };
  
  clearForm(){
    this.commentForm = {
      message: "",
      replyCommentId: "",
      problemId: "",
      taskId: "",
    };
    this.commentToReply = undefined;
  }

  voteTaskPost(id){
    // this.isLoading = true;
    this.rest.voteTaskPost(id).subscribe(response => {
      this.utility.showToast('primary', 'post voted')
        // this.isLoading = false;
       let res = response;
      //  this.getGlobalPosts()
        console.log(res)
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
      //  this.getGlobalPosts()
        console.log(res)
    },
      error => {  
        // this.isLoading = false;
      });
  }
}
