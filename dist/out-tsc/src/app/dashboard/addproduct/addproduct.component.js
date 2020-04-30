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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
var ngx_papaparse_1 = require("ngx-papaparse");
var AddproductComponent = /** @class */ (function () {
    function AddproductComponent(rest, papa, formBuilder, route, router, authenticationService) {
        var _this = this;
        this.rest = rest;
        this.papa = papa;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.processing = false;
        this.uploadingCSV = false;
        this.inputData = {
            name: "",
            fda: "",
            price: "",
            notes: "",
            unit: "",
            unit_amount: "",
            sku: "",
            tags: "",
        };
        // inputData = {
        // 	name: "Sprite",
        // 	fda: "B1-2230",
        // 	price: "100",
        // 	notes: "Very Awesome",
        // 	weight: "300",
        // 	sku: "sp309",
        // 	tags: "",
        // };
        // End the Closeable Alert
        // This is for the self closing alert
        this._message = new rxjs_1.Subject();
        this.isCSV_Valid = false;
        this.staticAlertClosed = false;
        this.uploadSuccess = false;
        this.selectedCSVFileName = "";
        this.unitTypes = [{ name: 'KG', value: 'kg' }, { name: 'Litres', value: 'ltrs' }, { name: 'Grams', value: 'g' }];
        // set up Alert
        setTimeout(function () { return (_this.staticAlertClosed = true); }, 20000);
        this._message.subscribe(function (message) { return (_this.responseMessage = message); });
        this._message.pipe(operators_1.debounceTime(5000)).subscribe(function () { return (_this.responseMessage = null); });
    }
    AddproductComponent.prototype.csvOn = function () {
        this.uploadingCSV = true;
    };
    AddproductComponent.prototype.csvOff = function () {
        this.uploadingCSV = false;
        this.uploadSuccess = false;
    };
    AddproductComponent.prototype.ngOnInit = function () {
        // Initialize form with Validation rules
        this.dataForm = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            fda: [],
            price: ['', forms_1.Validators.required],
            unit: ['', forms_1.Validators.required],
            unit_amount: ['', forms_1.Validators.required],
            notes: [],
            tags: [],
            sku: ['', forms_1.Validators.required],
        });
    };
    Object.defineProperty(AddproductComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.dataForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddproductComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.dataForm.invalid) {
            return;
        }
        console.log(this.inputData);
        this.processing = true;
        this.rest.addProduct(this.inputData)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.submitted = false;
            _this.processing = false;
            if (data.status == "00") {
                _this.messageType = 'success';
                _this._message.next("" + data.message);
                // send alert
                _this.inputData = {
                    name: "",
                    fda: "",
                    price: "",
                    notes: "",
                    unit: "",
                    unit_amount: "",
                    sku: "",
                    tags: "",
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
    AddproductComponent.prototype.submit_bulk = function () {
        var _this = this;
        var formatedProducts = [];
        // this.csvTableData.forEach(function(item) {
        //     if(item[0]){
        //       var condition = 
        //       ((item[0].length > 0) 
        //         && (item[1].length > 0) 
        //         && (item[2].length > 0) );
        //       if(!condition){
        //         console.log("lol");
        //         return;
        //       }
        //       let new_item = {name: item[0], fda: item[1], price: item[2], weight: item[3], sku: item[4], notes: item[5], tags: item[6] }
        //       formatedProducts.push(new_item);
        //     }
        //     // console.log(item);
        //     console.log(formatedProducts);
        //  })
        var t = 0;
        for (var _i = 0, _a = this.csvTableData; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                var condition = ((item[0].length > 0)
                    && (item[1].length > 0)
                    && (item[2].length > 0));
                console.log(condition);
                if (!condition) {
                    var error = "input on line " + (t + 1) + " is invalid. Please review CSV and correct input.";
                    this.messageType = 'danger';
                    this._message.next("" + error);
                    console.log(error);
                    formatedProducts = [];
                    break;
                }
                var new_item = { name: item[0], fda: item[1], price: item[2], weight: item[3], sku: item[4], notes: item[5], tags: item[6] };
                formatedProducts.push(new_item);
            }
            // console.log(item);
            console.log(formatedProducts);
            t++;
        }
        if (formatedProducts.length > 0) {
            this.processing = true;
            this.rest.addBulkProducts(formatedProducts)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.submitted = false;
                _this.processing = false;
                if (data.status == "00") {
                    _this.messageType = 'success';
                    _this._message.next("" + data.message);
                    _this.uploadSuccess = true;
                    _this.csvTableHeader = undefined;
                    _this.csvTableData = undefined;
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
        }
    };
    // LOAD CSV FILE FROM INPUT
    AddproductComponent.prototype.fileChangeListener = function ($event) {
        var _this = this;
        var files = $event.srcElement.files;
        if (files !== null && files !== undefined && files.length > 0) {
            this.selectedCSVFileName = files[0].name;
            var reader_1 = new FileReader();
            reader_1.readAsText(files[0]);
            reader_1.onload = function (e) {
                var csv = reader_1.result;
                var results = _this.papa.parse(csv, { header: false });
                // VALIDATE PARSED CSV FILE
                if (results !== null && results !== undefined && results.data !== null &&
                    results.data !== undefined && results.data.length > 0 && results.errors.length === 0) {
                    _this.isCSV_Valid = true;
                    // PERFORM OPERATIONS ON PARSED CSV
                    _this.csvTableHeader = results.data[0];
                    _this.csvTableData = __spreadArrays(results.data.slice(1, results.data.length));
                    console.log(_this.csvTableHeader);
                    console.log(_this.csvTableData);
                }
                else {
                    for (var i = 0; i < results.errors.length; i++) {
                        console.log('Error Parsing CSV File: ', results.errors[i].message);
                    }
                }
            };
        }
        else {
            console.log('No File Selected');
        }
    };
    AddproductComponent = __decorate([
        core_1.Component({
            selector: 'app-addproduct',
            templateUrl: './addproduct.component.html',
            styleUrls: ['./addproduct.component.css']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService,
            ngx_papaparse_1.Papa,
            forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            _services_1.AuthenticationService])
    ], AddproductComponent);
    return AddproductComponent;
}());
exports.AddproductComponent = AddproductComponent;
//# sourceMappingURL=addproduct.component.js.map