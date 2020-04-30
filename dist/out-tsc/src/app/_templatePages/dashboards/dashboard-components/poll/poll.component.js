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
var PollComponent = /** @class */ (function () {
    function PollComponent() {
    }
    PollComponent.prototype.ngAfterViewInit = function () {
        var chart = c3.generate({
            bindto: '#poll',
            data: {
                columns: [['A', 30], ['B', 15], ['C', 27], ['D', 18], ['None', 45]],
                type: 'donut',
                onclick: function (d, i) {
                    console.log('onclick', d, i);
                },
                onmouseover: function (d, i) {
                    console.log('onmouseover', d, i);
                },
                onmouseout: function (d, i) {
                    console.log('onmouseout', d, i);
                }
            },
            donut: {
                label: {
                    show: false
                },
                title: 'Ans: A',
                width: 15
            },
            legend: {
                hide: true
                // or hide: 'data1'
                // or hide: ['data1', 'data2']
            },
            color: {
                pattern: ['#40c4ff', '#2961ff', '#ff821c', '#4CAF50', '#e9edf2']
            }
        });
    };
    PollComponent = __decorate([
        core_1.Component({
            selector: 'app-poll',
            templateUrl: './poll.component.html',
            styleUrls: ['./poll.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PollComponent);
    return PollComponent;
}());
exports.PollComponent = PollComponent;
//# sourceMappingURL=poll.component.js.map