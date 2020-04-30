"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hc_component_1 = require("./helper-classes/hc.component");
var invoice_component_1 = require("./invoice/invoice.component");
var profile_component_1 = require("./profile/profile.component");
var pricing_component_1 = require("./pricing/pricing.component");
exports.SamplePagesRoutes = [
    {
        path: '',
        children: [
            {
                path: 'helperclasses',
                component: hc_component_1.HelperclassesComponent,
                data: {
                    title: 'Helper Classes',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Helper Classes' }
                    ]
                }
            },
            {
                path: 'invoice',
                component: invoice_component_1.InvoiceComponent,
                data: {
                    title: 'Invoice',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Invoice Page' }
                    ]
                }
            },
            {
                path: 'profile',
                component: profile_component_1.ProfileComponent,
                data: {
                    title: 'Profile',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Profile Page' }
                    ]
                }
            },
            {
                path: 'pricing',
                component: pricing_component_1.PricingComponent,
                data: {
                    title: 'Pricing',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Pricing Page' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=sample-pages.routing.js.map