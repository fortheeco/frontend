"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MultiselectComponent = /** @class */ (function () {
    function MultiselectComponent() {
        this.dropdownList = [];
        this.cities = [];
        this.selectedItems = [];
        this.singleselectedItems = [];
        this.dropdownSettings = {};
        this.singledropdownSettings = {};
        this.closeDropdownSelection = false;
    }
    MultiselectComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { item_id: 1, item_text: 'Mumbai' },
            { item_id: 2, item_text: 'Bangaluru' },
            { item_id: 3, item_text: 'Pune' },
            { item_id: 4, item_text: 'Navsari' },
            { item_id: 5, item_text: 'New Delhi' }
        ];
        this.cities = ['Mumbai', 'New Delhi', 'Bangaluru', 'Pune', 'Navsari'];
        this.selectedItems = [
            { item_id: 3, item_text: 'Pune' },
            { item_id: 4, item_text: 'Navsari' }
        ];
        this.singleselectedItems = ['Pune'];
        this.singledropdownSettings = {
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: this.closeDropdownSelection
        };
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    };
    MultiselectComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    MultiselectComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    MultiselectComponent = __decorate([
        core_1.Component({
            selector: 'app-multiselect',
            templateUrl: './multiselect.component.html',
            styleUrls: ['./multiselect.component.css']
        })
    ], MultiselectComponent);
    return MultiselectComponent;
}());
exports.MultiselectComponent = MultiselectComponent;
//# sourceMappingURL=multiselect.component.js.map