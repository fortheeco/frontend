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
var MonthoverviewComponent = /** @class */ (function () {
    function MonthoverviewComponent() {
    }
    MonthoverviewComponent.prototype.ngAfterViewInit = function () {
        var chart = c3.generate({
            bindto: '.overview1',
            data: {
                columns: [
                    ['Site A', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
                    ['Site B', 1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3]
                ],
                type: 'line'
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
                top: 40,
                right: 10,
                bottom: 40,
                left: 20
            },
            point: {
                r: 4
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#2961ff', '#dadada', '#ff821c', '#7e74fb']
            }
        });
        var chart3 = c3.generate({
            bindto: '.rate',
            data: {
                columns: [['Conversation', 85], ['other', 15]],
                type: 'donut'
            },
            donut: {
                label: {
                    show: false
                },
                title: 'Coversation',
                width: 10
            },
            padding: {
                top: 10,
                bottom: -20
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#2961ff', '#dadada', '#ff821c', '#7e74fb']
            }
        });
        var chart4 = c3.generate({
            bindto: '.earnings',
            data: {
                columns: [
                    ['Site A', 0, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8]
                ],
                type: 'spline'
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
                pattern: ['#fff', '#ff821c', '#ff821c', '#7e74fb']
            }
        });
        $('#activeu').sparkline([6, 10, 9, 11, 9, 10, 12, 11, 10, 9, 11, 9, 10], {
            type: 'bar',
            height: '122',
            barWidth: '4',
            width: '100%',
            resize: true,
            barSpacing: '11',
            barColor: '#fff'
        });
    };
    MonthoverviewComponent = __decorate([
        core_1.Component({
            selector: 'app-month-overview',
            templateUrl: './month-overview.component.html',
            styleUrls: ['./month-overview.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MonthoverviewComponent);
    return MonthoverviewComponent;
}());
exports.MonthoverviewComponent = MonthoverviewComponent;
//# sourceMappingURL=month-overview.component.js.map