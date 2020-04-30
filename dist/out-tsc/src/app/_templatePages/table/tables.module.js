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
var router_1 = require("@angular/router");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var ng2_smart_table_1 = require("ng2-smart-table");
var tables_routing_1 = require("./tables.routing");
var data_table_component_1 = require("./data-table/data-table.component");
var smart_table_component_1 = require("./smart-table/smart-table.component");
var basic_component_1 = require("./basic/basic.component");
var dark_component_1 = require("./dark-basic/dark.component");
var color_component_1 = require("./color-table/color.component");
var size_component_1 = require("./sizing/size.component");
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(tables_routing_1.TablesRoutes),
                common_1.CommonModule,
                ngx_datatable_1.NgxDatatableModule,
                ng2_smart_table_1.Ng2SmartTableModule
            ],
            declarations: [
                data_table_component_1.DatatableComponent,
                basic_component_1.BasictableComponent,
                dark_component_1.DarktableComponent,
                color_component_1.ColortableComponent,
                size_component_1.TablesizeComponent,
                smart_table_component_1.SmarttableComponent
            ]
        })
    ], TablesModule);
    return TablesModule;
}());
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map