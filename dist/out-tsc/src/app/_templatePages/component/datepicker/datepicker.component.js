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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var my = new Date();
// This is for the range date picker
// tslint:disable-next-line:max-line-length
var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two
        ? false
        : one.year === two.year
            ? one.month === two.month
                ? one.day === two.day
                    ? false
                    : one.day < two.day
                : one.month < two.month
            : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two
        ? false
        : one.year === two.year
            ? one.month === two.month
                ? one.day === two.day
                    ? false
                    : one.day > two.day
                : one.month > two.month
            : one.year > two.year;
};
// End range date picker
var NgbdDatepickerBasicComponent = /** @class */ (function () {
    function NgbdDatepickerBasicComponent(calendar, calendar1, calendar5) {
        var _this = this;
        this.calendar1 = calendar1;
        this.calendar5 = calendar5;
        this.today5 = this.calendar5.getToday();
        // This is for multiple month
        this.displayMonths = 2;
        this.navigation = 'select';
        this.showWeekNumbers = false;
        // This is for the disable datepicker
        this.model3 = { year: my.getFullYear(), month: my.getMonth() + 1, day: my.getDate() };
        this.disabled = true;
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        this.isDisabled = function (date, current) { return date.month !== current.month; };
        this.isWeekend = function (date) { return _this.calendar1.getWeekday(date) >= 6; };
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    Object.defineProperty(NgbdDatepickerBasicComponent.prototype, "today", {
        get: function () {
            return new Date();
        },
        enumerable: true,
        configurable: true
    });
    NgbdDatepickerBasicComponent.prototype.selectToday = function () {
        this.model = { year: my.getFullYear(), month: my.getMonth() + 1, day: my.getDate() };
    };
    NgbdDatepickerBasicComponent.prototype.onDateChange = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    NgbdDatepickerBasicComponent = __decorate([
        core_1.Component({
            selector: 'app-datepicker-basic',
            templateUrl: './datepicker.component.html',
            providers: [{ provide: ng_bootstrap_1.NgbDateAdapter, useClass: ng_bootstrap_1.NgbDateNativeAdapter }],
            styles: [
                "\n      .custom-day {\n        text-align: center;\n        padding: 0.185rem 0.25rem;\n        display: inline-block;\n        height: 2rem;\n        width: 2rem;\n      }\n      .custom-day.focused {\n        background-color: #e6e6e6;\n      }\n      .custom-day.range,\n      .custom-day:hover {\n        background-color: #0275d8;\n        color: white;\n      }\n      .faded {\n        opacity: 0.5;\n      }\n      .weekend {\n        background-color: #242a33;\n        border-radius: 1rem;\n        color: white;\n      }\n      .hidden {\n        display: none;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbCalendar, ng_bootstrap_1.NgbCalendar, ng_bootstrap_1.NgbCalendar])
    ], NgbdDatepickerBasicComponent);
    return NgbdDatepickerBasicComponent;
}());
exports.NgbdDatepickerBasicComponent = NgbdDatepickerBasicComponent;
//# sourceMappingURL=datepicker.component.js.map