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
var forms_routing_1 = require("./forms.routing");
var basic_component_1 = require("./form-basic/basic.component");
var form_validation_component_1 = require("./form-validation/form-validation.component");
var cr_component_1 = require("./checkbox-radio/cr.component");
var inputs_component_1 = require("./form-inputs/inputs.component");
var grids_component_1 = require("./input-grids/grids.component");
var input_groups_component_1 = require("./input-groups/input-groups.component");
var horizontal_component_1 = require("./form-horizontal/horizontal.component");
var actions_component_1 = require("./form-actions/actions.component");
var row_sep_component_1 = require("./form-row-separator/row-sep.component");
var striped_component_1 = require("./form-striped-row/striped.component");
var detail_component_1 = require("./form-detail/detail.component");
var multiselect_component_1 = require("./multiselect/multiselect.component");
var ng_multiselect_dropdown_1 = require("ng-multiselect-dropdown");
var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(forms_routing_1.FormsRoutes), forms_1.FormsModule, ng_multiselect_dropdown_1.NgMultiSelectDropDownModule.forRoot()],
            declarations: [
                basic_component_1.FormBasicComponent,
                form_validation_component_1.FormvalComponent,
                cr_component_1.CheckradioComponent,
                inputs_component_1.ForminputsComponent,
                grids_component_1.GridsComponent,
                input_groups_component_1.InputgroupsComponent,
                horizontal_component_1.FormhorizontalComponent,
                actions_component_1.FormactionsComponent,
                row_sep_component_1.FormrowsepComponent,
                striped_component_1.FormstripedComponent,
                detail_component_1.FormdetailComponent,
                multiselect_component_1.MultiselectComponent
            ]
        })
    ], FormModule);
    return FormModule;
}());
exports.FormModule = FormModule;
//# sourceMappingURL=forms.module.js.map