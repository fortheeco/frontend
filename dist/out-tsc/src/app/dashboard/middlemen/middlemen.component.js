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
var forms_1 = require("@angular/forms");
require("rxjs/Rx");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var rest_service_1 = require("../../_services/rest.service");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var MiddlemenComponent = /** @class */ (function () {
    function MiddlemenComponent(_loadingBar, modalService, rest) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this.modalService = modalService;
        this.rest = rest;
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
    MiddlemenComponent_1 = MiddlemenComponent;
    MiddlemenComponent.prototype.ngOnInit = function () {
        this.getMiddlemen();
    };
    MiddlemenComponent.prototype.revoke = function (row) {
        var _this = this;
        var modalRef = this.modalService.open(RevokeModalContent);
        modalRef.componentInstance.inputData = row;
        modalRef.result.then(function (result) {
            _this._success.next("Successfully Deleted");
            _this.getMiddlemen();
        });
    };
    MiddlemenComponent.prototype.getMiddlemen = function () {
        var _this = this;
        this._loadingBar.start();
        this.rest.getMiddlemen().subscribe(function (response) {
            _this._loadingBar.complete();
            _this.middlemen = response.json().data;
            _this.temp = response.json().data;
            console.log(_this.middlemen);
        }, function (error) {
            _this._loadingBar.complete();
        });
    };
    MiddlemenComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val || d.price.toLowerCase().indexOf(val) !== -1 || !val || d.sku.toLowerCase().indexOf(val) !== -1 || !val || d.fda.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.middlemen = temp;
        // Whenever the filter changes, always go back to the first page
        this.table = this.middlemen;
    };
    var MiddlemenComponent_1;
    __decorate([
        core_1.ViewChild(MiddlemenComponent_1),
        __metadata("design:type", MiddlemenComponent)
    ], MiddlemenComponent.prototype, "table", void 0);
    MiddlemenComponent = MiddlemenComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-middlemen',
            templateUrl: './middlemen.component.html',
            styleUrls: ['./middlemen.component.css']
        }),
        __metadata("design:paramtypes", [ng2_slim_loading_bar_1.SlimLoadingBarService,
            ng_bootstrap_1.NgbModal,
            rest_service_1.RestService])
    ], MiddlemenComponent);
    return MiddlemenComponent;
}());
exports.MiddlemenComponent = MiddlemenComponent;
var RevokeModalContent = /** @class */ (function () {
    function RevokeModalContent(activeModal, formBuilder, rest) {
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
    RevokeModalContent.prototype.ngOnInit = function () {
    };
    RevokeModalContent.prototype.delete = function () {
        var _this = this;
        this.processing = true;
        this.rest.removeMiddleman(this.inputData)
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
    ], RevokeModalContent.prototype, "name", void 0);
    RevokeModalContent = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Remove Middleman</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">  \n      <p>Are you sure ?</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"delete()\">Remove</button>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal, forms_1.FormBuilder, rest_service_1.RestService])
    ], RevokeModalContent);
    return RevokeModalContent;
}());
exports.RevokeModalContent = RevokeModalContent;
//# sourceMappingURL=middlemen.component.js.map