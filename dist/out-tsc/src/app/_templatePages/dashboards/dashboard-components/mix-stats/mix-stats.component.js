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
var MixstatsComponent = /** @class */ (function () {
    function MixstatsComponent() {
    }
    MixstatsComponent.prototype.ngAfterViewInit = function () {
        $('#visits').sparkline([
            6,
            10,
            9,
            11,
            9,
            10,
            12,
            10,
            9,
            11,
            9,
            10,
            12,
            10,
            9,
            11,
            9,
            9,
            11,
            9,
            10,
            12,
            10
        ], {
            type: 'bar',
            height: '60',
            barWidth: '4',
            width: '100%',
            resize: true,
            barSpacing: '6',
            barColor: '#4dd0e1'
        });
        var chart = c3.generate({
            bindto: '.earningsbox1',
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
                pattern: ['#2961ff']
            }
        });
        var chart2 = c3.generate({
            bindto: '#visitor1',
            data: {
                columns: [['Success', 45], ['Pending', 15], ['Failed', 27]],
                type: 'donut'
            },
            donut: {
                label: {
                    show: false
                },
                title: '75%',
                width: 25
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#40c4ff', '#2961ff', '#ff821c']
            }
        });
    };
    MixstatsComponent = __decorate([
        core_1.Component({
            selector: 'app-mix-stats',
            templateUrl: './mix-stats.component.html',
            styleUrls: ['./mix-stats.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MixstatsComponent);
    return MixstatsComponent;
}());
exports.MixstatsComponent = MixstatsComponent;
//# sourceMappingURL=mix-stats.component.js.map