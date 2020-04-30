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
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_charts_1 = require("ng2-charts");
var ng_chartist_1 = require("ng-chartist");
var ngx_charts_1 = require("@swimlane/ngx-charts");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var angular_calendar_1 = require("angular-calendar");
var dashboard_routing_1 = require("./dashboard.routing");
var home_component_1 = require("./home/home.component");
var settings_component_1 = require("./settings/settings.component");
var forms_1 = require("@angular/forms");
var core_2 = require("@agm/core");
var angularx_qrcode_1 = require("angularx-qrcode");
var dashboard_components_1 = require("./dashboard-components");
var addproduct_component_1 = require("../dashboard/addproduct/addproduct.component");
var products_component_1 = require("../dashboard/products/products.component");
var productbatches_component_1 = require("../dashboard/productbatches/productbatches.component");
var addproductbatch_component_1 = require("../dashboard/addproductbatch/addproductbatch.component");
var addmiddleman_component_1 = require("../dashboard/addmiddleman/addmiddleman.component");
var middlemen_component_1 = require("../dashboard/middlemen/middlemen.component");
var middlemen_component_2 = require("../dashboard/middlemen/middlemen.component");
var products_component_2 = require("../dashboard/products/products.component");
var products_component_3 = require("../dashboard/products/products.component");
var products_component_4 = require("../dashboard/products/products.component");
var productbatches_component_2 = require("../dashboard/productbatches/productbatches.component");
var productbatches_component_3 = require("../dashboard/productbatches/productbatches.component");
var productbatches_component_4 = require("../dashboard/productbatches/productbatches.component");
var productbatches_component_5 = require("../dashboard/productbatches/productbatches.component");
var agents_component_1 = require("./agents/agents.component");
var agents_component_2 = require("./agents/agents.component");
var add_agent_component_1 = require("./add-agent/add-agent.component");
var request_delivery_component_1 = require("./request-delivery/request-delivery.component");
var incoming_requests_component_1 = require("./incoming-requests/incoming-requests.component");
var requests_component_1 = require("./requests/requests.component");
var incoming_requests_component_2 = require("./incoming-requests/incoming-requests.component");
var request_pickup_component_1 = require("./request-pickup/request-pickup.component");
var deliveries_component_1 = require("./deliveries/deliveries.component");
var ngx_print_1 = require("ngx-print");
var view_delivery_component_1 = require("./view-delivery/view-delivery.component");
var view_delivery_component_2 = require("./view-delivery/view-delivery.component");
var profile_component_1 = require("./profile/profile.component");
var staff_module_1 = require("./staff/staff.module");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                ng_bootstrap_1.NgbModule,
                ng2_charts_1.ChartsModule,
                angularx_qrcode_1.QRCodeModule,
                staff_module_1.StaffModule,
                ng_chartist_1.ChartistModule,
                router_1.RouterModule.forChild(dashboard_routing_1.DashboardRoutes),
                core_2.AgmCoreModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                angular_calendar_1.CalendarModule.forRoot(),
                ngx_charts_1.NgxChartsModule,
                forms_1.ReactiveFormsModule,
                ngx_datatable_1.NgxDatatableModule,
                ngx_print_1.NgxPrintModule
            ],
            declarations: [
                products_component_3.EditProductModalContent,
                products_component_2.ViewProductModalContent,
                products_component_4.DeleteProductModalContent,
                home_component_1.HomeComponent,
                settings_component_1.SettingsComponent,
                dashboard_components_1.ActivevisitComponent,
                dashboard_components_1.VisitorComponent,
                dashboard_components_1.ActivitypagesComponent,
                dashboard_components_1.CamStatsComponent,
                dashboard_components_1.CamoverComponent,
                dashboard_components_1.ConversionEarningsComponent,
                dashboard_components_1.ChartComponent,
                dashboard_components_1.CurrencyComponent,
                dashboard_components_1.MarketComponent,
                dashboard_components_1.OrderComponent,
                dashboard_components_1.CryptoComponent,
                dashboard_components_1.TradeComponent,
                dashboard_components_1.DeviceSalesComponent,
                dashboard_components_1.EarningsComponent,
                dashboard_components_1.EcomSalesComponent,
                dashboard_components_1.EcomorderComponent,
                dashboard_components_1.EcomproductComponent,
                dashboard_components_1.EcomReviewComponent,
                dashboard_components_1.StatsComponent,
                dashboard_components_1.EmailComponent,
                dashboard_components_1.Emailcompaign2Component,
                dashboard_components_1.FeedsComponent,
                dashboard_components_1.InfocardComponent,
                dashboard_components_1.MixstatsComponent,
                dashboard_components_1.MonthoverviewComponent,
                dashboard_components_1.MonthscheduleComponent,
                dashboard_components_1.MonthviewComponent,
                dashboard_components_1.PollComponent,
                dashboard_components_1.ProapprComponent,
                dashboard_components_1.ProfileactivityComponent,
                dashboard_components_1.ProjectComponent,
                dashboard_components_1.Project2Component,
                dashboard_components_1.RealdataComponent,
                dashboard_components_1.RealtimevisitComponent,
                dashboard_components_1.ChatComponent,
                dashboard_components_1.CommentComponent,
                dashboard_components_1.RpbComponent,
                dashboard_components_1.RevenueviewsComponent,
                dashboard_components_1.ReviewComponent,
                dashboard_components_1.SalelocationComponent,
                dashboard_components_1.SalesComponent,
                dashboard_components_1.SocialComponent,
                dashboard_components_1.TasklistComponent,
                dashboard_components_1.ToplocationsComponent,
                dashboard_components_1.TopreferralsComponent,
                dashboard_components_1.TopsellComponent,
                dashboard_components_1.UserprofileComponent,
                dashboard_components_1.WeatherheaderComponent,
                dashboard_components_1.WeathercardComponent,
                dashboard_components_1.WeekpollComponent,
                addproduct_component_1.AddproductComponent,
                products_component_1.ProductsComponent,
                productbatches_component_1.ProductbatchesComponent,
                addproductbatch_component_1.AddproductbatchComponent,
                addmiddleman_component_1.AddmiddlemanComponent,
                middlemen_component_1.MiddlemenComponent,
                middlemen_component_2.RevokeModalContent,
                productbatches_component_2.ViewProductBatchModalContent,
                productbatches_component_3.EditProductBatchModalContent,
                productbatches_component_4.DeleteProductBatchModalContent,
                view_delivery_component_2.allBoxesQRModalContent,
                productbatches_component_5.ProductBatchQRModalContent,
                agents_component_1.AgentsComponent,
                add_agent_component_1.AddAgentComponent,
                agents_component_2.RemoveAgentModalContent,
                request_delivery_component_1.RequestDeliveryComponent,
                incoming_requests_component_1.IncomingRequestsComponent,
                requests_component_1.RequestsComponent,
                incoming_requests_component_2.ViewRequestModalContent,
                request_pickup_component_1.RequestPickupComponent,
                deliveries_component_1.DeliveriesComponent,
                view_delivery_component_1.ViewDeliveryComponent,
                profile_component_1.ProfileComponent,
            ],
            entryComponents: [
                products_component_2.ViewProductModalContent,
                products_component_3.EditProductModalContent,
                products_component_4.DeleteProductModalContent,
                productbatches_component_2.ViewProductBatchModalContent,
                productbatches_component_3.EditProductBatchModalContent,
                productbatches_component_4.DeleteProductBatchModalContent,
                incoming_requests_component_1.IncomingRequestsComponent,
                incoming_requests_component_2.ViewRequestModalContent,
                productbatches_component_5.ProductBatchQRModalContent,
                view_delivery_component_2.allBoxesQRModalContent,
                middlemen_component_2.RevokeModalContent,
                agents_component_2.RemoveAgentModalContent
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map