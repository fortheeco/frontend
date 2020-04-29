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
var EarningsComponent = /** @class */ (function () {
    function EarningsComponent() {
    }
    EarningsComponent.prototype.ngAfterViewInit = function () {
        $('#active-users').sparkline([6, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9], {
            type: 'bar',
            height: '60',
            barWidth: '4',
            width: '100%',
            resize: true,
            barSpacing: '8',
            barColor: '#4fc3f7'
        });
    };
    EarningsComponent = __decorate([
        core_1.Component({
            selector: 'app-earnings',
            templateUrl: './earnings.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], EarningsComponent);
    return EarningsComponent;
}());
exports.EarningsComponent = EarningsComponent;
//# sourceMappingURL=earnings.component.js.map