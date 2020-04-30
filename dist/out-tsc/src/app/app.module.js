"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var http_2 = require("@angular/http");
var _helpers_1 = require("./_helpers");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var core_2 = require("@agm/core");
var angular_datatables_1 = require("angular-datatables");
var ng_multiselect_dropdown_1 = require("ng-multiselect-dropdown");
var full_component_1 = require("./layouts/full/full.component");
var blank_component_1 = require("./layouts/blank/blank.component");
var navigation_component_1 = require("./shared/header-navigation/navigation.component");
var sidebar_component_1 = require("./shared/sidebar/sidebar.component");
var breadcrumb_component_1 = require("./shared/breadcrumb/breadcrumb.component");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var spinner_component_1 = require("./shared/spinner.component");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var ngx_perfect_scrollbar_2 = require("ngx-perfect-scrollbar");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var httpRequestInterceptor_1 = require("./_interceptors/httpRequestInterceptor");
var ngx_papaparse_1 = require("ngx-papaparse");
var statusTranslators_1 = require("./_helpers/statusTranslators");
var menu_items_1 = require("./shared/sidebar/menu-items");
var angularx_qrcode_1 = require("angularx-qrcode");
var ngx_print_1 = require("ngx-print");
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                spinner_component_1.SpinnerComponent,
                full_component_1.FullComponent,
                blank_component_1.BlankComponent,
                navigation_component_1.NavigationComponent,
                breadcrumb_component_1.BreadcrumbComponent,
                sidebar_component_1.SidebarComponent,
            ],
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                ng2_slim_loading_bar_1.SlimLoadingBarModule,
                forms_1.FormsModule,
                ngx_papaparse_1.PapaParseModule,
                forms_1.ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
                angular_datatables_1.DataTablesModule,
                http_2.HttpModule,
                angularx_qrcode_1.QRCodeModule,
                ngx_print_1.NgxPrintModule,
                http_1.HttpClientModule,
                ng_bootstrap_1.NgbModule,
                router_1.RouterModule.forRoot(app_routing_module_1.Approutes),
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule.forRoot(),
                core_2.AgmCoreModule.forRoot({ apiKey: 'AIzaSyDP6cGriBm9-_8g42-j6DiI1BEl3WHdOhk',
                    libraries: ["places"] })
            ],
            providers: [
                statusTranslators_1.StatusTranslators,
                menu_items_1.MenuItems,
                { provide: http_1.HTTP_INTERCEPTORS, useClass: _helpers_1.JwtInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: _helpers_1.ErrorInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: httpRequestInterceptor_1.httpRequestInterceptor, multi: true },
                {
                    provide: ngx_perfect_scrollbar_2.PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map