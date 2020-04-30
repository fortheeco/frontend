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
var InfocardComponent = /** @class */ (function () {
    function InfocardComponent() {
        this.lineChartData = [
            { data: [12, 19, 3, 5, 2, 3], label: 'Balance $' }
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
                borderColor: '#4dc8ff',
                pointBackgroundColor: '#4dc8ff',
                pointBorderColor: '#4dc8ff',
                pointHoverBackgroundColor: '#4dc8ff',
                pointHoverBorderColor: '#4dc8ff'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
    }
    InfocardComponent.prototype.ngAfterViewInit = function () {
        $('#ravenue').sparkline([6, 10, 9, 11, 9, 10, 12], {
            type: 'bar',
            height: '55',
            barWidth: '4',
            width: '100%',
            resize: true,
            barSpacing: '8',
            barColor: '#2961ff'
        });
        var chart = c3.generate({
            bindto: '#foo',
            data: {
                columns: [['data', 91.4]],
                type: 'gauge'
            },
            gauge: {
                label: {
                    format: function (value, ratio) {
                        return value;
                    },
                    show: false
                },
                min: 0,
                max: 100,
                units: ' %',
                width: 15
            },
            legend: {
                hide: true
            },
            size: {
                height: 80
            },
            color: {
                pattern: ['#7e74fb']
            }
        });
    };
    InfocardComponent = __decorate([
        core_1.Component({
            selector: 'app-info-card',
            templateUrl: './info-card.component.html',
            styleUrls: ['./info-card.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], InfocardComponent);
    return InfocardComponent;
}());
exports.InfocardComponent = InfocardComponent;
//# sourceMappingURL=info-card.component.js.map