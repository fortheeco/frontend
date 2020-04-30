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
var forms_1 = require("@angular/forms");
var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.model = {
            left: true,
            middle: false,
            right: false
        };
        this.model1 = 1;
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ButtonsComponent.prototype.ngOnInit = function () {
        this.checkboxGroupForm = this.formBuilder.group({
            left: true,
            middle: false,
            right: false
        });
        this.radioGroupForm = this.formBuilder.group({
            model: 1
        });
    };
    ButtonsComponent = __decorate([
        core_1.Component({
            templateUrl: 'buttons.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], ButtonsComponent);
    return ButtonsComponent;
}());
exports.ButtonsComponent = ButtonsComponent;
//# sourceMappingURL=buttons.component.js.map