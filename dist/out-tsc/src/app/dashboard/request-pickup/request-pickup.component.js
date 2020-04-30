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
var RequestPickupComponent = /** @class */ (function () {
    function RequestPickupComponent(rest, formBuilder, route, router, authenticationService) {
        var _this = this;
        this.rest = rest;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.loadingBatches = false;
        this.submitted = false;
        this.error = '';
        this.processing = false;
        this.inputData = {
            product_id: "",
            batch_id: "",
            requested_to: "",
            quantity: "",
            type: "1"
        };
        // End the Closeable Alert
        // This is for the self closing alert
        this._message = new rxjs_1.Subject();
        this.staticAlertClosed = false;
        // pattern for email validatiom
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        // set up Alert
        setTimeout(function () { return (_this.staticAlertClosed = true); }, 20000);
        this._message.subscribe(function (message) { return (_this.responseMessage = message); });
        this._message.pipe(operators_1.debounceTime(5000)).subscribe(function () { return (_this.responseMessage = null); });
        console.log(this.authenticationService.currentUserValue);
        if (this.authenticationService.currentUserValue.user.role == 'middleman') {
            this.inputData.type = '2';
            this.getMiddlemanAssignment();
        }
        else {
            this.inputData.type = '1';
            this.getMiddlemen();
        }
    }
    RequestPickupComponent.prototype.ngOnInit = function () {
        this.getProducts();
        // Initialize form with Validation rules
        this.dataForm = this.formBuilder.group({
            product_id: ['', forms_1.Validators.required],
            batch_id: ['', forms_1.Validators.required],
            quantity: ['', forms_1.Validators.required],
            requested_to: ['', forms_1.Validators.required]
        });
    };
    Object.defineProperty(RequestPickupComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.dataForm.controls; },
        enumerable: true,
        configurable: true
    });
    RequestPickupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.dataForm.invalid) {
            return;
        }
        console.log(this.inputData);
        this.processing = true;
        this.rest.requestPickup(this.inputData)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            // send alert
            _this._message.next("" + data.message);
            _this.submitted = false;
            _this.processing = false;
            if (data.status == "00") {
                _this.messageType = 'success';
                _this._message.next("" + data.message);
                _this.inputData = {
                    product_id: "",
                    batch_id: "",
                    requested_to: "",
                    quantity: "",
                    type: "1"
                };
            }
            else {
                data.message = _this.rest.processErrorMessages(data.message);
                _this.messageType = 'danger';
                _this._message.next("" + data.message);
            }
        }, function (error) {
            console.log(error);
            _this.error = error;
            _this.loading = false;
            _this.processing = false;
        });
    };
    RequestPickupComponent.prototype.getProducts = function () {
        var _this = this;
        this.rest.getProducts().subscribe(function (response) {
            _this.products = response.json().data;
            console.log(_this.products);
        }, function (error) {
        });
    };
    RequestPickupComponent.prototype.getManufacturerProducts = function (id) {
        var _this = this;
        this.rest.getmManufacturerProducts(id).subscribe(function (response) {
            _this.products = response.json().data;
            console.log(_this.products);
        }, function (error) {
        });
    };
    RequestPickupComponent.prototype.loadProductBatches = function () {
        var _this = this;
        // console.log(this.inputData.product_id)
        var data = { product_id: this.inputData.product_id };
        if (this.inputData.product_id) {
            this.loadingBatches = true;
            this.rest.getProductBatches(data).subscribe(function (response) {
                _this.loadingBatches = false;
                _this.productsBatches = response.json().data;
            }, function (error) {
                _this.loadingBatches = false;
            });
        }
    };
    RequestPickupComponent.prototype.getMiddlemen = function () {
        var _this = this;
        this.rest.getMiddlemen().subscribe(function (response) {
            _this.middlemen = response.json().data;
            console.log(_this.middlemen);
        }, function (error) {
        });
    };
    RequestPickupComponent.prototype.getMiddlemanAssignment = function () {
        var _this = this;
        this.rest.getMiddlemanAssignment().subscribe(function (response) {
            _this.manufacturers = response.json().data;
            console.log(_this.manufacturers);
        }, function (error) {
        });
    };
    RequestPickupComponent = __decorate([
        core_1.Component({
            selector: 'app-request-pickup',
            templateUrl: './request-pickup.component.html',
            styleUrls: ['./request-pickup.component.css']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService,
            forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            _services_1.AuthenticationService])
    ], RequestPickupComponent);
    return RequestPickupComponent;
}());
exports.RequestPickupComponent = RequestPickupComponent;
//# sourceMappingURL=request-pickup.component.js.map