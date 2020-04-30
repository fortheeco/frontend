"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var menu_items_1 = require("./menu-items");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(modalService, router, menu, route) {
        var _this = this;
        this.modalService = modalService;
        this.router = router;
        this.menu = menu;
        this.route = route;
        this.showMenu = '';
        this.showSubMenu = '';
        this.ROUTES = [];
        var bc = new BroadcastChannel("profile-update");
        bc.onmessage = function (ev) {
            console.log(ev);
            _this.ngOnInit();
        };
    }
    // this is for the open close
    // bc = new BroadcastChannel("profile-update");
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.addActiveClass = function (element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    };
    // End open close
    SidebarComponent.prototype.ngOnInit = function () {
        this.ROUTES = this.menu.returnItems();
        this.sidebarnavItems = this.ROUTES.filter(function (sidebarnavItem) { return sidebarnavItem; });
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html'
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            router_1.Router,
            menu_items_1.MenuItems,
            router_1.ActivatedRoute])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map