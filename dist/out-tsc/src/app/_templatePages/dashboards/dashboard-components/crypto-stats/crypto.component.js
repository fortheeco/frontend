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
var CryptoComponent = /** @class */ (function () {
    function CryptoComponent() {
    }
    CryptoComponent.prototype.ngAfterViewInit = function () {
        $('.crypto').sparkline([6, 10, 9, 11, 9, 10, 12], {
            type: 'bar',
            height: '30',
            barWidth: '4',
            width: '100%',
            resize: true,
            barSpacing: '5',
            barColor: '#ffffff'
        });
    };
    CryptoComponent = __decorate([
        core_1.Component({
            selector: 'app-crypto',
            templateUrl: './crypto.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], CryptoComponent);
    return CryptoComponent;
}());
exports.CryptoComponent = CryptoComponent;
//# sourceMappingURL=crypto.component.js.map