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
var ProductbatchesComponent = /** @class */ (function () {
    function ProductbatchesComponent(modalService, rest, formBuilder, route, router, authenticationService) {
        var _this = this;
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
    ProductbatchesComponent_1 = ProductbatchesComponent;
    ProductbatchesComponent.prototype.ngOnInit = function () {
        this.getBatches();
    };
    ProductbatchesComponent.prototype.view = function (row) {
        var modalRef = null;
        modalRef = this.modalService.open(ViewProductBatchModalContent);
        modalRef.componentInstance.inputData = row;
    };
    ProductbatchesComponent.prototype.viewQr = function (row) {
        var modalRef = null;
        modalRef = this.modalService.open(ProductBatchQRModalContent, { centered: true, size: 'lg' });
        modalRef.componentInstance.inputData = row;
    };
    ProductbatchesComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.batch_code.toLowerCase().indexOf(val) !== -1 || !val || d.batch_code.toLowerCase().indexOf(val) !== -1 || !val || d.expiry_date.toLowerCase().indexOf(val) !== -1 || !val || d.manufacture_date.toLowerCase().indexOf(val) !== -1 || !val;
            // return d.product.name.toLowerCase().indexOf(val) !== -1 || !val || d.batch_code.toLowerCase().indexOf(val) !== -1 || !val  || d.quantity.toLowerCase().indexOf(val) !== -1 || !val  || d.expiry_date.toLowerCase().indexOf(val) !== -1 || !val   || d.manufacture_date.toLowerCase().indexOf(val) !== -1 || !val ;
        });
        // update the rows
        this.batches = temp;
        // Whenever the filter changes, always go back to the first page
        this.table = this.batches;
    };
    ProductbatchesComponent.prototype.edit = function (row) {
        var _this = this;
        var modalRef = this.modalService.open(EditProductBatchModalContent);
        modalRef.componentInstance.inputData = row;
        modalRef.result.then(function (result) {
            _this.getBatches();
        });
    };
    ProductbatchesComponent.prototype.delete = function (row) {
        var _this = this;
        var modalRef = this.modalService.open(DeleteProductBatchModalContent);
        modalRef.componentInstance.inputData = row;
        modalRef.result.then(function (result) {
            _this._success.next("Successfully Deleted");
            _this.getBatches();
        });
    };
    ProductbatchesComponent.prototype.getBatches = function () {
        var _this = this;
        this.isLoading = true;
        this.rest.getProductBatches(null).subscribe(function (response) {
            _this.isLoading = false;
            _this.batches = response.json().data;
            _this.temp = response.json().data;
            console.log(_this.batches);
        }, function (error) {
            _this.isLoading = false;
        });
    };
    var ProductbatchesComponent_1;
    __decorate([
        core_1.ViewChild(ProductbatchesComponent_1),
        __metadata("design:type", ProductbatchesComponent)
    ], ProductbatchesComponent.prototype, "table", void 0);
    ProductbatchesComponent = ProductbatchesComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-productbatches',
            templateUrl: './productbatches.component.html',
            styleUrls: ['./productbatches.component.css']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            rest_service_1.RestService,
            forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            _services_1.AuthenticationService])
    ], ProductbatchesComponent);
    return ProductbatchesComponent;
}());
exports.ProductbatchesComponent = ProductbatchesComponent;
var ViewProductBatchModalContent = /** @class */ (function () {
    function ViewProductBatchModalContent(activeModal, formBuilder, rest) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.rest = rest;
        this.qrData = { qr_type: "", data: {} };
        this.qrStr = "";
        // End the Closeable Alert
        // This is for the self closing alert
        this._success = new rxjs_1.Subject();
        this.staticAlertClosed = false;
    }
    ViewProductBatchModalContent.prototype.ngOnInit = function () {
        this.qrData.qr_type = "productBatch";
        this.qrData.data = this.inputData;
        this.qrStr = JSON.stringify(this.qrData);
        console.log(this.qrStr);
    };
    ViewProductBatchModalContent = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-content',
            template: "\n  <div class=\"modal-header\"  *ngIf=\"inputData\">\n    <h4 class=\"modal-title\">{{ inputData.product.name }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\"  *ngIf=\"inputData\">  \n    <p><span class=\"lbl\">Name:</span> {{ inputData.product.name }}</p>\n    <p><span class=\"lbl\">Batch Code:</span> {{ inputData.batch_code }}</p>\n    <p><span class=\"lbl\">Quantity:</span> {{ inputData.quantity }}</p>\n    <p><span class=\"lbl\">Manufacture Date:</span> {{ inputData.manufacture_date }}</p>\n    <p><span class=\"lbl\">Expiry Date:</span> {{ inputData.expiry_date }}</p>\n    <p *ngIf=\"inputData.note\"><span class=\"lbl\">Notes:</span> {{ inputData.note }}</p>\n    <p><span class=\"lbl\">Date Created:</span> {{ inputData.created_at }}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.dismiss()\">Close</button>\n  </div>\n  <style>\n    .lbl{\n      font-weight: bold;\n      display: inline-block;\n      width: 30%;\n    }\n  </style>\n  "
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal, forms_1.FormBuilder, rest_service_1.RestService])
    ], ViewProductBatchModalContent);
    return ViewProductBatchModalContent;
}());
exports.ViewProductBatchModalContent = ViewProductBatchModalContent;
var EditProductBatchModalContent = /** @class */ (function () {
    function EditProductBatchModalContent(activeModal, formBuilder, rest) {
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
    EditProductBatchModalContent.prototype.ngOnInit = function () {
        if (this.inputData.manufacture_date)
            this.inputData.manufacture_date = this.parseDate(this.inputData.manufacture_date);
        if (this.inputData.expiry_date)
            this.inputData.expiry_date = this.parseDate(this.inputData.expiry_date);
        console.log(this.inputData);
        this.dataForm = this.formBuilder.group({
            expiry_date: ['', forms_1.Validators.required],
            manufacture_date: ['', forms_1.Validators.required],
            note: [''],
            quantity: ['', forms_1.Validators.required],
        });
    };
    EditProductBatchModalContent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.dataForm);
        console.log(this.inputData);
        // stop here if form is invalid
        if (this.dataForm.invalid) {
            return;
        }
        console.log(this.inputData);
        // format date before sending
        this.inputData.manufacture_date = this.format(this.inputData.manufacture_date);
        this.inputData.expiry_date = this.format(this.inputData.expiry_date);
        this.processing = true;
        this.rest.updateProductBatch(this.inputData)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.inputData.manufacture_date = _this.parseDate(_this.inputData.manufacture_date);
            _this.inputData.expiry_date = _this.parseDate(_this.inputData.expiry_date);
            _this._success.next("" + data.message);
            _this.submitted = false;
            _this.processing = false;
            // this.router.navigate(['/authentication/login']);
        }, function (error) {
            console.log(error);
            _this.error = error;
            _this.loading = false;
            _this.processing = false;
        });
    };
    EditProductBatchModalContent.prototype.parseDate = function (value) {
        if (value) {
            var dateParts = value.trim().split('/');
            if (dateParts.length === 1 && this.isNumber(dateParts[0])) {
                return { day: this.toInteger(dateParts[0]), month: null, year: null };
            }
            else if (dateParts.length === 2 && this.isNumber(dateParts[0]) && this.isNumber(dateParts[1])) {
                return { day: this.toInteger(dateParts[0]), month: this.toInteger(dateParts[1]), year: null };
            }
            else if (dateParts.length === 3 && this.isNumber(dateParts[0]) && this.isNumber(dateParts[1]) && this.isNumber(dateParts[2])) {
                return { day: this.toInteger(dateParts[0]), month: this.toInteger(dateParts[1]), year: this.toInteger(dateParts[2]) };
            }
        }
        return null;
    };
    /*
        functions for date parsing

    */
    EditProductBatchModalContent.prototype.isNumber = function (value) {
        return !isNaN(this.toInteger(value));
    };
    EditProductBatchModalContent.prototype.isInteger = function (value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    };
    EditProductBatchModalContent.prototype.toInteger = function (value) {
        return parseInt("" + value, 10);
    };
    // format date from bootstrap date plugin
    EditProductBatchModalContent.prototype.format = function (str) {
        return str.day + "/" + str.month + "/" + str.year;
    };
    Object.defineProperty(EditProductBatchModalContent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.dataForm.controls; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditProductBatchModalContent.prototype, "name", void 0);
    EditProductBatchModalContent = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Edit Content</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">  \n            <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\n   \n\n            <form [formGroup]=\"dataForm\" class=\"form-horizontal m-t-25\" id=\"signupform\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group row \">\n                    <div class=\"col-4\">\n                        <div class=\"col-12 \">\n\t                        <label class=\"block_label\" for=\"d\">Quantity (required)</label>\n                            <input formControlName=\"quantity\" [(ngModel)]=\"inputData.quantity\" class=\"form-control form-control-lg\" [ngClass]=\"{ 'is-invalid': submitted && f.quantity.errors }\" type=\"number\" required=\" \" placeholder=\"Input quantity\">\n                        </div>\n                        <div *ngIf=\"submitted && f.quantity.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.quantity.errors.required\">quantity is required</div>\n                        </div>\n                    </div>\n                </div>\n                \n\t\t\t\t<div class=\"form-group row\">\n                    <div class=\"col-6\">\n                        <label class=\"block_label\" for=\"d\">Select Manufacture Date (required)</label>\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<input formControlName=\"manufacture_date\" class=\"form-control\" (click)=\"d.toggle()\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t name=\"dp\" [ngClass]=\"{ 'is-invalid': submitted && f.manufacture_date.errors }\"  [(ngModel)]=\"inputData.manufacture_date\" ngbDatepicker #d=\"ngbDatepicker\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                        <div *ngIf=\"submitted && f.manufacture_date.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"!inputData.manufacture_date.errors\">manufacture date is required</div>\n                        </div>\n\t\t\t\t\t</div>\n                    <div class=\"col-6\">\n                        <label class=\"block_label\" for=\"d2\">Select Expiry Date (required)</label>\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<input formControlName=\"expiry_date\" class=\"form-control\" (click)=\"d2.toggle()\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t name=\"dp\" [ngClass]=\"{ 'is-invalid': submitted && f.expiry_date.errors }\"  [(ngModel)]=\"inputData.expiry_date\" ngbDatepicker #d2=\"ngbDatepicker\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-secondary\" (click)=\"d2.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                        <div *ngIf=\"submitted && f.expiry_date.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"!inputData.expiry_date.errors\">expiry date is required</div>\n                        </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"form-group row \">\n                    <div class=\"col-12 \">\n                    \t<textarea formControlName=\"note\" [(ngModel)]=\"inputData.note\" class=\"form-control form-control-lg\" [ngClass]=\"{ 'is-invalid': submitted && f.note.errors }\" placeholder=\"Notes\"></textarea>\n                    </div>\n                </div>\n            </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onSubmit()\" [disabled]=\"processing\">                       \n        <img *ngIf=\"processing\" class=\"pl-2\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        Submit\n      </button>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n    <style>\n    \t.block_label{\n\t\t\tdisplay: block !important;\n\t\t}\n\n\t\t.invalid-feedback {\n\t\t    color: red !important;\n\t\t    display: block;\n\t\t    padding-left: 5%;\n\t\t}\n    </style>\n  "
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
            forms_1.FormBuilder, rest_service_1.RestService])
    ], EditProductBatchModalContent);
    return EditProductBatchModalContent;
}());
exports.EditProductBatchModalContent = EditProductBatchModalContent;
var DeleteProductBatchModalContent = /** @class */ (function () {
    function DeleteProductBatchModalContent(activeModal, formBuilder, rest) {
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
    DeleteProductBatchModalContent.prototype.ngOnInit = function () {
    };
    DeleteProductBatchModalContent.prototype.delete = function () {
        var _this = this;
        this.processing = true;
        this.rest.deleteProductBatch(this.inputData)
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
    ], DeleteProductBatchModalContent.prototype, "name", void 0);
    DeleteProductBatchModalContent = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Delete Content</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">  \n      <p>Are you sure ?</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"delete()\">Delete</button>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal, forms_1.FormBuilder, rest_service_1.RestService])
    ], DeleteProductBatchModalContent);
    return DeleteProductBatchModalContent;
}());
exports.DeleteProductBatchModalContent = DeleteProductBatchModalContent;
var ProductBatchQRModalContent = /** @class */ (function () {
    function ProductBatchQRModalContent(activeModal, formBuilder, rest) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.rest = rest;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.processing = false;
        this.perPage = 8;
        this.RepeatArr = Array;
        // End the Closeable Alert
        // This is for the self closing alert
        this._success = new rxjs_1.Subject();
        this.staticAlertClosed = false;
    }
    ProductBatchQRModalContent.prototype.ngOnInit = function () {
    };
    ProductBatchQRModalContent.prototype.delete = function () {
        var _this = this;
        this.processing = true;
        this.rest.deleteProductBatch(this.inputData)
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
    ], ProductBatchQRModalContent.prototype, "name", void 0);
    ProductBatchQRModalContent = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-content',
            template: "\n  <div class=\"modal-header\"  *ngIf=\"inputData\">\n    <h4 class=\"modal-title\">QR for batch {{ inputData.batch_code }}</h4>\n    <!-- \n    <label for=\"inlineFormCustomSelect\">Per Page</label>\n    <select [(ngModel)]=\"perPage\" class=\"custom-select col-md-2\" id=\"inlineFormCustomSelect\">\n      <option value=\"1\">1</option>\n      <option value=\"4\">4</option>\n      <option value=\"8\">8</option>\n    </select>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    -->\n  </div>\n  <div class=\"modal-body\"  *ngIf=\"inputData\"> \n    <div class=\"row\" id=\"print-section\">\n      <div style=\"margin-bottom: 15px; margin-left:auto; margin-right:auto;\">\n        <qrcode style=\"margin-left:auto; margin-right:auto;\" [qrdata]=\"'Your QR code data string'\" [size]=\"256\" [level]=\"'M'\"></qrcode>\n      </div>\n    </div>\n    <!--  \n      <h4 style=\"text-align:center; margin-bottom: 30px\">QR for Batch {{ inputData.batch_code }}</h4> \n      <div class=\"row\" id=\"print-section\"   style=\"width: 960px;\">\n        <div *ngFor=\"let i of RepeatArr(perPage).fill(1)\"  style=\"width: 200px; margin-bottom: 15px;\">\n          <qrcode [qrdata]=\"'Your QR code data string'\" [size]=\"128\" [level]=\"'M'\"></qrcode>\n        </div>\n      </div>\n    -->\n  </div>\n  <div class=\"modal-footer\">\n    <button printSectionId=\"print-section\" class=\"btn btn-outline-success\" ngxPrint><i class=\"mdi mdi-printer\"></i> Print</button> \n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.dismiss()\">Close</button>\n  </div>\n  <style>\n    .lbl{\n      font-weight: bold;\n      display: inline-block;\n      width: 30%;\n    }\n    @media print {\n      .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n           float: left;\n      }\n      .col-sm-12 {\n           width: 100%;\n      }\n      .col-sm-11 {\n           width: 91.66666667%;\n      }\n      .col-sm-10 {\n           width: 83.33333333%;\n      }\n      .col-sm-9 {\n           width: 75%;\n      }\n      .col-sm-8 {\n           width: 66.66666667%;\n      }\n      .col-sm-7 {\n           width: 58.33333333%;\n      }\n      .col-sm-6 {\n           width: 50%;\n      }\n      .col-sm-5 {\n           width: 41.66666667%;\n      }\n      .col-sm-4 {\n           width: 33.33333333%;\n      }\n      .col-sm-3 {\n           width: 25%;\n      }\n      .col-sm-2 {\n           width: 16.66666667%;\n      }\n      .col-sm-1 {\n           width: 8.33333333%;\n      }\n   }\n    </style>\n  "
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal, forms_1.FormBuilder, rest_service_1.RestService])
    ], ProductBatchQRModalContent);
    return ProductBatchQRModalContent;
}());
exports.ProductBatchQRModalContent = ProductBatchQRModalContent;
//# sourceMappingURL=productbatches.component.js.map