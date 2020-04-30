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
var icons_routing_1 = require("./icons.routing");
var fontawesome_component_1 = require("./fontawesome/fontawesome.component");
var simpleline_component_1 = require("./simpleline/simpleline.component");
var material_component_1 = require("./material/material.component");
var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(icons_routing_1.IconsRoutes), forms_1.FormsModule],
            declarations: [fontawesome_component_1.FontawesomeComponent, simpleline_component_1.SimplelineComponent, material_component_1.MaterialComponent]
        })
    ], IconsModule);
    return IconsModule;
}());
exports.IconsModule = IconsModule;
//# sourceMappingURL=icons.module.js.map