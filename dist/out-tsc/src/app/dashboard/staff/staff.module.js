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
var add_component_1 = require("./add/add.component");
var staff_component_1 = require("./staff.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var StaffModule = /** @class */ (function () {
    function StaffModule() {
    }
    StaffModule = __decorate([
        core_1.NgModule({
            declarations: [add_component_1.AddComponent, staff_component_1.StaffComponent],
            imports: [
                ng_bootstrap_1.NgbModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_datatable_1.NgxDatatableModule,
            ],
            entryComponents: [
                add_component_1.AddComponent,
                staff_component_1.StaffComponent
            ]
        })
    ], StaffModule);
    return StaffModule;
}());
exports.StaffModule = StaffModule;
//# sourceMappingURL=staff.module.js.map