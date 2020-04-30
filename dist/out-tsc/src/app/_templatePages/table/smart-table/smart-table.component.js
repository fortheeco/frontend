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
var tableData = require("./smart-data-table");
var ng2_smart_table_1 = require("ng2-smart-table");
var SmarttableComponent = /** @class */ (function () {
    function SmarttableComponent() {
        this.settings = tableData.settings;
        this.settings2 = tableData.settings2;
        this.source = new ng2_smart_table_1.LocalDataSource(tableData.data); // create the source
        this.source2 = new ng2_smart_table_1.LocalDataSource(tableData.data); // create the source
    }
    SmarttableComponent = __decorate([
        core_1.Component({
            templateUrl: './smart-table.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], SmarttableComponent);
    return SmarttableComponent;
}());
exports.SmarttableComponent = SmarttableComponent;
//# sourceMappingURL=smart-table.component.js.map