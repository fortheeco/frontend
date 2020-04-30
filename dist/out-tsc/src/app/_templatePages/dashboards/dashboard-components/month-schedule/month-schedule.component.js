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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var date_fns_1 = require("date-fns");
var rxjs_1 = require("rxjs");
var colors = {
    red: {
        primary: '#f62d51',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#2962FF',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#ffbc34',
        secondary: '#FDF1BA'
    }
};
var MonthscheduleComponent = /** @class */ (function () {
    function MonthscheduleComponent(modal) {
        var _this = this;
        this.modal = modal;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil text-white"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times  text-white"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs_1.Subject();
        this.events = [
            {
                start: date_fns_1.subDays(date_fns_1.startOfDay(new Date()), 1),
                end: date_fns_1.addDays(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            },
            {
                start: date_fns_1.startOfDay(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: date_fns_1.subDays(date_fns_1.endOfMonth(new Date()), 3),
                end: date_fns_1.addDays(date_fns_1.endOfMonth(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            },
            {
                start: date_fns_1.addHours(date_fns_1.startOfDay(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    MonthscheduleComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (date_fns_1.isSameMonth(date, this.viewDate)) {
            if ((date_fns_1.isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    MonthscheduleComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    MonthscheduleComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    MonthscheduleComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: date_fns_1.startOfDay(new Date()),
            end: date_fns_1.endOfDay(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    __decorate([
        core_1.ViewChild('modalContent'),
        __metadata("design:type", core_1.TemplateRef)
    ], MonthscheduleComponent.prototype, "modalContent", void 0);
    MonthscheduleComponent = __decorate([
        core_1.Component({
            selector: 'app-month-schedule',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: './month-schedule.component.html'
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
    ], MonthscheduleComponent);
    return MonthscheduleComponent;
}());
exports.MonthscheduleComponent = MonthscheduleComponent;
//# sourceMappingURL=month-schedule.component.js.map