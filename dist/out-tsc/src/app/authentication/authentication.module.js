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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var not_found_component_1 = require("./404/not-found.component");
var lock_component_1 = require("./lock/lock.component");
var login_component_1 = require("./login/login.component");
var login2_component_1 = require("./login2/login2.component");
var signup_component_1 = require("./signup/signup.component");
var signup2_component_1 = require("./signup2/signup2.component");
var forms_1 = require("@angular/forms");
var authentication_routing_1 = require("./authentication.routing");
var changepassword_component_1 = require("./password/changepassword/changepassword.component");
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(authentication_routing_1.AuthenticationRoutes),
                ng_bootstrap_1.NgbModule
            ],
            declarations: [
                not_found_component_1.NotfoundComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                lock_component_1.LockComponent,
                login2_component_1.Login2Component,
                signup2_component_1.Signup2Component,
                changepassword_component_1.ChangepasswordComponent
            ],
            exports: [
                common_1.CommonModule,
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map