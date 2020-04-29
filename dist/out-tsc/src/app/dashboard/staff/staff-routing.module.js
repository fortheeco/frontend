"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var add_component_1 = require("./add/add.component");
var router_1 = require("@angular/router");
exports.staffRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: './staff.component#StaffModule',
                // component: StaffComponent,
                data: {
                    title: '',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Staff List' }
                    ]
                }
            },
            {
                path: '',
                component: add_component_1.AddComponent,
                data: {
                    title: 'add',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Add Staff' }
                    ]
                }
            }
        ]
    }
];
var StaffRoutingModule = /** @class */ (function () {
    function StaffRoutingModule() {
    }
    StaffRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(exports.staffRoutes)],
            exports: [router_1.RouterModule]
        })
    ], StaffRoutingModule);
    return StaffRoutingModule;
}());
exports.StaffRoutingModule = StaffRoutingModule;
//# sourceMappingURL=staff-routing.module.js.map