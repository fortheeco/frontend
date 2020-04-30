"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var starter_component_1 = require("./starter.component");
var routes = [
    {
        path: '',
        data: {
            title: 'Starter Page',
            urls: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Starter Page' }
            ]
        },
        component: starter_component_1.StarterComponent
    }
];
var StarterModule = /** @class */ (function () {
    function StarterModule() {
    }
    StarterModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, router_1.RouterModule.forChild(routes)],
            declarations: [starter_component_1.StarterComponent]
        })
    ], StarterModule);
    return StarterModule;
}());
exports.StarterModule = StarterModule;
//# sourceMappingURL=starter.module.js.map