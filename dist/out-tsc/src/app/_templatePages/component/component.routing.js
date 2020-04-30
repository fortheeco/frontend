"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var progressbar_component_1 = require("./progressbar/progressbar.component");
var pagination_component_1 = require("./pagination/pagination.component");
var accordion_component_1 = require("./accordion/accordion.component");
var alert_component_1 = require("./alert/alert.component");
var carousel_component_1 = require("./carousel/carousel.component");
var datepicker_component_1 = require("./datepicker/datepicker.component");
var language_datepicker_component_1 = require("./language-datepicker/language-datepicker.component");
var dropdown_collapse_component_1 = require("./dropdown-collapse/dropdown-collapse.component");
var modal_component_1 = require("./modal/modal.component");
var popover_tooltip_component_1 = require("./popover-tooltip/popover-tooltip.component");
var rating_component_1 = require("./rating/rating.component");
var tabs_component_1 = require("./tabs/tabs.component");
var timepicker_component_1 = require("./timepicker/timepicker.component");
var typehead_component_1 = require("./typehead/typehead.component");
var buttons_component_1 = require("./buttons/buttons.component");
exports.ComponentsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'progressbar',
                component: progressbar_component_1.NgbdpregressbarBasicComponent,
                data: {
                    title: 'Progressbar',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Progressbar' }
                    ]
                }
            },
            {
                path: 'pagination',
                component: pagination_component_1.NgbdpaginationBasicComponent,
                data: {
                    title: 'Pagination',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Pagination' }
                    ]
                }
            },
            {
                path: 'accordion',
                component: accordion_component_1.NgbdAccordionBasicComponent,
                data: {
                    title: 'Accordion',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Accordion' }
                    ]
                }
            },
            {
                path: 'alert',
                component: alert_component_1.NgbdAlertBasicComponent,
                data: {
                    title: 'Alert',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Alert' }
                    ]
                }
            },
            {
                path: 'carousel',
                component: carousel_component_1.NgbdCarouselBasicComponent,
                data: {
                    title: 'Carousel',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Carousel' }
                    ]
                }
            },
            {
                path: 'datepicker',
                component: datepicker_component_1.NgbdDatepickerBasicComponent,
                data: {
                    title: 'Datepicker',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Datepicker' }
                    ]
                }
            },
            {
                path: 'language-datepicker',
                component: language_datepicker_component_1.NgbdDatepickerLanguageComponent,
                data: {
                    title: 'Language Datepicker',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Language Datepicker' }
                    ]
                }
            },
            {
                path: 'dropdown',
                component: dropdown_collapse_component_1.NgbdDropdownBasicComponent,
                data: {
                    title: 'Dropdown',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Dropdown' }
                    ]
                }
            },
            {
                path: 'modal',
                component: modal_component_1.NgbdModalBasicComponent,
                data: {
                    title: 'Modal',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Modal' }
                    ]
                }
            },
            {
                path: 'poptool',
                component: popover_tooltip_component_1.NgbdPopTooltipComponent,
                data: {
                    title: 'Popover & Tooltip',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Popover & Tooltip' }
                    ]
                }
            },
            {
                path: 'rating',
                component: rating_component_1.NgbdratingBasicComponent,
                data: {
                    title: 'Rating',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Rating' }
                    ]
                }
            },
            {
                path: 'tabs',
                component: tabs_component_1.NgbdtabsBasicComponent,
                data: {
                    title: 'Tabs',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Tabs' }
                    ]
                }
            },
            {
                path: 'timepicker',
                component: timepicker_component_1.NgbdtimepickerBasicComponent,
                data: {
                    title: 'Timepicker',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Timepicker' }
                    ]
                }
            },
            {
                path: 'typehead',
                component: typehead_component_1.NgbdtypeheadBasicComponent,
                data: {
                    title: 'Typehead',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Typehead' }
                    ]
                }
            },
            {
                path: 'buttons',
                component: buttons_component_1.ButtonsComponent,
                data: {
                    title: 'Button',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Button' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=component.routing.js.map