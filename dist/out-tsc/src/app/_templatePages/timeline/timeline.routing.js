"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var center_component_1 = require("./center/center.component");
var left_component_1 = require("./left/left.component");
var right_component_1 = require("./right/right.component");
exports.TimelineRoutes = [
    {
        path: '',
        children: [
            {
                path: 'center',
                component: center_component_1.CenterComponent,
                data: {
                    title: 'Center Timeline',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Center Timeline' }
                    ]
                }
            },
            {
                path: 'left',
                component: left_component_1.LeftComponent,
                data: {
                    title: 'Left Timeline',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Left Timeline' }
                    ]
                }
            },
            {
                path: 'right',
                component: right_component_1.RightComponent,
                data: {
                    title: 'Right Timeline',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Right Timeline' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=timeline.routing.js.map