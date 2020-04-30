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
var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngAfterViewInit = function () {
        var chart = c3.generate({
            bindto: '.earningsbox',
            data: {
                columns: [
                    ['Site A', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8]
                ],
                type: 'area-spline'
            },
            axis: {
                y: {
                    show: false,
                    tick: {
                        count: 0,
                        outer: false
                    }
                },
                x: {
                    show: false
                }
            },
            padding: {
                top: 0,
                right: -8,
                bottom: -28,
                left: -8
            },
            point: {
                r: 0
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#40c4ff', '#dadada', '#ff821c', '#7e74fb']
            }
        });
    };
    StatsComponent = __decorate([
        core_1.Component({
            selector: 'app-stats',
            templateUrl: './stats.component.html',
            styleUrls: ['./stats.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;
//# sourceMappingURL=stats.component.js.map