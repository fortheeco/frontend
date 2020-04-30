"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var addproduct_component_1 = require("../dashboard/addproduct/addproduct.component");
var products_component_1 = require("../dashboard/products/products.component");
var productbatches_component_1 = require("../dashboard/productbatches/productbatches.component");
var addproductbatch_component_1 = require("../dashboard/addproductbatch/addproductbatch.component");
var addmiddleman_component_1 = require("../dashboard/addmiddleman/addmiddleman.component");
var middlemen_component_1 = require("../dashboard/middlemen/middlemen.component");
var agents_component_1 = require("./agents/agents.component");
var add_agent_component_1 = require("./add-agent/add-agent.component");
var request_delivery_component_1 = require("./request-delivery/request-delivery.component");
var incoming_requests_component_1 = require("./incoming-requests/incoming-requests.component");
var requests_component_1 = require("./requests/requests.component");
var request_pickup_component_1 = require("./request-pickup/request-pickup.component");
var deliveries_component_1 = require("./deliveries/deliveries.component");
var view_delivery_component_1 = require("./view-delivery/view-delivery.component");
var profile_component_1 = require("./profile/profile.component");
var staff_module_1 = require("./staff/staff.module");
var add_component_1 = require("./staff/add/add.component");
exports.DashboardRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: home_component_1.HomeComponent,
                data: {
                    title: 'Home',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Home' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'products',
                component: products_component_1.ProductsComponent,
                data: {
                    title: 'Products',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Products' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'add-product',
                component: addproduct_component_1.AddproductComponent,
                data: {
                    title: 'Products',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Add Product' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'add-product-batch',
                component: addproductbatch_component_1.AddproductbatchComponent,
                data: {
                    title: 'Add Product Batch',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Add Product Batch' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'product-batches',
                component: productbatches_component_1.ProductbatchesComponent,
                data: {
                    title: 'Product Batches',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Product Batches' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'add-middleman',
                component: addmiddleman_component_1.AddmiddlemanComponent,
                data: {
                    title: 'Add Distributor',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Add Distributor' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'middlemen',
                component: middlemen_component_1.MiddlemenComponent,
                data: {
                    title: 'Distributors',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Distributors' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'agents',
                component: agents_component_1.AgentsComponent,
                data: {
                    title: 'Agents',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Agents' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'add-agent',
                component: add_agent_component_1.AddAgentComponent,
                data: {
                    title: 'Add Agents',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Add Agent' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'request-pickup',
                component: request_pickup_component_1.RequestPickupComponent,
                data: {
                    title: 'Request Pickup',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Request Pickup' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'incoming-requests',
                component: incoming_requests_component_1.IncomingRequestsComponent,
                data: {
                    title: 'Incoming Requests',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Incoming Requests' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'pickup-requests',
                component: requests_component_1.RequestsComponent,
                data: {
                    title: 'Your Pickups',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Pickup Requests' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'deliveries',
                component: deliveries_component_1.DeliveriesComponent,
                data: {
                    title: 'Deliveries',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Deliveries' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'profile',
                component: profile_component_1.ProfileComponent,
                data: {
                    title: 'Profile',
                    urls: [
                        { title: 'Profile', url: '/profile' },
                        { title: 'Profile' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'deliveries/request',
                component: request_delivery_component_1.RequestDeliveryComponent,
                data: {
                    title: 'Request Delivery',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Request Delivery' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'deliveries/view/:id',
                component: view_delivery_component_1.ViewDeliveryComponent,
                data: {
                    title: 'View Delivery',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'View Delivery' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'staff',
                component: staff_module_1.StaffModule,
                data: {
                    title: 'Staff',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Staff' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'staff/add',
                component: add_component_1.AddComponent,
                data: {
                    title: 'Add Staff',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Add Staff' }
                    ]
                }
            }
        ]
    },
    // { path: 'staff', loadChildren: './staff/staff-routing.module#StaffRoutingModule' },
    {
        path: '',
        redirectTo: ''
    },
];
// import { StaffRoutingModule } from './staff/staff-routing.module';
//# sourceMappingURL=dashboard.routing.js.map