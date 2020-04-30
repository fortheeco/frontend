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
var forms_1 = require("@angular/forms");
var pipes_module_1 = require("./pipes/pipes.module");
var app_state_1 = require("./app.state");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var mail_component_1 = require("./mail.component");
var mail_compose_component_1 = require("./mail-compose/mail-compose.component");
var mail_list_component_1 = require("./mail-list/mail-list.component");
var mail_detail_component_1 = require("./mail-detail/mail-detail.component");
exports.routes = [
    {
        path: '',
        component: mail_component_1.MailComponent,
        children: [
            { path: '', redirectTo: 'mail-list/inbox', pathMatch: 'full' },
            { path: 'mail-list/:type', component: mail_list_component_1.MailListComponent },
            { path: 'mail-compose', component: mail_compose_component_1.MailComposeComponent },
            { path: 'mail-list/:type/:id', component: mail_detail_component_1.MailDetailComponent }
        ]
    }
];
var MailModule = /** @class */ (function () {
    function MailModule() {
    }
    MailModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                pipes_module_1.PipesModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                router_1.RouterModule.forChild(exports.routes)
            ],
            declarations: [
                mail_component_1.MailComponent,
                mail_compose_component_1.MailComposeComponent,
                mail_list_component_1.MailListComponent,
                mail_detail_component_1.MailDetailComponent
            ],
            providers: [app_state_1.AppState]
        })
    ], MailModule);
    return MailModule;
}());
exports.MailModule = MailModule;
//# sourceMappingURL=mail.module.js.map