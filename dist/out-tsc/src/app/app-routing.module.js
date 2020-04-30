"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var full_component_1 = require("./layouts/full/full.component");
var blank_component_1 = require("./layouts/blank/blank.component");
var _guards_1 = require("./_guards");
exports.Approutes = [
    {
        path: '',
        component: full_component_1.FullComponent,
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                canActivate: [_guards_1.AuthGuard]
            }
        ]
    },
    {
        path: '',
        component: blank_component_1.BlankComponent,
        children: [
            {
                path: 'authentication',
                loadChildren: './authentication/authentication.module#AuthenticationModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/authentication/404'
    }
];
//# sourceMappingURL=app-routing.module.js.map