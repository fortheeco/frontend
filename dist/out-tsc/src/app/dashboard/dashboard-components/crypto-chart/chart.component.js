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
var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngAfterViewInit = function () {
        var chart = c3.generate({
            bindto: '#btc-eth-rip',
            data: {
                columns: [
                    ['Ripple', 0, 15, 15, 38, 8, 40, 20, 100, 70],
                    ['Ethereum', 0, 35, 30, 60, 20, 80, 50, 180, 150],
                    ['Bitcoin', 0, 80, 40, 100, 30, 150, 80, 270, 250]
                ],
                type: 'area-spline',
                groups: [['Ripple', 'Ethereum', 'Bitcoin']]
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
            padding: {
                top: 20,
                right: 10,
                bottom: 0,
                left: 30
            },
            point: {
                r: 2
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#ff821c', '#40c4ff', '#1240c2']
            }
        });
    };
    ChartComponent = __decorate([
        core_1.Component({
            selector: 'app-chart',
            templateUrl: './chart.component.html',
            styleUrls: ['./chart.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map