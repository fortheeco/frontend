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
var ActivevisitComponent = /** @class */ (function () {
    function ActivevisitComponent() {
        this.config = {};
    }
    ActivevisitComponent.prototype.ngAfterViewInit = function () {
        $('#active-users').sparkline([6, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12], {
            type: 'bar',
            height: '60',
            barWidth: '4',
            width: '100%',
            resize: true,
            barSpacing: '8',
            barColor: '#2961ff'
        });
        var chart = c3.generate({
            bindto: '#visitor',
            data: {
                columns: [
                    ['Open', 45],
                    ['Clicked', 15],
                    ['Un-opened', 27],
                    ['Bounced', 18]
                ],
                type: 'donut'
            },
            donut: {
                label: {
                    show: false
                },
                title: 'Visits',
                width: 35
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb']
            }
        });
    };
    ActivevisitComponent = __decorate([
        core_1.Component({
            selector: 'app-active-visit',
            templateUrl: './active-visit.component.html',
            styleUrls: ['./active-visit.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ActivevisitComponent);
    return ActivevisitComponent;
}());
exports.ActivevisitComponent = ActivevisitComponent;
//# sourceMappingURL=active-visit.component.js.map