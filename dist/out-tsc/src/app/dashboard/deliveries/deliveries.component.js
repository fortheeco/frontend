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
require("rxjs/Rx");
var rest_service_1 = require("../../_services/rest.service");
var statusTranslators_1 = require("../../_helpers/statusTranslators");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var DeliveriesComponent = /** @class */ (function () {
    function DeliveriesComponent(rest, statusTranslators) {
        var _this = this;
        this.rest = rest;
        this.statusTranslators = statusTranslators;
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
    DeliveriesComponent_1 = DeliveriesComponent;
    DeliveriesComponent.prototype.ngOnInit = function () {
        this.getDeliveries();
    };
    DeliveriesComponent.prototype.getDeliveries = function () {
        var _this = this;
        this.isLoading = true;
        this.rest.getUserDeliveries().subscribe(function (response) {
            _this.isLoading = false;
            _this.deliveries = response.json().data;
            _this.temp = response.json().data;
        }, function (error) {
            _this.isLoading = false;
        });
    };
    DeliveriesComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.request_code.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.deliveries = temp;
        // Whenever the filter changes, always go back to the first page
        this.table = this.deliveries;
    };
    var DeliveriesComponent_1;
    __decorate([
        core_1.ViewChild(DeliveriesComponent_1),
        __metadata("design:type", DeliveriesComponent)
    ], DeliveriesComponent.prototype, "table", void 0);
    DeliveriesComponent = DeliveriesComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-deliveries',
            templateUrl: './deliveries.component.html',
            styleUrls: ['./deliveries.component.css']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService,
            statusTranslators_1.StatusTranslators])
    ], DeliveriesComponent);
    return DeliveriesComponent;
}());
exports.DeliveriesComponent = DeliveriesComponent;
//# sourceMappingURL=deliveries.component.js.map