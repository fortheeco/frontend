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
var RevenueviewsComponent = /** @class */ (function () {
    function RevenueviewsComponent() {
    }
    RevenueviewsComponent.prototype.ngAfterViewInit = function () {
        $('#ravenue').sparkline([6, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10], {
            type: 'bar',
            height: '75',
            barWidth: '4',
            width: '100%',
            resize: true,
            barSpacing: '8',
            barColor: '#fff'
        });
        $('#views').sparkline([6, 10, 9, 11, 9, 10, 12], {
            type: 'line',
            height: '45',
            lineColor: 'transparent',
            fillColor: 'rgba(255, 255, 255, 0.3)',
            width: '100%',
            resize: true
        });
    };
    RevenueviewsComponent = __decorate([
        core_1.Component({
            selector: 'app-revenue-views',
            templateUrl: './revenue-views.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], RevenueviewsComponent);
    return RevenueviewsComponent;
}());
exports.RevenueviewsComponent = RevenueviewsComponent;
//# sourceMappingURL=revenue-views.component.js.map