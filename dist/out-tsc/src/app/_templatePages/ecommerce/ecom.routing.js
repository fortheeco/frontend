"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cart_component_1 = require("./cart/cart.component");
var checkout_component_1 = require("./checkout/checkout.component");
var details_component_1 = require("./details/details.component");
var edit_component_1 = require("./edit/edit.component");
var orders_component_1 = require("./orders/orders.component");
var product_component_1 = require("./product/product.component");
exports.EcomRoutes = [
    {
        path: '',
        children: [
            {
                path: 'cart',
                component: cart_component_1.CartComponent,
                data: {
                    title: 'Cart',
                    urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Cart' }]
                }
            },
            {
                path: 'checkout',
                component: checkout_component_1.CheckoutComponent,
                data: {
                    title: 'Checkout',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Checkout' }
                    ]
                }
            },
            {
                path: 'details',
                component: details_component_1.DetailsComponent,
                data: {
                    title: 'Product Details',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Product Details' }
                    ]
                }
            },
            {
                path: 'edit',
                component: edit_component_1.EditComponent,
                data: {
                    title: 'Edit Product',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Edit Product' }
                    ]
                }
            },
            {
                path: 'orders',
                component: orders_component_1.OrderComponent,
                data: {
                    title: 'Orders',
                    urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Orders' }]
                }
            },
            {
                path: 'products',
                component: product_component_1.ProductComponent,
                data: {
                    title: 'Products',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Products' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=ecom.routing.js.map