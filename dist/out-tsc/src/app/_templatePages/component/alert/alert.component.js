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
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var NgbdAlertBasicComponent = /** @class */ (function () {
    function NgbdAlertBasicComponent() {
        // this is for the Closeable Alert
        this.alerts = [];
        // End the Closeable Alert
        // This is for the self closing alert
        this._success = new rxjs_1.Subject();
        this.staticAlertClosed = false;
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert'
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert'
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NgbdAlertBasicComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    NgbdAlertBasicComponent.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) { return Object.assign({}, alert); });
    };
    NgbdAlertBasicComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return (_this.staticAlertClosed = true); }, 20000);
        this._success.subscribe(function (message) { return (_this.successMessage = message); });
        this._success.pipe(operators_1.debounceTime(5000)).subscribe(function () { return (_this.successMessage = null); });
    };
    NgbdAlertBasicComponent.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], NgbdAlertBasicComponent.prototype, "alerts", void 0);
    NgbdAlertBasicComponent = __decorate([
        core_1.Component({
            selector: 'app-ngbd-alert',
            templateUrl: 'alert.component.html',
            styles: ["\n    :host >>> .alert-custom {\n      color: #99004d;\n      background-color: #f169b4;\n      border-color: #800040;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], NgbdAlertBasicComponent);
    return NgbdAlertBasicComponent;
}());
exports.NgbdAlertBasicComponent = NgbdAlertBasicComponent;
//# sourceMappingURL=alert.component.js.map