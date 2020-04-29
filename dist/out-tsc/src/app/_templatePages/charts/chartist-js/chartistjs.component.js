"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data = require('./data.json');
var ChartistjsComponent = /** @class */ (function () {
    function ChartistjsComponent() {
        // Barchart
        this.barChart1 = {
            type: 'Bar',
            data: data['Bar'],
            options: {
                seriesBarDistance: 15,
                axisX: {
                    showGrid: false,
                    offset: 70
                },
                axisY: {
                    showGrid: true,
                    offset: 50
                }
            },
            responsiveOptions: [
                [
                    'screen and (min-width: 640px)',
                    {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 1 === 0 ? "" + value : null;
                            }
                        }
                    }
                ]
            ]
        };
        // Line chart
        this.lineChart1 = {
            type: 'Line',
            data: data['LineWithArea'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true
            }
        };
        // Line chart 2
        this.lineChart2 = {
            type: 'Line',
            data: data['Line'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true
            }
        };
        // Line chart 2
        this.lineChart3 = {
            type: 'Line',
            data: data['Line2'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true
            }
        };
        // Scatter chart
        this.scatterChart1 = {
            type: 'Line',
            data: data['Scatter'],
            options: {
                showLine: false,
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 13 === 0 ? "W" + value : null;
                    }
                }
            },
            responsiveOptions: [
                [
                    'screen and (min-width: 640px)',
                    {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 4 === 0 ? "W" + value : null;
                            }
                        }
                    }
                ]
            ]
        };
        // Pie chart
        this.pieChart1 = {
            type: 'Pie',
            data: data['Pie'],
            options: {
                donut: true,
                donutWidth: 50,
                startAngle: 270,
                total: 200,
                showLabel: false
            }
        };
        this.donuteChart1 = {
            type: 'Pie',
            data: data['Pie'],
            options: {
                donut: true,
                showLabel: false
            }
            // events: {
            //   draw(data: any): boolean {
            //     return data;
            //   }
            // }
        };
        // Bi Poller chart
        this.bipollarChart1 = {
            type: 'Bar',
            data: data['Bi-PolarBar'],
            options: {
                high: 10,
                low: -10,
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 2 === 0 ? value : null;
                    }
                }
            }
        };
    }
    ChartistjsComponent = __decorate([
        core_1.Component({
            templateUrl: './chartistjs.component.html'
        })
    ], ChartistjsComponent);
    return ChartistjsComponent;
}());
exports.ChartistjsComponent = ChartistjsComponent;
//# sourceMappingURL=chartistjs.component.js.map