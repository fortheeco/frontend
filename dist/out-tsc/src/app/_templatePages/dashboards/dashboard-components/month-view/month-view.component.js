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
var MonthviewComponent = /** @class */ (function () {
    function MonthviewComponent() {
        this.lineChart = {
            type: 'Line',
            data: data['Line'],
            options: {
                low: 0,
                high: 28,
                showArea: true,
                fullWidth: true,
                chartPadding: {
                    top: 15,
                    right: 15,
                    bottom: 5,
                    left: 40
                },
                axisY: {
                    onlyInteger: true,
                    scaleMinSpace: 40,
                    offset: 20,
                    labelInterpolationFnc: function (value) {
                        return value + 'k';
                    }
                }
            },
            responsiveOptions: [
                [
                    'screen and (max-width: 1023px)',
                    {
                        chartPadding: {
                            top: 15,
                            right: 12,
                            bottom: 5,
                            left: 10
                        }
                    }
                ]
            ]
        };
    }
    MonthviewComponent = __decorate([
        core_1.Component({
            selector: 'app-month-view',
            templateUrl: './month-view.component.html',
            styleUrls: ['./month-view.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MonthviewComponent);
    return MonthviewComponent;
}());
exports.MonthviewComponent = MonthviewComponent;
//# sourceMappingURL=month-view.component.js.map