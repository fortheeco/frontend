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
var _services_1 = require("../../_services");
var rest_service_1 = require("../../_services/rest.service");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var AddproductbatchComponent = /** @class */ (function () {
    function AddproductbatchComponent(_loadingBar, rest, formBuilder, route, router, authenticationService) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this.rest = rest;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.processing = false;
        this.inputData = {
            expiry_date: "",
            manufacture_date: "",
            note: "",
            product_id: "",
            quantity: "",
        };
        // End the Closeable Alert
        // This is for the self closing alert
        this._message = new rxjs_1.Subject();
        this.staticAlertClosed = false;
        // set up Alert
        setTimeout(function () { return (_this.staticAlertClosed = true); }, 20000);
        this._message.subscribe(function (message) { return (_this.responseMessage = message); });
        this._message.pipe(operators_1.debounceTime(5000)).subscribe(function () { return (_this.responseMessage = null); });
    }
    AddproductbatchComponent.prototype.ngOnInit = function () {
        // Initialize form with Validation rules
        this.dataForm = this.formBuilder.group({
            expiry_date: ['', forms_1.Validators.required],
            manufacture_date: ['', forms_1.Validators.required],
            note: [''],
            product_id: ['', forms_1.Validators.required],
            quantity: ['', forms_1.Validators.required],
        });
        this.getProducts();
    };
    AddproductbatchComponent.prototype.getProducts = function () {
        var _this = this;
        this._loadingBar.start();
        this.rest.getProducts().subscribe(function (response) {
            _this._loadingBar.complete();
            _this.products = response.json().data;
            console.log(_this.products);
        }, function (error) {
            _this._loadingBar.complete();
        });
    };
    Object.defineProperty(AddproductbatchComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.dataForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddproductbatchComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.parseDate('8/4/2019'));
        // console.log(this.inputData.manufacture_date);
        this.submitted = true;
        // stop here if form is invalid
        if (this.dataForm.invalid) {
            return;
        }
        // format date before sending
        this.inputData.manufacture_date = this.format(this.inputData.manufacture_date);
        this.inputData.expiry_date = this.format(this.inputData.expiry_date);
        this.processing = true;
        this.rest.addProductBatch(this.inputData)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            // send alert
            _this._message.next("" + data.message);
            _this.submitted = false;
            _this.processing = false;
            _this.inputData = {
                expiry_date: "",
                manufacture_date: "",
                note: "",
                product_id: "",
                quantity: "",
            };
        }, function (error) {
            // this.inputData.manufacture_date = this.parseDate(this.inputData.manufacture_date);
            // this.inputData.expiry_date = this.parseDate(this.inputData.expiry_date);
            console.log(error);
            _this.error = error;
            _this.loading = false;
            _this.processing = false;
        });
    };
    AddproductbatchComponent.prototype.parseDate = function (value) {
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
    AddproductbatchComponent.prototype.isNumber = function (value) {
        return !isNaN(this.toInteger(value));
    };
    AddproductbatchComponent.prototype.isInteger = function (value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    };
    AddproductbatchComponent.prototype.toInteger = function (value) {
        return parseInt("" + value, 10);
    };
    // format date from bootstrap date plugin
    AddproductbatchComponent.prototype.format = function (str) {
        return str.day + "/" + str.month + "/" + str.year;
    };
    AddproductbatchComponent = __decorate([
        core_1.Component({
            selector: 'app-addproductbatch',
            templateUrl: './addproductbatch.component.html',
            styleUrls: ['./addproductbatch.component.css']
        }),
        __metadata("design:paramtypes", [ng2_slim_loading_bar_1.SlimLoadingBarService,
            rest_service_1.RestService,
            forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            _services_1.AuthenticationService])
    ], AddproductbatchComponent);
    return AddproductbatchComponent;
}());
exports.AddproductbatchComponent = AddproductbatchComponent;
//# sourceMappingURL=addproductbatch.component.js.map