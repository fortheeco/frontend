"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var widgets_routing_1 = require("./widgets.routing");
var widget_app_component_1 = require("./apps/widget-app.component");
var widget_data_component_1 = require("./data/widget-data.component");
var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(widgets_routing_1.WidgetRoutes)],
            declarations: [widget_app_component_1.WidgetappComponent, widget_data_component_1.WidgetdataComponent]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());
exports.WidgetsModule = WidgetsModule;
//# sourceMappingURL=widgets.module.js.map