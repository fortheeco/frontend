"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chat_component_1 = require("./chat/chat.component");
var ticketlist_component_1 = require("./ticketlist/ticketlist.component");
var ticketdetails_component_1 = require("./ticketdetails/ticketdetails.component");
var taskboard_component_1 = require("./taskboard/taskboard.component");
var fullcalendar_component_1 = require("./fullcalendar/fullcalendar.component");
exports.AppsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'chat',
                component: chat_component_1.ChatComponent,
                data: {
                    title: 'Chat App',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Chat App' }
                    ]
                }
            },
            {
                path: 'ticketlist',
                component: ticketlist_component_1.TicketlistComponent,
                data: {
                    title: 'Ticket List',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Ticket List' }
                    ]
                }
            },
            {
                path: 'ticketdetails',
                component: ticketdetails_component_1.TicketdetailsComponent,
                data: {
                    title: 'Ticket Details',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Ticket Details' }
                    ]
                }
            },
            {
                path: 'taskboard',
                component: taskboard_component_1.TaskboardComponent,
                data: {
                    title: 'Taskboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Taskboard' }
                    ]
                }
            },
            {
                path: 'fullcalendar',
                component: fullcalendar_component_1.FullcalendarComponent,
                data: {
                    title: 'Full-Calendar',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Full-Calendar' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=apps.routing.js.map