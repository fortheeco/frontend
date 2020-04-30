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
var data_1 = require("./data");
var ToplocationsComponent = /** @class */ (function () {
    function ToplocationsComponent() {
        this.config = {};
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
        this.yAxisLabel = 'Campaign Success Rate';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.autoScale = true;
        this.timeline = false;
        this.barPadding = 5;
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
        Object.assign(this, {
            single: data_1.single
        });
    }
    ToplocationsComponent = __decorate([
        core_1.Component({
            selector: 'app-top-locations',
            templateUrl: './top-locations.component.html',
            styleUrls: ['./top-locations.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ToplocationsComponent);
    return ToplocationsComponent;
}());
exports.ToplocationsComponent = ToplocationsComponent;
//# sourceMappingURL=top-locations.component.js.map