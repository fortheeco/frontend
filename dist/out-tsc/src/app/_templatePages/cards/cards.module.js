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
var cards_routing_1 = require("./cards.routing");
var basic_component_1 = require("./basic/basic.component");
var custom_component_1 = require("./custom/custom.component");
var weather_component_1 = require("./weather/weather.component");
var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    CardsModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(cards_routing_1.CardsRoutes)],
            declarations: [basic_component_1.BasicComponent, custom_component_1.CustomComponent, weather_component_1.WeatherComponent]
        })
    ], CardsModule);
    return CardsModule;
}());
exports.CardsModule = CardsModule;
//# sourceMappingURL=cards.module.js.map