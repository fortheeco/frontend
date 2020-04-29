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
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(modalService, rest) {
        var _this = this;
        this.modalService = modalService;
        this.rest = rest;
        this.submitted = false;
        this.error = '';
        this.processing = false;
        this.rows = [];
        this.scrollBarHorizontal = (window.innerWidth < 1200);
        this.isLoading = false;
        // End the Closeable Alert
        // This is for the self closing alert
        this._success = new rxjs_1.Subject();
        this.staticAlertClosed = false;
        window.onresize = function () {
            _this.scrollBarHorizontal = (window.innerWidth < 1200);
        };
        setTimeout(function () { return (_this.staticAlertClosed = true); }, 20000);
        this._success.subscribe(function (message) { return (_this.successMessage = message); });
        this._success.pipe(operators_1.debounceTime(5000)).subscribe(function () { return (_this.successMessage = null); });
    }
    ProductsComponent_1 = ProductsComponent;
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val || d.price.toLowerCase().indexOf(val) !== -1 || !val || d.sku.toLowerCase().indexOf(val) !== -1 || !val || d.fda.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.products = temp;
        // Whenever the filter changes, always go back to the first page
        this.table = this.products;
    };
    ProductsComponent.prototype.view = function (row) {
        var modalRef = null;
        modalRef = this.modalService.open(ViewProductModalContent);
        modalRef.componentInstance.inputData = row;
    };
    ProductsComponent.prototype.edit = function (row) {
        var _this = this;
        var modalRef = this.modalService.open(EditProductModalContent);
        modalRef.componentInstance.inputData = row;
        modalRef.result.then(function (result) {
            _this.getProducts();
        });
    };
    ProductsComponent.prototype.delete = function (row) {
        var _this = this;
        var modalRef = this.modalService.open(DeleteProductModalContent);
        modalRef.componentInstance.inputData = row;
        modalRef.result.then(function (result) {
            _this._success.next("Successfully Deleted");
            _this.getProducts();
        });
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.isLoading = true;
        this.rest.getProducts().subscribe(function (response) {
            _this.isLoading = false;
            _this.products = response.json().data;
            _this.temp = response.json().data;
            console.log(_this.products);
        }, function (error) {
            _this.isLoading = false;
        });
    };
    var ProductsComponent_1;
    __decorate([
        core_1.ViewChild(ProductsComponent_1),
        __metadata("design:type", ProductsComponent)
    ], ProductsComponent.prototype, "table", void 0);
    ProductsComponent = ProductsComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.css']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            rest_service_1.RestService])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
var ViewProductModalContent = /** @class */ (function () {
    function ViewProductModalContent(activeModal, rest) {
        this.activeModal = activeModal;
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
    ViewProductModalContent.prototype.ngOnInit = function () {
        console.log(this.inputData);
    };
    ViewProductModalContent.prototype.delete = function () {
        var _this = this;
        this.processing = true;
        this.rest.deleteProduct(this.inputData)
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
    ], ViewProductModalContent.prototype, "name", void 0);
    ViewProductModalContent = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\"  *ngIf=\"inputData && inputData.name\">\n      <h4 class=\"modal-title\">{{ inputData.name }}</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\"  *ngIf=\"inputData && inputData.name\">  \n      <p><span class=\"lbl\">Name:</span> {{ inputData.name }}</p>\n      <p><span class=\"lbl\">Manufacturer:</span> {{ inputData.manufacturer.name }}</p>\n      <p><span class=\"lbl\">Price:</span> {{ inputData.price }}</p>\n      <p><span class=\"lbl\">SKU:</span> {{ inputData.sku }}</p>\n      <p><span class=\"lbl\">Weight:</span> {{ inputData.weight }}</p>\n      <p><span class=\"lbl\">FDA:</span> {{ inputData.fda }}</p>\n      <p *ngIf=\"inputData.notes\"><span class=\"lbl\">Notes:</span> {{ inputData.notes }}</p>\n      <p *ngIf=\"inputData.tags\"><span class=\"lbl\">Tags:</span> {{ inputData.tags }}</p>\n      <p><span class=\"lbl\">Date Created:</span> {{ inputData.created_at }}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.dismiss()\">Close</button>\n    </div>\n    <style>\n      .lbl{\n        font-weight: bold;\n        display: inline-block;\n        width: 30%;\n      }\n    </style>\n  "
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal, rest_service_1.RestService])
    ], ViewProductModalContent);
    return ViewProductModalContent;
}());
exports.ViewProductModalContent = ViewProductModalContent;
var EditProductModalContent = /** @class */ (function () {
    function EditProductModalContent(activeModal, formBuilder, rest) {
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
    EditProductModalContent.prototype.ngOnInit = function () {
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
    EditProductModalContent.prototype.onSubmit = function () {
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
    Object.defineProperty(EditProductModalContent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.dataForm.controls; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditProductModalContent.prototype, "name", void 0);
    EditProductModalContent = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Edit Content</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">  \n            <ngb-alert *ngIf=\"successMessage\"  [type]=\"messageType\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\n\n        <form [formGroup]=\"dataForm\" class=\"form-horizontal m-t-25\" id=\"signupform\" (ngSubmit)=\"onSubmit()\">                  \n\n              <div class=\"form-group row \">\n                  <div class=\"col-12 \">\n                      <label>Name</label>\n                      <input formControlName=\"name\" [(ngModel)]=\"inputData.name\" class=\"form-control form-control-lg\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" type=\"text\" required=\" \" placeholder=\"Name of Product (required)\">\n                  </div>\n                  <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.name.errors.required\">Name is required</div>\n                  </div>\n              </div>\n              <div class=\"form-group row \">\n                  <div class=\"col-6\">\n                    <div class=\"col-12 \">\n                        <label>Price</label>\n                        <input formControlName=\"price\" [(ngModel)]=\"inputData.price\" class=\"form-control form-control-lg\" [ngClass]=\"{ 'is-invalid': submitted && f.price.errors }\" type=\"text\" required=\" \" placeholder=\"Price (required)\">\n                    </div>\n                    <div *ngIf=\"submitted && f.price.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.price.errors.required\">Price is required</div>\n                    </div>\n                </div>\n                  <div class=\"col-6\">\n                    <div class=\"col-12 \">\n                        <label>Weight</label>\n                        <input formControlName=\"weight\" [(ngModel)]=\"inputData.weight\" class=\"form-control form-control-lg\" [ngClass]=\"{ 'is-invalid': submitted && f.weight.errors }\" type=\"text\" required=\" \" placeholder=\"Weight (required)\">\n                    </div>\n                    <div *ngIf=\"submitted && f.weight.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.weight.errors.required\">Weight is required</div>\n                    </div>\n                </div>\n              </div>\n              <div class=\"form-group row \">\n                  <div class=\"col-6\">\n                      <div class=\"col-12 \">\n                        <label>SKU</label>\n                          <input formControlName=\"sku\" [(ngModel)]=\"inputData.sku\" class=\"form-control form-control-lg\" [ngClass]=\"{ 'is-invalid': submitted && f.sku.errors }\" type=\"text\" required=\" \" placeholder=\"SKU (required)\">\n                      </div>\n                      <div *ngIf=\"submitted && f.sku.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.sku.errors.required\">SKU is required</div>\n                      </div>\n                  </div>\n                  <div class=\"col-6\">\n                      <div class=\"col-12 \">\n                        <label>FDA</label>\n                          <input formControlName=\"fda\" [(ngModel)]=\"inputData.fda\" class=\"form-control form-control-lg\" [ngClass]=\"{ 'is-invalid': submitted && f.fda.errors }\" type=\"text\" required=\" \" placeholder=\"FDA (required)\">\n                      </div>\n                      <div *ngIf=\"submitted && f.sku.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.fda.errors.required\">FDA is required</div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"form-group row \">\n                  <div class=\"col-12 \">\n                        <label>Notes</label>\n                    <textarea formControlName=\"notes\" [(ngModel)]=\"inputData.notes\" class=\"form-control form-control-lg\" [ngClass]=\"{ 'is-invalid': submitted && f.notes.errors }\" placeholder=\"Description\"></textarea>\n                  </div>\n              </div>\n              <div class=\"form-group row \">\n                  <div class=\"col-12 \">\n                        <label>Tags</label>\n                      <input formControlName=\"tags\" [(ngModel)]=\"inputData.tags\" class=\"form-control form-control-lg\" type=\"text\" placeholder=\"tags (comma seperated)\">\n                  </div>\n              </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onSubmit()\" [disabled]=\"processing\">                       \n        <img *ngIf=\"processing\" class=\"pl-2\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        Submit\n      </button>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
            forms_1.FormBuilder, rest_service_1.RestService])
    ], EditProductModalContent);
    return EditProductModalContent;
}());
exports.EditProductModalContent = EditProductModalContent;
var DeleteProductModalContent = /** @class */ (function () {
    function DeleteProductModalContent(activeModal, formBuilder, rest) {
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
    DeleteProductModalContent.prototype.ngOnInit = function () {
    };
    DeleteProductModalContent.prototype.delete = function () {
        var _this = this;
        this.processing = true;
        this.rest.deleteProduct(this.inputData)
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
    ], DeleteProductModalContent.prototype, "name", void 0);
    DeleteProductModalContent = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Delete Content</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">  \n      <p>Are you sure ?</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"delete()\">Delete</button>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal, forms_1.FormBuilder, rest_service_1.RestService])
    ], DeleteProductModalContent);
    return DeleteProductModalContent;
}());
exports.DeleteProductModalContent = DeleteProductModalContent;
//# sourceMappingURL=products.component.js.map