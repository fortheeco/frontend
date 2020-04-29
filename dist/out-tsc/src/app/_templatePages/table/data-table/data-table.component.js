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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data = require('./company.json');
var DatatableComponent = /** @class */ (function () {
    function DatatableComponent() {
        var _this = this;
        this.editing = {};
        this.rows = [];
        this.temp = __spreadArrays(data);
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
        this.rows = data;
        this.temp = __spreadArrays(data);
        setTimeout(function () {
            _this.loadingIndicator = false;
        }, 1500);
    }
    DatatableComponent_1 = DatatableComponent;
    DatatableComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table = data;
    };
    DatatableComponent.prototype.updateValue = function (event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex);
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = __spreadArrays(this.rows);
        console.log('UPDATED!', this.rows[rowIndex][cell]);
    };
    var DatatableComponent_1;
    __decorate([
        core_1.ViewChild(DatatableComponent_1),
        __metadata("design:type", DatatableComponent)
    ], DatatableComponent.prototype, "table", void 0);
    DatatableComponent = DatatableComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-data-table',
            templateUrl: './data-table.component.html',
            styleUrls: ['./data-table.css']
        }),
        __metadata("design:paramtypes", [])
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;
//# sourceMappingURL=data-table.component.js.map