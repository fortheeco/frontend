"use strict";
/// <reference types="@types/googlemaps" />
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
var _services_1 = require("../../_services");
var rest_service_1 = require("../../_services/rest.service");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var forms_2 = require("@angular/forms");
var core_2 = require("@agm/core");
var RequestDeliveryComponent = /** @class */ (function () {
    function RequestDeliveryComponent(rest, formBuilder, mapsAPILoader, ngZone, authenticationService) {
        var _this = this;
        this.rest = rest;
        this.formBuilder = formBuilder;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.loadingBatches = false;
        this.submitted = false;
        this.submitted2 = false;
        this.error = '';
        this.processing = false;
        this.inputData = {
            agent_id: "",
            requested_to: "",
            delivery_address: "",
            delivery_phone_no: "",
            type: "1"
        };
        this.inputData2 = {
            product_id: "",
            batch_id: "",
            quantity: "",
            product_name: "",
            batch_code: "",
            per_box: "",
            boxes: [],
        };
        // End the Closeable Alert
        // This is for the self closing alert
        this._message = new rxjs_1.Subject();
        this.staticAlertClosed = false;
        this.selectedProducts = [];
        // pattern for email validatiom
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        // set up Alert
        setTimeout(function () { return (_this.staticAlertClosed = true); }, 20000);
        this._message.subscribe(function (message) { return (_this.responseMessage = message); });
        this._message.pipe(operators_1.debounceTime(5000)).subscribe(function () { return (_this.responseMessage = null); });
    }
    RequestDeliveryComponent.prototype.ngOnInit = function () {
        this.initMap();
        this.getAgents();
        this.getProducts();
        this.getMiddlemen();
        // Initialize form with Validation rules
        this.dataForm = this.formBuilder.group({
            agent_id: ['', forms_1.Validators.required],
            delivery_address: ['', forms_1.Validators.required],
            delivery_phone_no: [''],
        });
        // Initialize form with Validation rules
        this.dataForm2 = this.formBuilder.group({
            product_id: ['', forms_1.Validators.required],
            batch_id: ['', forms_1.Validators.required],
            quantity: ['', forms_1.Validators.required],
            per_box: ['', forms_1.Validators.required],
        });
    };
    RequestDeliveryComponent.prototype.initMap = function () {
        var _this = this;
        //create search FormControl
        this.delivery_address = new forms_2.FormControl();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 14;
                });
            });
        });
    };
    Object.defineProperty(RequestDeliveryComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.dataForm.controls; },
        enumerable: true,
        configurable: true
    });
    RequestDeliveryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.dataForm.invalid)
            return;
        if (this.selectedProducts.length < 1)
            return;
        console.log(this.inputData);
        var d = { detail: this.inputData, products: this.selectedProducts };
        this.processing = true;
        this.rest.requestDelivery(d)
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
                _this.latitude = undefined;
                _this.longitude = undefined;
                _this.selectedProducts = [];
                _this.inputData = {
                    agent_id: "",
                    requested_to: "",
                    delivery_address: "",
                    delivery_phone_no: "",
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
    RequestDeliveryComponent.prototype.onSubmit2 = function () {
        this.submitted2 = true;
        // stop here if form is invalid
        if (this.dataForm2.invalid) {
            return;
        }
        console.log(this.selectedProducts);
        this.inputData2.batch_code = this.filterBatches(this.inputData2.batch_id).batch_code;
        this.inputData2.product_name = this.filterProducts(this.inputData2.product_id).name;
        this.inputData2.boxes = this.generateBoxes();
        console.log(this.inputData2);
        this.selectedProducts.push(this.inputData2);
        this.submitted2 = false;
        this.inputData2 = {
            product_id: "",
            batch_id: "",
            quantity: "",
            product_name: "",
            per_box: "",
            batch_code: "",
            boxes: []
        };
    };
    RequestDeliveryComponent.prototype.returnNumberOfBoxes = function (x, y) {
        x = parseInt(x);
        y = parseInt(y);
        return Math.floor(x / y);
    };
    RequestDeliveryComponent.prototype.returnNumberOfBoxesRemainders = function (x, y) {
        x = parseInt(x);
        y = parseInt(y);
        return x % y;
    };
    RequestDeliveryComponent.prototype.generateBoxes = function () {
        var boxes_num = this.returnNumberOfBoxes(this.inputData2.quantity, this.inputData2.per_box);
        var boxes_rem = this.returnNumberOfBoxesRemainders(this.inputData2.quantity, this.inputData2.per_box);
        var boxes = [];
        for (var i = 1; i <= boxes_num; i++) {
            var b = { 'quantity': this.inputData2.per_box };
            boxes.push(b);
        }
        var d = { 'quantity': boxes_rem };
        if (boxes_rem > 0)
            boxes.push(d);
        return boxes;
    };
    RequestDeliveryComponent.prototype.removeSelected = function (i) {
        this.selectedProducts.splice(i, 1);
    };
    RequestDeliveryComponent.prototype.filterProducts = function (val) {
        // filter our data
        var temp = this.products.filter(function (d) {
            return d.id == val || !val;
        });
        return temp['0'];
    };
    RequestDeliveryComponent.prototype.filterBatches = function (val) {
        // filter our data
        var temp = this.productsBatches.filter(function (d) {
            return d.id == val || !val;
        });
        return temp['0'];
    };
    RequestDeliveryComponent.prototype.getProducts = function () {
        var _this = this;
        this.rest.getProducts().subscribe(function (response) {
            _this.products = response.json().data;
            console.log(_this.products);
        }, function (error) {
        });
    };
    RequestDeliveryComponent.prototype.getAgents = function () {
        var _this = this;
        this.rest.getAgents().subscribe(function (response) {
            _this.agents = response.json().data;
            console.log(_this.agents);
        }, function (error) {
        });
    };
    RequestDeliveryComponent.prototype.loadProductBatches = function () {
        var _this = this;
        // console.log(this.inputData.product_id)
        var data = { product_id: this.inputData2.product_id };
        if (this.inputData2.product_id) {
            this.loadingBatches = true;
            this.rest.getProductBatches(data).subscribe(function (response) {
                _this.loadingBatches = false;
                _this.productsBatches = response.json().data;
            }, function (error) {
                _this.loadingBatches = false;
            });
        }
    };
    RequestDeliveryComponent.prototype.getMiddlemen = function () {
        var _this = this;
        this.rest.getMiddlemen().subscribe(function (response) {
            _this.middlemen = response.json().data;
            console.log(_this.middlemen);
        }, function (error) {
        });
    };
    Object.defineProperty(RequestDeliveryComponent.prototype, "g", {
        get: function () { return this.dataForm2.controls; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild("search"),
        __metadata("design:type", core_1.ElementRef)
    ], RequestDeliveryComponent.prototype, "searchElementRef", void 0);
    RequestDeliveryComponent = __decorate([
        core_1.Component({
            selector: 'app-request-delivery',
            templateUrl: './request-delivery.component.html',
            styleUrls: ['./request-delivery.component.css']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService,
            forms_1.FormBuilder,
            core_2.MapsAPILoader,
            core_1.NgZone,
            _services_1.AuthenticationService])
    ], RequestDeliveryComponent);
    return RequestDeliveryComponent;
}());
exports.RequestDeliveryComponent = RequestDeliveryComponent;
//# sourceMappingURL=request-delivery.component.js.map