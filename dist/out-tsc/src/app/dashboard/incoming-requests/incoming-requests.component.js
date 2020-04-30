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
var rest_service_1 = require("../../_services/rest.service");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var statusTranslators_1 = require("../../_helpers/statusTranslators");
var IncomingRequestsComponent = /** @class */ (function () {
    function IncomingRequestsComponent(_loadingBar, modalService, rest, formBuilder, statusTranslators, route, router) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this.modalService = modalService;
        this.rest = rest;
        this.formBuilder = formBuilder;
        this.statusTranslators = statusTranslators;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.processing = false;
        this.rows = [];
        this.scrollBarHorizontal = (window.innerWidth < 1200);
        this.isLoading = false;
        // End the Closeable Alert
        // This is for the self closing alert
        this._message = new rxjs_1.Subject();
        this.staticAlertClosed = false;
        window.onresize = function () {
            _this.scrollBarHorizontal = (window.innerWidth < 1200);
        };
        setTimeout(function () { return (_this.staticAlertClosed = true); }, 20000);
        this._message.subscribe(function (message) { return (_this.responseMessage = message); });
        this._message.pipe(operators_1.debounceTime(5000)).subscribe(function () { return (_this.responseMessage = null); });
    }
    IncomingRequestsComponent_1 = IncomingRequestsComponent;
    IncomingRequestsComponent.prototype.ngOnInit = function () {
        this.getRequests();
    };
    IncomingRequestsComponent.prototype.getRequests = function () {
        var _this = this;
        this.isLoading = true;
        this.rest.getUserIncomingPickupRequest().subscribe(function (response) {
            _this.isLoading = false;
            _this.requests = response.json().data;
            _this.temp = response.json().data;
            console.log(_this.requests);
        }, function (error) {
            _this.isLoading = false;
        });
    };
    IncomingRequestsComponent.prototype.view = function (row) {
        var modalRef = null;
        modalRef = this.modalService.open(ViewRequestModalContent);
        modalRef.componentInstance.inputData = row;
    };
    IncomingRequestsComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.request_code.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.requests = temp;
        // Whenever the filter changes, always go back to the first page
        this.table = this.requests;
    };
    var IncomingRequestsComponent_1;
    __decorate([
        core_1.ViewChild(IncomingRequestsComponent_1),
        __metadata("design:type", IncomingRequestsComponent)
    ], IncomingRequestsComponent.prototype, "table", void 0);
    IncomingRequestsComponent = IncomingRequestsComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-incoming-requests',
            templateUrl: './incoming-requests.component.html',
            styleUrls: ['./incoming-requests.component.css']
        }),
        __metadata("design:paramtypes", [ng2_slim_loading_bar_1.SlimLoadingBarService,
            ng_bootstrap_1.NgbModal,
            rest_service_1.RestService,
            forms_1.FormBuilder,
            statusTranslators_1.StatusTranslators,
            router_1.ActivatedRoute,
            router_1.Router])
    ], IncomingRequestsComponent);
    return IncomingRequestsComponent;
}());
exports.IncomingRequestsComponent = IncomingRequestsComponent;
var ViewRequestModalContent = /** @class */ (function () {
    function ViewRequestModalContent(activeModal, formBuilder, rest) {
        var _this = this;
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
        setTimeout(function () { return (_this.staticAlertClosed = true); }, 20000);
        this._success.subscribe(function (message) { return (_this.successMessage = message); });
        this._success.pipe(operators_1.debounceTime(5000)).subscribe(function () { return (_this.successMessage = null); });
    }
    ViewRequestModalContent.prototype.ngOnInit = function () {
        this.dataForm = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            fda: ['', forms_1.Validators.required],
            price: ['', forms_1.Validators.required],
            weight: ['', forms_1.Validators.required],
            notes: [''],
            tags: [],
            sku: ['', forms_1.Validators.required],
        });
    };
    ViewRequestModalContent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.dataForm.invalid) {
            return;
        }
        this.processing = true;
        this.rest.updateProduct(this.inputData)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.submitted = false;
            _this.processing = false;
            if (data.status == "00") {
                _this.messageType = 'success';
                _this._success.next("" + data.message);
            }
            else {
                data.message = _this.rest.processErrorMessages(data.message);
                _this.messageType = 'danger';
                _this._success.next("" + data.message);
            }
        }, function (error) {
            _this.error = error;
            _this.loading = false;
            _this.processing = false;
        });
    };
    Object.defineProperty(ViewRequestModalContent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.dataForm.controls; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ViewRequestModalContent.prototype, "name", void 0);
    ViewRequestModalContent = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">View Request</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">  \n            <ngb-alert *ngIf=\"successMessage\"  [type]=\"messageType\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\n\n       \n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onSubmit()\" [disabled]=\"processing\">                       \n        <img *ngIf=\"processing\" class=\"pl-2\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        Submit\n      </button>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
            forms_1.FormBuilder, rest_service_1.RestService])
    ], ViewRequestModalContent);
    return ViewRequestModalContent;
}());
exports.ViewRequestModalContent = ViewRequestModalContent;
//# sourceMappingURL=incoming-requests.component.js.map