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
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_charts_1 = require("ng2-charts");
var ng_chartist_1 = require("ng-chartist");
var ngx_charts_1 = require("@swimlane/ngx-charts");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var angular_calendar_1 = require("angular-calendar");
var dashboard_routing_1 = require("./dashboard.routing");
var dashboard1_component_1 = require("./dashboard1/dashboard1.component");
var dashboard2_component_1 = require("./dashboard2/dashboard2.component");
var dashboard3_component_1 = require("./dashboard3/dashboard3.component");
var dashboard4_component_1 = require("./dashboard4/dashboard4.component");
var dashboard5_component_1 = require("./dashboard5/dashboard5.component");
var dashboard6_component_1 = require("./dashboard6/dashboard6.component");
var dashboard7_component_1 = require("./dashboard7/dashboard7.component");
var dashboard8_component_1 = require("./dashboard8/dashboard8.component");
var dashboard9_component_1 = require("./dashboard9/dashboard9.component");
var dashboard10_component_1 = require("./dashboard10/dashboard10.component");
var dashboard_components_1 = require("./dashboard-components");
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
                ng_chartist_1.ChartistModule,
                router_1.RouterModule.forChild(dashboard_routing_1.DashboardRoutes),
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                angular_calendar_1.CalendarModule.forRoot(),
                ngx_charts_1.NgxChartsModule,
                ngx_datatable_1.NgxDatatableModule
            ],
            declarations: [
                dashboard1_component_1.Dashboard1Component,
                dashboard2_component_1.Dashboard2Component,
                dashboard3_component_1.Dashboard3Component,
                dashboard4_component_1.Dashboard4Component,
                dashboard5_component_1.Dashboard5Component,
                dashboard6_component_1.Dashboard6Component,
                dashboard7_component_1.Dashboard7Component,
                dashboard8_component_1.Dashboard8Component,
                dashboard9_component_1.Dashboard9Component,
                dashboard10_component_1.Dashboard10Component,
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
                dashboard_components_1.WeekpollComponent
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map