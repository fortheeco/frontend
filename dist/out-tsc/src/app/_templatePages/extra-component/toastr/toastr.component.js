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
var ngx_toastr_1 = require("ngx-toastr");
var ToastrComponent = /** @class */ (function () {
    function ToastrComponent(toastr) {
        this.toastr = toastr;
    }
    ToastrComponent.prototype.showSuccess = function () {
        this.toastr.success('You are awesome!', 'Success!');
    };
    ToastrComponent.prototype.showError = function () {
        this.toastr.error('This is not good!', 'Oops!');
    };
    ToastrComponent.prototype.showWarning = function () {
        this.toastr.warning('You are being warned.', 'Alert!');
    };
    ToastrComponent.prototype.showInfo = function () {
        this.toastr.info('Just some information for you.');
    };
    ToastrComponent = __decorate([
        core_1.Component({
            templateUrl: './toastr.component.html'
        }),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService])
    ], ToastrComponent);
    return ToastrComponent;
}());
exports.ToastrComponent = ToastrComponent;
//# sourceMappingURL=toastr.component.js.map