"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var NgbTimeStringAdapter = /** @class */ (function (_super) {
    __extends(NgbTimeStringAdapter, _super);
    function NgbTimeStringAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbTimeStringAdapter.prototype.fromModel = function (value) {
        if (!value) {
            return null;
        }
        var split = value.split(':');
        return {
            hour: parseInt(split[0], 10),
            minute: parseInt(split[1], 10),
            second: parseInt(split[2], 10)
        };
    };
    NgbTimeStringAdapter.prototype.toModel = function (time1) {
        if (!time1) {
            return null;
        }
        return this.pad(time1.hour) + ":" + this.pad(time1.minute) + ":" + this.pad(time1.second);
    };
    NgbTimeStringAdapter.prototype.pad = function (i) {
        return i < 10 ? "0" + i : "" + i;
    };
    NgbTimeStringAdapter = __decorate([
        core_1.Injectable()
    ], NgbTimeStringAdapter);
    return NgbTimeStringAdapter;
}(ng_bootstrap_1.NgbTimeAdapter));
exports.NgbTimeStringAdapter = NgbTimeStringAdapter;
var NgbdtimepickerBasicComponent = /** @class */ (function () {
    function NgbdtimepickerBasicComponent() {
        this.time = { hour: 13, minute: 30 };
        this.meridian = true;
        // This is for the seconds
        this.seconds = true;
        // This is for the spinners
        this.spinners = true;
        // This is for the column step
        this.time2 = { hour: 13, minute: 30, second: 0 };
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
        this.ctrl = new forms_1.FormControl('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
    }
    NgbdtimepickerBasicComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    NgbdtimepickerBasicComponent.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    NgbdtimepickerBasicComponent.prototype.toggleSpinners = function () {
        this.spinners = !this.spinners;
    };
    NgbdtimepickerBasicComponent = __decorate([
        core_1.Component({
            selector: 'app-ngbd-timepicker',
            templateUrl: './timepicker.component.html',
            providers: [{ provide: ng_bootstrap_1.NgbTimeAdapter, useClass: NgbTimeStringAdapter }]
        })
    ], NgbdtimepickerBasicComponent);
    return NgbdtimepickerBasicComponent;
}());
exports.NgbdtimepickerBasicComponent = NgbdtimepickerBasicComponent;
//# sourceMappingURL=timepicker.component.js.map