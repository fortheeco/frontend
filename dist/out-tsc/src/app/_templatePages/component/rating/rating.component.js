"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var NgbdratingBasicComponent = /** @class */ (function () {
    function NgbdratingBasicComponent() {
        this.currentRate = 8;
        this.currentRate2 = 2;
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        // for form integration
        this.ctrl = new forms_1.FormControl(null, forms_1.Validators.required);
    }
    NgbdratingBasicComponent.prototype.toggle = function () {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    };
    NgbdratingBasicComponent = __decorate([
        core_1.Component({
            selector: 'app-ngbd-rating',
            templateUrl: './rating.component.html',
            styles: [
                "\n      .star {\n        font-size: 1.5rem;\n        color: #b0c4de;\n      }\n      .filled {\n        color: #1e90ff;\n      }\n      .heart {\n        position: relative;\n        display: inline-block;\n        font-size: 3rem;\n        color: #d3d3d3;\n      }\n      .full {\n        color: red;\n      }\n      .half {\n        position: absolute;\n        display: inline-block;\n        overflow: hidden;\n        color: red;\n      }\n    "
            ]
        })
    ], NgbdratingBasicComponent);
    return NgbdratingBasicComponent;
}());
exports.NgbdratingBasicComponent = NgbdratingBasicComponent;
//# sourceMappingURL=rating.component.js.map