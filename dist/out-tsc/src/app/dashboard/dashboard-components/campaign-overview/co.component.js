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
var CamoverComponent = /** @class */ (function () {
    function CamoverComponent() {
        this.lineChartData = [
            { data: [3, 8, 2, 3, 2, 5, 6, 8], label: 'A' },
            { data: [7, 6, 5, 8, 6, 7, 2, 1], label: 'B' }
        ];
        this.lineChartLabels = [1, 2, 3, 4, 5, 6, 7, 8];
        this.lineChartOptions = {
            elements: { point: { radius: 2 } },
            responsive: true,
            maintainAspectRatio: false,
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
            },
            layout: {
                padding: {
                    left: -10,
                    right: 0,
                    top: 0,
                    bottom: -10
                }
            }
        };
        this.lineChartColors = [
            {
                pointBorderColor: '#2961ff',
                pointHoverBackgroundColor: '#2961ff',
                pointHoverBorderColor: '#009efb',
                borderColor: '#2961ff',
                borderWidth: 1,
                backgroundColor: 'rgba(41, 97, 255, .3)',
                pointBackgroundColor: '#2961ff'
            },
            {
                pointBorderColor: '#4dd0e1',
                pointHoverBackgroundColor: '#4dd0e1',
                pointHoverBorderColor: '#55ce63',
                borderColor: '#4dd0e1',
                borderWidth: 1,
                backgroundColor: 'rgba(77, 208, 225, .3)',
                pointBackgroundColor: '#4dd0e1'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
    }
    CamoverComponent = __decorate([
        core_1.Component({
            selector: 'app-campaign-overview',
            templateUrl: './co.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], CamoverComponent);
    return CamoverComponent;
}());
exports.CamoverComponent = CamoverComponent;
//# sourceMappingURL=co.component.js.map