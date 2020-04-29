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
var ecom_routing_1 = require("./ecom.routing");
var cart_component_1 = require("./cart/cart.component");
var checkout_component_1 = require("./checkout/checkout.component");
var details_component_1 = require("./details/details.component");
var edit_component_1 = require("./edit/edit.component");
var orders_component_1 = require("./orders/orders.component");
var product_component_1 = require("./product/product.component");
var EcomModule = /** @class */ (function () {
    function EcomModule() {
    }
    EcomModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(ecom_routing_1.EcomRoutes), forms_1.FormsModule, ng_bootstrap_1.NgbModule],
            declarations: [
                cart_component_1.CartComponent,
                checkout_component_1.CheckoutComponent,
                details_component_1.DetailsComponent,
                edit_component_1.EditComponent,
                orders_component_1.OrderComponent,
                product_component_1.ProductComponent
            ]
        })
    ], EcomModule);
    return EcomModule;
}());
exports.EcomModule = EcomModule;
//# sourceMappingURL=ecom.module.js.map