"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var widget_app_component_1 = require("./apps/widget-app.component");
var widget_data_component_1 = require("./data/widget-data.component");
exports.WidgetRoutes = [
    {
        path: '',
        children: [
            {
                path: 'apps',
                component: widget_app_component_1.WidgetappComponent,
                data: {
                    title: 'Widget Apps',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Widget Apps' }
                    ]
                }
            },
            {
                path: 'data',
                component: widget_data_component_1.WidgetdataComponent,
                data: {
                    title: 'Widget Data',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Widget Data' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=widgets.routing.js.map