"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toastr_component_1 = require("./toastr/toastr.component");
var upload_component_1 = require("./file-upload/upload.component");
var editor_component_1 = require("./editor/editor.component");
var drag_component_1 = require("./drag-n-drop/drag.component");
exports.ExtraComponentsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'toastr',
                component: toastr_component_1.ToastrComponent,
                data: {
                    title: 'Toastr Notification',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Toastr Page' }
                    ]
                }
            },
            {
                path: 'upload',
                component: upload_component_1.UploadComponent,
                data: {
                    title: 'Upload Page',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Upload Page' }
                    ]
                }
            },
            {
                path: 'editor',
                component: editor_component_1.EditorComponent,
                data: {
                    title: 'Editor Page',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Editor Page' }
                    ]
                }
            },
            {
                path: 'dragndrop',
                component: drag_component_1.DragComponent,
                data: {
                    title: 'DragComponent Page',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'DragComponent Page' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=extra-component.routing.js.map