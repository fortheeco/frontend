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
var RpbComponent = /** @class */ (function () {
    function RpbComponent() {
        this.lineChartData = [
            { data: [12, 19, 3, 5, 2, 3], label: 'Bounce %' }
        ];
        this.lineChartLabels = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017'
        ];
        this.lineChartOptions = {
            responsive: true,
            elements: {
                point: {
                    radius: 2
                }
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        }
                    }
                ]
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'transparent',
                borderColor: '#2961ff',
                pointBackgroundColor: '#2961ff',
                pointBorderColor: '#2961ff',
                pointHoverBackgroundColor: '#2961ff',
                pointHoverBorderColor: '#2961ff'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
    }
    RpbComponent.prototype.ngAfterViewInit = function () {
        var sparklineLogin = function () {
            $('#ravenue').sparkline([6, 10, 9, 11, 9, 10, 12], {
                type: 'bar',
                height: '100',
                barWidth: '4',
                width: '100%',
                resize: true,
                barSpacing: '11',
                barColor: '#fff'
            });
            $('#views').sparkline([6, 10, 9, 11, 9, 10, 12], {
                type: 'line',
                height: '72',
                lineColor: 'transparent',
                fillColor: 'rgba(255, 255, 255, 0.3)',
                width: '100%',
                resize: true
            });
        };
        sparklineLogin();
    };
    RpbComponent = __decorate([
        core_1.Component({
            selector: 'app-rpb',
            templateUrl: './rpb.component.html',
            styleUrls: ['./rpb.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], RpbComponent);
    return RpbComponent;
}());
exports.RpbComponent = RpbComponent;
//# sourceMappingURL=rpb.component.js.map