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
var NgbdPopTooltipComponent = /** @class */ (function () {
    function NgbdPopTooltipComponent() {
        this.greeting = {};
        this.name = 'World';
    }
    NgbdPopTooltipComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.popover.isOpen();
        this.popover.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover.open(greeting);
        }
    };
    NgbdPopTooltipComponent.prototype.toggleWithGreeting = function (tooltip, greeting) {
        if (tooltip.isOpen()) {
            tooltip.close();
        }
        else {
            tooltip.open({ greeting: greeting });
        }
    };
    NgbdPopTooltipComponent.prototype.recordShown = function () {
        this.lastShown = new Date();
    };
    NgbdPopTooltipComponent.prototype.recordHidden = function () {
        this.lastHidden = new Date();
    };
    __decorate([
        core_1.ViewChild('p'),
        __metadata("design:type", Object)
    ], NgbdPopTooltipComponent.prototype, "popover", void 0);
    NgbdPopTooltipComponent = __decorate([
        core_1.Component({
            selector: 'app-ngbd-popover-tooltip',
            templateUrl: './popover-tooltip.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [
                "\n      .card {\n        overflow: hidden;\n      }\n      .my-custom-class {\n        background: aliceblue;\n        font-size: 125%;\n      }\n      .my-custom-class .arrow::after {\n        border-top-color: aliceblue;\n      }\n    "
            ]
        })
    ], NgbdPopTooltipComponent);
    return NgbdPopTooltipComponent;
}());
exports.NgbdPopTooltipComponent = NgbdPopTooltipComponent;
//# sourceMappingURL=popover-tooltip.component.js.map