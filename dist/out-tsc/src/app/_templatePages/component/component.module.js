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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var component_routing_1 = require("./component.routing");
var progressbar_component_1 = require("./progressbar/progressbar.component");
var pagination_component_1 = require("./pagination/pagination.component");
var accordion_component_1 = require("./accordion/accordion.component");
var alert_component_1 = require("./alert/alert.component");
var carousel_component_1 = require("./carousel/carousel.component");
var datepicker_component_1 = require("./datepicker/datepicker.component");
var language_datepicker_component_1 = require("./language-datepicker/language-datepicker.component");
var dropdown_collapse_component_1 = require("./dropdown-collapse/dropdown-collapse.component");
var modal_component_1 = require("./modal/modal.component");
var popover_tooltip_component_1 = require("./popover-tooltip/popover-tooltip.component");
var rating_component_1 = require("./rating/rating.component");
var tabs_component_1 = require("./tabs/tabs.component");
var timepicker_component_1 = require("./timepicker/timepicker.component");
var typehead_component_1 = require("./typehead/typehead.component");
var buttons_component_1 = require("./buttons/buttons.component");
var card_component_1 = require("./card/card.component");
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(component_routing_1.ComponentsRoutes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule
            ],
            declarations: [
                progressbar_component_1.NgbdpregressbarBasicComponent,
                pagination_component_1.NgbdpaginationBasicComponent,
                accordion_component_1.NgbdAccordionBasicComponent,
                alert_component_1.NgbdAlertBasicComponent,
                carousel_component_1.NgbdCarouselBasicComponent,
                datepicker_component_1.NgbdDatepickerBasicComponent,
                language_datepicker_component_1.NgbdDatepickerLanguageComponent,
                dropdown_collapse_component_1.NgbdDropdownBasicComponent,
                modal_component_1.NgbdModalBasicComponent,
                popover_tooltip_component_1.NgbdPopTooltipComponent,
                rating_component_1.NgbdratingBasicComponent,
                tabs_component_1.NgbdtabsBasicComponent,
                timepicker_component_1.NgbdtimepickerBasicComponent,
                typehead_component_1.NgbdtypeheadBasicComponent,
                buttons_component_1.ButtonsComponent,
                card_component_1.CardsComponent
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=component.module.js.map