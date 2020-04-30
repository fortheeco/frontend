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
var RealtimevisitComponent = /** @class */ (function () {
    function RealtimevisitComponent() {
    }
    RealtimevisitComponent.prototype.ngAfterViewInit = function () {
        var chart = c3.generate({
            bindto: '#placeholder',
            data: {
                columns: [
                    ['Site A', 30, 400, 100, 400, 150, 275, 135, 200, 218],
                    ['Site B', 130, 340, 200, 350, 250, 130, 189, 153, 258]
                ],
                type: 'area-spline'
            },
            axis: {
                y: {
                    show: true,
                    tick: {
                        count: 0,
                        outer: false
                    }
                },
                x: {
                    show: true
                }
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#2961ff', '#40c4ff']
            }
        });
    };
    RealtimevisitComponent = __decorate([
        core_1.Component({
            selector: 'app-realtime-visit',
            templateUrl: './realtime-visit.component.html',
            styleUrls: ['./realtime-visit.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], RealtimevisitComponent);
    return RealtimevisitComponent;
}());
exports.RealtimevisitComponent = RealtimevisitComponent;
//# sourceMappingURL=realtime-visit.component.js.map