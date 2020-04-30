"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_table_component_1 = require("./data-table/data-table.component");
var smart_table_component_1 = require("./smart-table/smart-table.component");
var basic_component_1 = require("./basic/basic.component");
var dark_component_1 = require("./dark-basic/dark.component");
var color_component_1 = require("./color-table/color.component");
var size_component_1 = require("./sizing/size.component");
exports.TablesRoutes = [
    {
        path: '',
        children: [
            {
                path: 'datatable',
                component: data_table_component_1.DatatableComponent,
                data: {
                    title: 'Data Table',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Data Table' }
                    ]
                }
            },
            {
                path: 'basictables',
                component: basic_component_1.BasictableComponent,
                data: {
                    title: 'Basic Tables',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Basic Tables' }
                    ]
                }
            },
            {
                path: 'darktables',
                component: dark_component_1.DarktableComponent,
                data: {
                    title: 'Dark Tables',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Dark Tables' }
                    ]
                }
            },
            {
                path: 'colortables',
                component: color_component_1.ColortableComponent,
                data: {
                    title: 'Color Tables',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Color Tables' }
                    ]
                }
            },
            {
                path: 'tablesizing',
                component: size_component_1.TablesizeComponent,
                data: {
                    title: 'Table Sizing',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Table Sizing' }
                    ]
                }
            },
            {
                path: 'smarttable',
                component: smart_table_component_1.SmarttableComponent,
                data: {
                    title: 'Smart Table',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Smart Table' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=tables.routing.js.map