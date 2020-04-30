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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .pipe(operators_1.map(function () { return _this.activatedRoute; }))
            .pipe(operators_1.map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(operators_1.filter(function (route) { return route.outlet === 'primary'; }))
            .pipe(operators_1.mergeMap(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
            _this.pageInfo = event;
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BreadcrumbComponent.prototype, "layout", void 0);
    BreadcrumbComponent = __decorate([
        core_1.Component({
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            platform_browser_1.Title])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
exports.BreadcrumbComponent = BreadcrumbComponent;
//# sourceMappingURL=breadcrumb.component.js.map