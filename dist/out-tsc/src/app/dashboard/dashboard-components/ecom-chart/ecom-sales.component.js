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
var c3 = require("c3");
var EcomSalesComponent = /** @class */ (function () {
    function EcomSalesComponent() {
    }
    EcomSalesComponent.prototype.ngAfterViewInit = function () {
        var chart2 = c3.generate({
            bindto: '.product-sales',
            data: {
                columns: [
                    ['Site A', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
                    ['Site B', 1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3]
                ],
                type: 'bar'
            },
            axis: {
                y: {
                    show: true,
                    tick: {
                        count: 0,
                        outer: false
                    }
                },
                x: {
                    show: true
                }
            },
            bar: {
                width: 8
            },
            padding: {
                top: 40,
                right: 10,
                bottom: 0,
                left: 20
            },
            point: {
                r: 0
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#2961ff', '#40c4ff', '#ff821c', '#7e74fb']
            }
        });
    };
    EcomSalesComponent = __decorate([
        core_1.Component({
            selector: 'app-ecom-sales',
            templateUrl: './ecom-sales.component.html',
            styleUrls: ['./ecom-sales.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EcomSalesComponent);
    return EcomSalesComponent;
}());
exports.EcomSalesComponent = EcomSalesComponent;
//# sourceMappingURL=ecom-sales.component.js.map