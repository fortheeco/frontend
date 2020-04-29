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
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var router_1 = require("@angular/router");
var firebase = require("Firebase");
var config = {
    apiKey: 'AIzaSyBzV7wG_txvW8p5SET74PdeXzCo2bjEq2U',
    authDomain: '675843681793.firebaseapp.com',
    databaseURL: 'https://chekkitapp.firebaseio.com/',
    projectId: '675843681793',
    storageBucket: 'gs://675843681793.appspot.com',
};
var AppComponent = /** @class */ (function () {
    function AppComponent(_loadingBar, _router) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this._router = _router;
        this.title = 'app';
        this._router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
        firebase.initializeApp(config);
    }
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof router_1.NavigationStart) {
            this._loadingBar.start();
        }
        if (event instanceof router_1.NavigationEnd) {
            this._loadingBar.complete();
        }
        if (event instanceof router_1.NavigationCancel) {
            this._loadingBar.stop();
        }
        if (event instanceof router_1.NavigationError) {
            this._loadingBar.stop();
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [ng2_slim_loading_bar_1.SlimLoadingBarService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map