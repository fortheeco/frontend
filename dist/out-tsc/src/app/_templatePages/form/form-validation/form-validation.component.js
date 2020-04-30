"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormvalComponent = /** @class */ (function () {
    function FormvalComponent() {
        this.powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
        this.hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
        this.login = { username: '', password: '' };
    }
    FormvalComponent = __decorate([
        core_1.Component({
            templateUrl: './form-validation.component.html'
        })
    ], FormvalComponent);
    return FormvalComponent;
}());
exports.FormvalComponent = FormvalComponent;
//# sourceMappingURL=form-validation.component.js.map