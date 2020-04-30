"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userData = JSON.parse(localStorage.getItem('currentUser'));
var role = "";
// this.interval = setInterval(() => { 
//   let userData = JSON.parse(localStorage.getItem('currentUser'));
// }, 1000);
// if(userData){
//   role = userData.user.role;
// }
// console.log(role);
// switch (role) {
//   case "manufacturer":
//       items = 
//             [
//               {
//                 path: '/dashboard',
//                 title: 'Home',
//                 icon: 'mdi mdi-home',
//                 class: '',
//                 extralink: false,
//                 submenu: []
//               },
//               {
//                 path: '',
//                 title: 'Products',
//                 icon: 'mdi mdi-cart',
//                 class: 'has-arrow',
//                 extralink: false,
//                 submenu: [
//                   {
//                     path: '/dashboard/add-product',
//                     title: 'Add Product',
//                     icon: 'icon icon-plus',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   },
//                   {
//                     path: '/dashboard/products',
//                     title: 'View Products',
//                     icon: 'icon icon-list',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   },
//                   {
//                     path: '/dashboard/add-product-batch',
//                     title: 'Add Batch',
//                     icon: 'icon icon-plus',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   },
//                   {
//                     path: '/dashboard/product-batches',
//                     title: 'View Batches',
//                     icon: 'icon icon-list',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   },
//                 ]
//               },
//               {
//                 path: '',
//                 title: 'Distributors',
//                 icon: 'mdi mdi-account-network',
//                 class: 'has-arrow',
//                 extralink: false,
//                 submenu: [
//                   {
//                     path: '/dashboard/add-middleman',
//                     title: 'Add Distributor',
//                     icon: 'icon icon-plus',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   },
//                   {
//                     path: '/dashboard/middlemen',
//                     title: 'View Distributors',
//                     icon: 'icon icon-list',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   }
//                 ]
//               },
//               {
//                 path: '',
//                 title: 'Requests',
//                 icon: 'mdi mdi-swap-horizontal',
//                 class: 'has-arrow',
//                 extralink: false,
//                 submenu: [
//                   {
//                     path: '/dashboard/request-pickup',
//                     title: 'Request Pickup',
//                     icon: 'icon icon-plus',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   },
//                   {
//                     path: '/dashboard/incoming-requests',
//                     title: 'Incoming Requests',
//                     icon: 'icon icon-list',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   },
//                   {
//                     path: '/dashboard/pickup-requests',
//                     title: 'Pickup Requests',
//                     icon: 'icon icon-list',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   }
//                 ]
//               },
//               {
//                 path: '',
//                 title: 'Deliveries',
//                 icon: 'mdi mdi-swap-vertical',
//                 class: 'has-arrow',
//                 extralink: false,
//                 submenu: [
//                   {
//                     path: '/dashboard/deliveries/request',
//                     title: 'Request Delivery',
//                     icon: 'icon icon-plus',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   },
//                   {
//                     path: '/dashboard/deliveries',
//                     title: 'Your Deliveries',
//                     icon: 'icon icon-list',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   }
//                 ]
//               },
//               {
//                 path: '',
//                 title: 'Agents',
//                 icon: 'mdi mdi-truck',
//                 class: 'has-arrow',
//                 extralink: false,
//                 submenu: [
//                   {
//                     path: '/dashboard/add-agent',
//                     title: 'Add Agent',
//                     icon: 'icon icon-plus',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   },
//                   {
//                     path: '/dashboard/agents',
//                     title: 'View Agents',
//                     icon: 'icon icon-list',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   }
//                 ]
//               },
//               {
//                 path: '/dashboard/profile',
//                 title: 'Profile',
//                 icon: 'mdi mdi-account',
//                 class: '',
//                 extralink: false,
//                 submenu: []
//               },
//             ];
//     break;
//   case "middleman":
//       items = 
//             [
//               {
//                 path: '/dashboard',
//                 title: 'Home',
//                 icon: 'mdi mdi-home',
//                 class: '',
//                 extralink: false,
//                 submenu: []
//               },
//               {
//                 path: '',
//                 title: 'Distributors',
//                 icon: 'mdi mdi-account-network',
//                 class: 'has-arrow',
//                 extralink: false,
//                 submenu: [
//                   {
//                     path: '/dashboard/add-middleman',
//                     title: 'Add Distributor',
//                     icon: 'icon icon-plus',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   },
//                   {
//                     path: '/dashboard/middlemen',
//                     title: 'View Distributors',
//                     icon: 'icon icon-list',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   }
//                 ]
//               },
//               {
//                 path: '',
//                 title: 'Requests',
//                 icon: 'mdi mdi-swap-horizontal',
//                 class: 'has-arrow',
//                 extralink: false,
//                 submenu: [
//                   {
//                     path: '/dashboard/request-delivery',
//                     title: 'Request Delivery',
//                     icon: 'icon icon-plus',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   },
//                   {
//                     path: '/dashboard/incoming-requests',
//                     title: 'Incoming Requests',
//                     icon: 'icon icon-list',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   },
//                   {
//                     path: '/dashboard/your-requests',
//                     title: 'Your Requests',
//                     icon: 'icon icon-list',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   }
//                 ]
//               },
//               {
//                 path: '',
//                 title: 'Agents',
//                 icon: 'mdi mdi-truck',
//                 class: 'has-arrow',
//                 extralink: false,
//                 submenu: [
//                   {
//                     path: '/dashboard/add-agent',
//                     title: 'Add Agent',
//                     icon: 'icon icon-plus',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   },
//                   {
//                     path: '/dashboard/agents',
//                     title: 'View Agents',
//                     icon: 'icon icon-list',
//                     class: '',
//                     extralink: false,
//                     submenu: []
//                   }
//                 ]
//               },
//               {
//                 path: '/dashboard/profile',
//                 title: 'Profile',
//                 icon: 'mdi mdi-account',
//                 class: '',
//                 extralink: false,
//                 submenu: []
//               },
//             ];
//     break;
//   default:
//     // code...
//     break;
// }
// export const ROUTES: RouteInfo[] = items;
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    MenuItems.prototype.returnItems = function () {
        var userData = JSON.parse(localStorage.getItem('currentUser'));
        var role = "";
        var items = [];
        var staffItems = [];
        // console.log(userData.user.staff_details)
        if (userData) {
            role = userData.user.role;
            if (role == "staff" && userData.user.staff_details) {
                var staff_permission = userData.user.staff_details.permission_level;
                console.log(staff_permission);
                if (staff_permission == 0) {
                    staffItems =
                        [
                            {
                                path: '/dashboard',
                                title: 'Home',
                                icon: 'mdi mdi-home',
                                class: '',
                                extralink: false,
                                submenu: []
                            },
                            {
                                path: '',
                                title: 'Distributors',
                                icon: 'mdi mdi-account-network',
                                class: 'has-arrow',
                                extralink: false,
                                submenu: [
                                    {
                                        path: '/dashboard/add-middleman',
                                        title: 'Add Distributor',
                                        icon: 'icon icon-plus',
                                        class: '',
                                        extralink: false,
                                        submenu: []
                                    },
                                    {
                                        path: '/dashboard/middlemen',
                                        title: 'View Distributors',
                                        icon: 'icon icon-list',
                                        class: '',
                                        extralink: false,
                                        submenu: []
                                    }
                                ]
                            },
                            {
                                path: '',
                                title: 'Requests',
                                icon: 'mdi mdi-swap-horizontal',
                                class: 'has-arrow',
                                extralink: false,
                                submenu: [
                                    {
                                        path: '/dashboard/incoming-requests',
                                        title: 'Incoming Requests',
                                        icon: 'icon icon-list',
                                        class: '',
                                        extralink: false,
                                        submenu: []
                                    }
                                ]
                            },
                            {
                                path: '',
                                title: 'Agents',
                                icon: 'mdi mdi-truck',
                                class: 'has-arrow',
                                extralink: false,
                                submenu: [
                                    {
                                        path: '/dashboard/add-agent',
                                        title: 'Add Agent',
                                        icon: 'icon icon-plus',
                                        class: '',
                                        extralink: false,
                                        submenu: []
                                    },
                                    {
                                        path: '/dashboard/agents',
                                        title: 'View Agents',
                                        icon: 'icon icon-list',
                                        class: '',
                                        extralink: false,
                                        submenu: []
                                    }
                                ]
                            },
                            {
                                path: '/dashboard/profile',
                                title: 'Profile',
                                icon: 'mdi mdi-account',
                                class: '',
                                extralink: false,
                                submenu: []
                            },
                        ];
                }
            }
        }
        console.log(role);
        switch (role) {
            case "manufacturer":
                items =
                    [
                        {
                            path: '/dashboard',
                            title: 'Home',
                            icon: 'mdi mdi-home',
                            class: '',
                            extralink: false,
                            submenu: []
                        },
                        {
                            path: '',
                            title: 'Products',
                            icon: 'mdi mdi-cart',
                            class: 'has-arrow',
                            extralink: false,
                            submenu: [
                                {
                                    path: '/dashboard/add-product',
                                    title: 'Add Product',
                                    icon: 'icon icon-plus',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                },
                                {
                                    path: '/dashboard/products',
                                    title: 'View Products',
                                    icon: 'icon icon-list',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                },
                                {
                                    path: '/dashboard/add-product-batch',
                                    title: 'Add Batch',
                                    icon: 'icon icon-plus',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                },
                                {
                                    path: '/dashboard/product-batches',
                                    title: 'View Batches',
                                    icon: 'icon icon-list',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                },
                            ]
                        },
                        {
                            path: '',
                            title: 'Distributors',
                            icon: 'mdi mdi-account-network',
                            class: 'has-arrow',
                            extralink: false,
                            submenu: [
                                {
                                    path: '/dashboard/add-middleman',
                                    title: 'Add Distributor',
                                    icon: 'icon icon-plus',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                },
                                {
                                    path: '/dashboard/middlemen',
                                    title: 'View Distributors',
                                    icon: 'icon icon-list',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                }
                            ]
                        },
                        {
                            path: '',
                            title: 'Requests',
                            icon: 'mdi mdi-swap-horizontal',
                            class: 'has-arrow',
                            extralink: false,
                            submenu: [
                                {
                                    path: '/dashboard/request-pickup',
                                    title: 'Request Pickup',
                                    icon: 'icon icon-plus',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                },
                                // {
                                //   path: '/dashboard/incoming-requests',
                                //   title: 'Incoming Requests',
                                //   icon: 'icon icon-list',
                                //   class: '',
                                //   extralink: false,
                                //   submenu: []
                                // },
                                {
                                    path: '/dashboard/pickup-requests',
                                    title: 'Pickup Requests',
                                    icon: 'icon icon-list',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                }
                            ]
                        },
                        {
                            path: '',
                            title: 'Deliveries',
                            icon: 'mdi mdi-swap-vertical',
                            class: 'has-arrow',
                            extralink: false,
                            submenu: [
                                {
                                    path: '/dashboard/deliveries/request',
                                    title: 'Request Delivery',
                                    icon: 'icon icon-plus',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                },
                                {
                                    path: '/dashboard/deliveries',
                                    title: 'Your Deliveries',
                                    icon: 'icon icon-list',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                }
                            ]
                        },
                        {
                            path: '',
                            title: 'Agents',
                            icon: 'mdi mdi-truck',
                            class: 'has-arrow',
                            extralink: false,
                            submenu: [
                                {
                                    path: '/dashboard/add-agent',
                                    title: 'Add Agent',
                                    icon: 'icon icon-plus',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                },
                                {
                                    path: '/dashboard/agents',
                                    title: 'View Agents',
                                    icon: 'icon icon-list',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                }
                            ]
                        },
                        {
                            path: '/dashboard/profile',
                            title: 'Profile',
                            icon: 'mdi mdi-account',
                            class: '',
                            extralink: false,
                            submenu: []
                        },
                    ];
                break;
            case "middleman":
                items =
                    [
                        {
                            path: '/dashboard',
                            title: 'Home',
                            icon: 'mdi mdi-home',
                            class: '',
                            extralink: false,
                            submenu: []
                        },
                        {
                            path: '',
                            title: 'Distributors',
                            icon: 'mdi mdi-account-network',
                            class: 'has-arrow',
                            extralink: false,
                            submenu: [
                                {
                                    path: '/dashboard/add-middleman',
                                    title: 'Add Distributor',
                                    icon: 'icon icon-plus',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                },
                                {
                                    path: '/dashboard/middlemen',
                                    title: 'View Distributors',
                                    icon: 'icon icon-list',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                }
                            ]
                        },
                        {
                            path: '',
                            title: 'Requests',
                            icon: 'mdi mdi-swap-horizontal',
                            class: 'has-arrow',
                            extralink: false,
                            submenu: [
                                {
                                    path: '/dashboard/incoming-requests',
                                    title: 'Incoming Requests',
                                    icon: 'icon icon-list',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                }
                            ]
                        },
                        {
                            path: '',
                            title: 'Agents',
                            icon: 'mdi mdi-truck',
                            class: 'has-arrow',
                            extralink: false,
                            submenu: [
                                {
                                    path: '/dashboard/add-agent',
                                    title: 'Add Agent',
                                    icon: 'icon icon-plus',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                },
                                {
                                    path: '/dashboard/agents',
                                    title: 'View Agents',
                                    icon: 'icon icon-list',
                                    class: '',
                                    extralink: false,
                                    submenu: []
                                }
                            ]
                        },
                        {
                            path: '/dashboard/profile',
                            title: 'Profile',
                            icon: 'mdi mdi-account',
                            class: '',
                            extralink: false,
                            submenu: []
                        },
                    ];
                break;
            default:
                // code...
                break;
        }
        return items;
    };
    return MenuItems;
}());
exports.MenuItems = MenuItems;
//# sourceMappingURL=menu-items.js.map