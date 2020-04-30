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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Last
var I18N_VALUES = {
    fr: {
        weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
        months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc']
    }
    // other languages you would support
};
// Last
var I18n = /** @class */ (function () {
    function I18n() {
        this.language = 'fr';
    }
    I18n = __decorate([
        core_1.Injectable()
    ], I18n);
    return I18n;
}());
exports.I18n = I18n;
var CustomDatepickerI18n = /** @class */ (function (_super) {
    __extends(CustomDatepickerI18n, _super);
    function CustomDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    CustomDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    CustomDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    CustomDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    CustomDatepickerI18n.prototype.getDayAriaLabel = function (date) {
        return date.day + "-" + date.month + "-" + date.year;
    };
    CustomDatepickerI18n = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [I18n])
    ], CustomDatepickerI18n);
    return CustomDatepickerI18n;
}(ng_bootstrap_1.NgbDatepickerI18n));
exports.CustomDatepickerI18n = CustomDatepickerI18n;
// last
var NgbdDatepickerLanguageComponent = /** @class */ (function () {
    function NgbdDatepickerLanguageComponent() {
    }
    NgbdDatepickerLanguageComponent = __decorate([
        core_1.Component({
            selector: 'app-datepicker-language',
            templateUrl: './language-datepicker.component.html',
            providers: [I18n, { provide: ng_bootstrap_1.NgbDatepickerI18n, useClass: CustomDatepickerI18n }]
        })
    ], NgbdDatepickerLanguageComponent);
    return NgbdDatepickerLanguageComponent;
}());
exports.NgbdDatepickerLanguageComponent = NgbdDatepickerLanguageComponent;
//# sourceMappingURL=language-datepicker.component.js.map