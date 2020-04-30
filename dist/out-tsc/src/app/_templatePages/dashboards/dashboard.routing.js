"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.DashboardRoutes = [
    {
        path: '',
        component: dashboard4_component_1.Dashboard4Component,
        children: [
            {
                path: 'classic',
                component: dashboard1_component_1.Dashboard1Component,
                data: {
                    title: 'Classic Dashboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Classic Dashboard' }
                    ]
                }
            },
            {
                path: 'analytical',
                component: dashboard2_component_1.Dashboard2Component,
                data: {
                    title: 'Analytical Dashboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Analytical Dashboard' }
                    ]
                }
            },
            {
                path: 'cryptocurrency',
                component: dashboard3_component_1.Dashboard3Component,
                data: {
                    title: 'Cryptocurrency Dashboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Cryptocurrency Dashboard' }
                    ]
                }
            },
            {
                path: 'overview',
                component: dashboard4_component_1.Dashboard4Component,
                data: {
                    title: 'Overview Dashboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Overview Dashboard' }
                    ]
                }
            },
            {
                path: 'ecommerce',
                component: dashboard5_component_1.Dashboard5Component,
                data: {
                    title: 'e-Commerce Dashboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'e-Commerce Dashboard' }
                    ]
                }
            },
            {
                path: 'sale',
                component: dashboard6_component_1.Dashboard6Component,
                data: {
                    title: 'Sale Dashboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Sale Dashboard' }
                    ]
                }
            },
            {
                path: 'general',
                component: dashboard7_component_1.Dashboard7Component,
                data: {
                    title: 'General Dashboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'General Dashboard' }
                    ]
                }
            },
            {
                path: 'trendy',
                component: dashboard8_component_1.Dashboard8Component,
                data: {
                    title: 'Trendy Dashboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Trendy Dashboard' }
                    ]
                }
            },
            {
                path: 'campaign',
                component: dashboard9_component_1.Dashboard9Component,
                data: {
                    title: 'Campaign Dashboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Campaign Dashboard' }
                    ]
                }
            },
            {
                path: 'modern',
                component: dashboard10_component_1.Dashboard10Component,
                data: {
                    title: 'Modern Dashboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Modern Dashboard' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=dashboard.routing.js.map