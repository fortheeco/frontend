"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var not_found_component_1 = require("./404/not-found.component");
var lock_component_1 = require("./lock/lock.component");
var login_component_1 = require("./login/login.component");
var login2_component_1 = require("./login2/login2.component");
var signup_component_1 = require("./signup/signup.component");
var signup2_component_1 = require("./signup2/signup2.component");
var changepassword_component_1 = require("./password/changepassword/changepassword.component");
exports.AuthenticationRoutes = [
    {
        path: '',
        children: [
            {
                path: '404',
                component: not_found_component_1.NotfoundComponent
            },
            {
                path: 'lock',
                component: lock_component_1.LockComponent
            },
            {
                path: 'login',
                component: login_component_1.LoginComponent
            },
            {
                path: 'login2',
                component: login2_component_1.Login2Component
            },
            {
                path: 'signup',
                component: signup_component_1.SignupComponent
            },
            {
                path: 'signup2',
                component: signup2_component_1.Signup2Component
            },
            {
                path: 'change-password',
                component: changepassword_component_1.ChangepasswordComponent
            }
        ]
    }
];
//# sourceMappingURL=authentication.routing.js.map