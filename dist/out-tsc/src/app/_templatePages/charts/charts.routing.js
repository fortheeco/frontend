"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chartistjs_component_1 = require("./chartist-js/chartistjs.component");
var chartjs_component_1 = require("./chart-js/chartjs.component");
var ngx_chart_component_1 = require("./ngx-charts/ngx-chart.component");
exports.ChartsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'chartistjs',
                component: chartistjs_component_1.ChartistjsComponent,
                data: {
                    title: 'Chartis js',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Chartis js Page' }
                    ]
                }
            },
            {
                path: 'chartjs',
                component: chartjs_component_1.ChartjsComponent,
                data: {
                    title: 'Chart js',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Chart js Page' }
                    ]
                }
            },
            {
                path: 'ngxchart',
                component: ngx_chart_component_1.NgxChartComponent,
                data: {
                    title: 'Ngx Charts',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Ngx Charts' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=charts.routing.js.map