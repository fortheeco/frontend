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
var data = require('./data.json');
var CamStatsComponent = /** @class */ (function () {
    function CamStatsComponent() {
        this.barChart = {
            type: 'Bar',
            data: data['Bar'],
            options: {
                stackBars: true,
                axisY: {
                    labelInterpolationFnc: function (value) {
                        return value / 1 + 'k';
                    }
                },
                axisX: {
                    showGrid: false
                },
                seriesBarDistance: 1,
                chartPadding: {
                    top: 15,
                    right: 15,
                    bottom: 5,
                    left: 0
                }
            }
        };
    }
    CamStatsComponent = __decorate([
        core_1.Component({
            selector: 'app-cam-stats',
            templateUrl: './cam-stats.component.html',
            styleUrls: ['./cam-stats.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], CamStatsComponent);
    return CamStatsComponent;
}());
exports.CamStatsComponent = CamStatsComponent;
//# sourceMappingURL=cam-stats.component.js.map