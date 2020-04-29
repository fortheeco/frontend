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
var ChartjsComponent = /** @class */ (function () {
    function ChartjsComponent() {
        // This is line chart
        // bar chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            barThickness: 10
        };
        this.barChartLabels = [
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017'
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Iphone 8' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Iphone X' }
        ];
        this.barChartColors = [
            { backgroundColor: '#36bea6' },
            { backgroundColor: '#2962FF' }
        ];
        // Doughnut
        this.doughnutChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail-Order Sales'
        ];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
        ];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        this.radarChartColors = [
            {
                backgroundColor: 'rgba(54,190,166,.5)',
                borderColor: 'rgba(54,190,166,1)'
            },
            { backgroundColor: 'rgb(41,98,255,.5)', borderColor: 'rgb(41,98,255,1)' }
        ];
        // Pie
        this.pieChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail Sales'
        ];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail Sales',
            'Telesales',
            'Corporate Sales'
        ];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        // lineChart
        this.lineChartData = [
            { data: [65, 39, 80, 15, 76, 35, 40], label: 'Series A' },
            { data: [18, 58, 20, 69, 16, 27, 90], label: 'Series B' }
        ];
        this.lineChartLabels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(54,190,166,.1)',
                borderColor: '#36bea6',
                pointBackgroundColor: '#36bea6',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#36bea6'
            },
            {
                // dark grey
                backgroundColor: 'rgb(41,98,255,.1)',
                borderColor: '#2962FF',
                pointBackgroundColor: '#2962FF',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#2962FF'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    // events
    ChartjsComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    ChartjsComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    ChartjsComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    ChartjsComponent.prototype.ngAfterViewInit = function () { };
    ChartjsComponent = __decorate([
        core_1.Component({
            templateUrl: './chartjs.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], ChartjsComponent);
    return ChartjsComponent;
}());
exports.ChartjsComponent = ChartjsComponent;
//# sourceMappingURL=chartjs.component.js.map