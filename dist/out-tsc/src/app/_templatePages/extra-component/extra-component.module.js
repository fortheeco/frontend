"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var ngx_quill_1 = require("ngx-quill");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var angular_file_uploader_1 = require("angular-file-uploader");
var ngx_toastr_1 = require("ngx-toastr");
var ng2_dragula_1 = require("ng2-dragula");
var extra_component_routing_1 = require("./extra-component.routing");
var toastr_component_1 = require("./toastr/toastr.component");
var upload_component_1 = require("./file-upload/upload.component");
var editor_component_1 = require("./editor/editor.component");
var drag_component_1 = require("./drag-n-drop/drag.component");
var ExtraComponentModule = /** @class */ (function () {
    function ExtraComponentModule() {
    }
    ExtraComponentModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(extra_component_routing_1.ExtraComponentsRoutes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                ngx_quill_1.QuillModule,
                ng_bootstrap_1.NgbModule,
                ng2_dragula_1.DragulaModule,
                angular_file_uploader_1.AngularFileUploaderModule
            ],
            declarations: [
                toastr_component_1.ToastrComponent,
                upload_component_1.UploadComponent,
                editor_component_1.EditorComponent,
                drag_component_1.DragComponent
            ]
        })
    ], ExtraComponentModule);
    return ExtraComponentModule;
}());
exports.ExtraComponentModule = ExtraComponentModule;
//# sourceMappingURL=extra-component.module.js.map