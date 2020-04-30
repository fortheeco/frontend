"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_google_component_1 = require("./map-google/map-google.component");
exports.MapRoutes = [
    {
        path: '',
        children: [
            {
                path: 'google',
                component: map_google_component_1.MapgoogleComponent,
                data: {
                    title: 'Google Maps',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Google Maps' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=maps.routing.js.map