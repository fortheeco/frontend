"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
require("rxjs/Rx");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var _services_1 = require("../../_services");
var rest_service_1 = require("../../_services/rest.service");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var AgentsComponent = /** @class */ (function () {
    function AgentsComponent(_loadingBar, modalService, rest, formBuilder, route, router, authenticationService) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this.modalService = modalService;
        this.rest = rest;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.processing = false;
        this.rows = [];
        // End the Closeable Alert
        // This is for the self closing alert
        this._success = new rxjs_1.Subject();
        this.staticAlertClosed = false;
        setTimeout(function () { return (_this.staticAlertClosed = true); }, 20000);
        this._success.subscribe(function (message) { return (_this.successMessage = message); });
        this._success.pipe(operators_1.debounceTime(5000)).subscribe(function () { return (_this.successMessage = null); });
    }
    AgentsComponent_1 = AgentsComponent;
    AgentsComponent.prototype.ngOnInit = function () {
        this.getAgents();
    };
    AgentsComponent.prototype.revoke = function (row) {
        var _this = this;
        var modalRef = this.modalService.open(RemoveAgentModalContent);
        modalRef.componentInstance.inputData = row;
        modalRef.result.then(function (result) {
            _this._success.next("Successfully Deleted");
            _this.getAgents();
        });
    };
    AgentsComponent.prototype.getAgents = function () {
        var _this = this;
        this._loadingBar.start();
        this.rest.getAgents().subscribe(function (response) {
            _this._loadingBar.complete();
            _this.agents = response.json().data;
            _this.temp = response.json().data;
            console.log(_this.agents);
        }, function (error) {
            _this._loadingBar.complete();
        });
    };
    AgentsComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val || d.price.toLowerCase().indexOf(val) !== -1 || !val || d.sku.toLowerCase().indexOf(val) !== -1 || !val || d.fda.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.agents = temp;
        // Whenever the filter changes, always go back to the first page
        this.table = this.agents;
    };
    var AgentsComponent_1;
    __decorate([
        core_1.ViewChild(AgentsComponent_1),
        __metadata("design:type", AgentsComponent)
    ], AgentsComponent.prototype, "table", void 0);
    AgentsComponent = AgentsComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-agents',
            templateUrl: './agents.component.html',
            styleUrls: ['./agents.component.css']
        }),
        __metadata("design:paramtypes", [ng2_slim_loading_bar_1.SlimLoadingBarService,
            ng_bootstrap_1.NgbModal,
            rest_service_1.RestService,
            forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            _services_1.AuthenticationService])
    ], AgentsComponent);
    return AgentsComponent;
}());
exports.AgentsComponent = AgentsComponent;
var RemoveAgentModalContent = /** @class */ (function () {
    function RemoveAgentModalContent(activeModal, formBuilder, rest) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.rest = rest;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.processing = false;
        // End the Closeable Alert
        // This is for the self closing alert
        this._success = new rxjs_1.Subject();
        this.staticAlertClosed = false;
    }
    RemoveAgentModalContent.prototype.ngOnInit = function () {
    };
    RemoveAgentModalContent.prototype.delete = function () {
        var _this = this;
        this.processing = true;
        this.rest.removeAgent(this.inputData)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this._success.next("" + data.message);
            _this.submitted = false;
            _this.processing = false;
            _this.activeModal.close();
        }, function (error) {
            _this.error = error;
            _this.loading = false;
            _this.processing = false;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RemoveAgentModalContent.prototype, "name", void 0);
    RemoveAgentModalContent = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Remove Middleman</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">  \n      <p>Are you sure ?</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"delete()\">Remove</button>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal, forms_1.FormBuilder, rest_service_1.RestService])
    ], RemoveAgentModalContent);
    return RemoveAgentModalContent;
}());
exports.RemoveAgentModalContent = RemoveAgentModalContent;
//# sourceMappingURL=agents.component.js.map