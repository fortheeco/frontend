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
var SalelocationComponent = /** @class */ (function () {
    function SalelocationComponent() {
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Selling';
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
            domain: ['#2962FF', '#4fc3f7', '#a1aab2']
        };
        this.schemeType = 'ordinal';
        Object.assign(this, {
            multi: data_1.multi
        });
    }
    SalelocationComponent = __decorate([
        core_1.Component({
            selector: 'app-sale-location',
            templateUrl: './sale-location.component.html',
            styleUrls: ['./sale-location.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SalelocationComponent);
    return SalelocationComponent;
}());
exports.SalelocationComponent = SalelocationComponent;
//# sourceMappingURL=sale-location.component.js.map