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
var shape = require("d3-shape");
var chartData_1 = require("./chartData");
var NgxChartComponent = /** @class */ (function () {
    function NgxChartComponent() {
        this.range = false;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.autoScale = true;
        this.timeline = false;
        this.barPadding = 8;
        this.groupPadding = 0;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.view = '';
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.arcWidth = 0.25;
        this.rangeFillOpacity = 0.15;
        this.colorScheme = {
            domain: ['#4fc3f7', '#fb8c00', '#7460ee', '#f62d51', '#20c997', '#2962FF']
        };
        this.schemeType = 'ordinal';
        // line interpolation
        this.curve = shape.curveLinear;
        Object.assign(this, {
            single: chartData_1.single,
            multi: chartData_1.multi
        });
        this.dateData = chartData_1.generateData(6, false);
        this.dateDataWithRange = chartData_1.generateData(2, true);
    }
    Object.defineProperty(NgxChartComponent.prototype, "dateDataWithOrWithoutRange", {
        get: function () {
            if (this.range) {
                return this.dateDataWithRange;
            }
            else {
                return this.dateData;
            }
        },
        enumerable: true,
        configurable: true
    });
    NgxChartComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    NgxChartComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    NgxChartComponent = __decorate([
        core_1.Component({
            selector: 'app-ngxchart',
            templateUrl: './ngx-chart.component.html',
            styleUrls: ['./ngx-chart.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], NgxChartComponent);
    return NgxChartComponent;
}());
exports.NgxChartComponent = NgxChartComponent;
//# sourceMappingURL=ngx-chart.component.js.map