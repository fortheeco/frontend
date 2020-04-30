"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fontawesome_component_1 = require("./fontawesome/fontawesome.component");
var simpleline_component_1 = require("./simpleline/simpleline.component");
var material_component_1 = require("./material/material.component");
exports.IconsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'fontawesome',
                component: fontawesome_component_1.FontawesomeComponent,
                data: {
                    title: 'FontAwesome',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'FontAwesome' }
                    ]
                }
            },
            {
                path: 'simpleline',
                component: simpleline_component_1.SimplelineComponent,
                data: {
                    title: 'Simple-Line-Icon',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Simple-Line-Icon' }
                    ]
                }
            },
            {
                path: 'material',
                component: material_component_1.MaterialComponent,
                data: {
                    title: 'Material-Icon',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Material-Icon' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=icons.routing.js.map