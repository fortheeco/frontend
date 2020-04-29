"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basic_component_1 = require("./basic/basic.component");
var custom_component_1 = require("./custom/custom.component");
var weather_component_1 = require("./weather/weather.component");
exports.CardsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'basiccards',
                component: basic_component_1.BasicComponent,
                data: {
                    title: 'Basic Cards',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Basic Cards' }
                    ]
                }
            },
            {
                path: 'customcards',
                component: custom_component_1.CustomComponent,
                data: {
                    title: 'Custom Cards',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Custom Cards' }
                    ]
                }
            },
            {
                path: 'weathercards',
                component: weather_component_1.WeatherComponent,
                data: {
                    title: 'Weather Cards',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Weather Cards' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=cards.routing.js.map