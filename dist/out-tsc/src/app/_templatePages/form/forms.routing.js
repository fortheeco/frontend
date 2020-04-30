"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basic_component_1 = require("./form-basic/basic.component");
var form_validation_component_1 = require("./form-validation/form-validation.component");
var cr_component_1 = require("./checkbox-radio/cr.component");
var inputs_component_1 = require("./form-inputs/inputs.component");
var grids_component_1 = require("./input-grids/grids.component");
var input_groups_component_1 = require("./input-groups/input-groups.component");
var horizontal_component_1 = require("./form-horizontal/horizontal.component");
var actions_component_1 = require("./form-actions/actions.component");
var row_sep_component_1 = require("./form-row-separator/row-sep.component");
var striped_component_1 = require("./form-striped-row/striped.component");
var detail_component_1 = require("./form-detail/detail.component");
var multiselect_component_1 = require("./multiselect/multiselect.component");
exports.FormsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'formbasic',
                component: basic_component_1.FormBasicComponent,
                data: {
                    title: 'Basic Form',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Basic Form' }
                    ]
                }
            },
            {
                path: 'formvalidation',
                component: form_validation_component_1.FormvalComponent,
                data: {
                    title: 'Form Validation Page',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Form Validation Page' }
                    ]
                }
            },
            {
                path: 'forminputs',
                component: inputs_component_1.ForminputsComponent,
                data: {
                    title: 'Form Inputs',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Form Inputs' }
                    ]
                }
            },
            {
                path: 'inputgroups',
                component: input_groups_component_1.InputgroupsComponent,
                data: {
                    title: 'Input Groups',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Input Groups' }
                    ]
                }
            },
            {
                path: 'inputgrid',
                component: grids_component_1.GridsComponent,
                data: {
                    title: 'Input Grids',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Input Grids' }
                    ]
                }
            },
            {
                path: 'checkboxandradio',
                component: cr_component_1.CheckradioComponent,
                data: {
                    title: 'Checkbox & Radio',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Checkbox & Radio' }
                    ]
                }
            },
            {
                path: 'formhorizontal',
                component: horizontal_component_1.FormhorizontalComponent,
                data: {
                    title: 'Horizontal Forms',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Horizontal Forms' }
                    ]
                }
            },
            {
                path: 'formactions',
                component: actions_component_1.FormactionsComponent,
                data: {
                    title: 'Form Actions',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Form Actions' }
                    ]
                }
            },
            {
                path: 'formrowseparator',
                component: row_sep_component_1.FormrowsepComponent,
                data: {
                    title: 'Row Separator Forms',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Row Separator Forms' }
                    ]
                }
            },
            {
                path: 'formstripedrows',
                component: striped_component_1.FormstripedComponent,
                data: {
                    title: 'Striped Rows',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Striped Rows' }
                    ]
                }
            },
            {
                path: 'formdetail',
                component: detail_component_1.FormdetailComponent,
                data: {
                    title: 'Detail Forms',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Detail Forms' }
                    ]
                }
            },
            {
                path: 'multiselect',
                component: multiselect_component_1.MultiselectComponent,
                data: {
                    title: 'Multiselect',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Multiselect' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=forms.routing.js.map