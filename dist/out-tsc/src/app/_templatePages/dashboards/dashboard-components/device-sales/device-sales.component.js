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
var data = require('./data.json');
var DeviceSalesComponent = /** @class */ (function () {
    function DeviceSalesComponent() {
        this.barChart = {
            type: 'Bar',
            data: data['Bar'],
            options: {
                axisX: {
                    showGrid: false
                },
                seriesBarDistance: 1,
                chartPadding: {
                    top: 15,
                    right: 15,
                    bottom: 5,
                    left: 0
                },
                width: '100%'
            },
            responsiveOptions: [
                [
                    'screen and (max-width: 640px)',
                    {
                        seriesBarDistance: 5,
                        axisX: {
                            labelInterpolationFnc: function (value) {
                                return value[0];
                            }
                        }
                    }
                ]
            ]
        };
    }
    DeviceSalesComponent.prototype.ngAfterViewInit = function () {
        var chart1 = c3.generate({
            bindto: '#visitor',
            data: {
                columns: [
                    ['Desktop', 40],
                    ['Tablet', 12],
                    ['Mobile', 28],
                    ['None', 60]
                ],
                type: 'donut'
            },
            donut: {
                label: {
                    show: false
                },
                title: 'Variations',
                width: 25
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#40c4ff', '#2961ff', '#ff821c', '#e9edf2']
            }
        });
        var chart2 = c3.generate({
            bindto: '#sales',
            data: {
                columns: [['2011', 45], ['2012', 15], ['2013', 27]],
                type: 'donut'
            },
            donut: {
                label: {
                    show: false
                },
                width: 15
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#40c4ff', '#2961ff', '#ff821c']
            }
        });
        var chart3 = c3.generate({
            bindto: '#foo',
            data: {
                columns: [['data', 70.45]],
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
                width: 25
            },
            legend: {
                hide: true
            },
            size: {
                height: 100
            },
            color: {
                pattern: ['#7e74fb']
            }
        });
    };
    DeviceSalesComponent = __decorate([
        core_1.Component({
            selector: 'app-device-sales',
            templateUrl: './device-sales.component.html',
            styleUrls: ['./device-sales.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], DeviceSalesComponent);
    return DeviceSalesComponent;
}());
exports.DeviceSalesComponent = DeviceSalesComponent;
//# sourceMappingURL=device-sales.component.js.map