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
var EcomorderComponent = /** @class */ (function () {
    function EcomorderComponent() {
    }
    EcomorderComponent.prototype.ngAfterViewInit = function () {
        var chart4 = c3.generate({
            bindto: '.status',
            data: {
                columns: [['Success', 65], ['Pending', 15], ['Failed', 17]],
                type: 'donut'
            },
            donut: {
                label: {
                    show: false
                },
                title: 'Orders',
                width: 35
            },
            legend: {
                hide: true
                // or hide: 'data1'
                // or hide: ['data1', 'data2']
            },
            color: {
                pattern: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb']
            }
        });
    };
    EcomorderComponent = __decorate([
        core_1.Component({
            selector: 'app-ecom-order',
            templateUrl: './ecom-order.component.html',
            styleUrls: ['./ecom-order.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EcomorderComponent);
    return EcomorderComponent;
}());
exports.EcomorderComponent = EcomorderComponent;
//# sourceMappingURL=ecom-order.component.js.map