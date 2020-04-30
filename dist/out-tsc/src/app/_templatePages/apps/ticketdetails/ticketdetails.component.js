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
var TicketdetailsComponent = /** @class */ (function () {
    function TicketdetailsComponent() {
    }
    TicketdetailsComponent.prototype.ngAfterViewInit = function () {
        var chart = c3.generate({
            bindto: '#visitor',
            data: {
                columns: [['Open', 4], ['Closed', 2], ['In progress', 2], ['Other', 0]],
                type: 'donut'
            },
            donut: {
                label: {
                    show: false
                },
                title: 'Tickets',
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
    TicketdetailsComponent = __decorate([
        core_1.Component({
            templateUrl: './ticketdetails.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], TicketdetailsComponent);
    return TicketdetailsComponent;
}());
exports.TicketdetailsComponent = TicketdetailsComponent;
//# sourceMappingURL=ticketdetails.component.js.map