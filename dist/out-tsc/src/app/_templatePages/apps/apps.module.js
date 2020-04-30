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
var angular_calendar_1 = require("angular-calendar");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_bootstrap_2 = require("@ng-bootstrap/ng-bootstrap");
var ng2_dragula_1 = require("ng2-dragula/ng2-dragula");
var ngx_quill_1 = require("ngx-quill");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var apps_routing_1 = require("./apps.routing");
var chat_component_1 = require("./chat/chat.component");
var ticketlist_component_1 = require("./ticketlist/ticketlist.component");
var ticketdetails_component_1 = require("./ticketdetails/ticketdetails.component");
var taskboard_component_1 = require("./taskboard/taskboard.component");
var fullcalendar_component_1 = require("./fullcalendar/fullcalendar.component");
var AppsModule = /** @class */ (function () {
    function AppsModule() {
    }
    AppsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_bootstrap_2.NgbModule,
                ng_bootstrap_1.NgbModalModule.forRoot(),
                angular_calendar_1.CalendarModule.forRoot(),
                ngx_quill_1.QuillModule,
                ng2_dragula_1.DragulaModule,
                router_1.RouterModule.forChild(apps_routing_1.AppsRoutes),
                ngx_perfect_scrollbar_1.PerfectScrollbarModule
            ],
            declarations: [
                chat_component_1.ChatComponent,
                ticketlist_component_1.TicketlistComponent,
                ticketdetails_component_1.TicketdetailsComponent,
                taskboard_component_1.TaskboardComponent,
                fullcalendar_component_1.FullcalendarComponent
            ]
        })
    ], AppsModule);
    return AppsModule;
}());
exports.AppsModule = AppsModule;
//# sourceMappingURL=apps.module.js.map