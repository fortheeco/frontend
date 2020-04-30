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
require("rxjs/Rx");
var _services_1 = require("../../_services");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var config_1 = require("../../_providers/config/config");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authenticationService, _loadingBar) {
        var _this = this;
        this.authenticationService = authenticationService;
        this._loadingBar = _loadingBar;
        this.fileData = null;
        this.BASE_URL = config_1.BASE_URL;
        this.loading = false;
        this.submitted = false;
        this.processing = false;
        // End the Closeable Alert
        // This is for the self closing alert
        this._success = new rxjs_1.Subject();
        this.staticAlertClosed = false;
        // End the Closeable Alert
        // This is for the self closing alert
        this._message = new rxjs_1.Subject();
        // set up Alert
        setTimeout(function () { return (_this.staticAlertClosed = true); }, 20000);
        this._message.subscribe(function (message) { return (_this.responseMessage = message); });
        this._message.pipe(operators_1.debounceTime(5000)).subscribe(function () { return (_this.responseMessage = null); });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    ProfileComponent.prototype.loadProfile = function () {
        this._loadingBar.start();
        this.authenticationService.loadUserProfile();
        var u = this.authenticationService.currentUserValue;
        this.profile = u.user;
        console.log(u);
        this._loadingBar.complete();
    };
    ProfileComponent.prototype.fileProgress = function (fileInput) {
        this.fileData = fileInput.target.files[0];
    };
    ProfileComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
            console.log(_this.imgURL);
            _this.uploadProfilePhoto();
        };
        // console.log(files[0])
    };
    ProfileComponent.prototype.uploadProfilePhoto = function () {
        var _this = this;
        this._loadingBar.start();
        this.authenticationService.upload(this.imgURL).subscribe(function (res) {
            _this._loadingBar.complete();
            console.log(res);
            _this.messageType = 'success';
            _this._message.next("update successful");
            _this.uploadResponse = res;
        }, function (err) {
            _this._loadingBar.complete();
            _this.error = err;
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }),
        __metadata("design:paramtypes", [_services_1.AuthenticationService,
            ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map