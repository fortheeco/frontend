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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var sample_pages_routing_1 = require("./sample-pages.routing");
var hc_component_1 = require("./helper-classes/hc.component");
var invoice_component_1 = require("./invoice/invoice.component");
var profile_component_1 = require("./profile/profile.component");
var pricing_component_1 = require("./pricing/pricing.component");
var SamplePagesModule = /** @class */ (function () {
    function SamplePagesModule() {
    }
    SamplePagesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(sample_pages_routing_1.SamplePagesRoutes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule
            ],
            declarations: [
                hc_component_1.HelperclassesComponent,
                invoice_component_1.InvoiceComponent,
                profile_component_1.ProfileComponent,
                pricing_component_1.PricingComponent
            ]
        })
    ], SamplePagesModule);
    return SamplePagesModule;
}());
exports.SamplePagesModule = SamplePagesModule;
//# sourceMappingURL=sample-pages.module.js.map