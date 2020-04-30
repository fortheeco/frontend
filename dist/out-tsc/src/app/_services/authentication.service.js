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
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var http_2 = require("@angular/http");
var router_1 = require("@angular/router");
var config_1 = require("../_providers/config/config");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, httpClient, route, httpc, router) {
        this.http = http;
        this.httpClient = httpClient;
        this.route = route;
        this.httpc = httpc;
        this.router = router;
        this.BASE_URL = config_1.BASE_URL;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.headers_formdata = new http_2.Headers({ 'Content-Type': undefined });
        this.currentUserSubject = new rxjs_1.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        var url = this.BASE_URL + "api/auth/login";
        return this.http.post(url, { email: email, password: password })
            .pipe(operators_1.map(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.access_token) {
                console.log(user);
                if (user.user.default_password_changed == 'yes') {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    _this.currentUserSubject.next(user);
                    return { status: 1 };
                }
                else {
                    _this.currentUserSubject.next(user);
                    return { status: 2 };
                }
            }
        }));
    };
    AuthenticationService.prototype.signup = function (registrationData) {
        var url = this.BASE_URL + "api/auth/signup";
        // return this.http.post<any>(`/users/authenticate`, { username, password })
        return this.http.post(url, registrationData)
            .pipe(operators_1.map(function (user) {
            // login successful if there's a jwt token in the response
            // if (user && user.access_token) {
            //     // store user details and jwt token in local storage to keep user logged in between page refreshes
            //     localStorage.setItem('currentUser', JSON.stringify(user));
            //     this.currentUserSubject.next(user);
            // }
            // return user;
        }));
    };
    /**
     * Add product
     *
     * @param data Product
     * @return Response
     */
    AuthenticationService.prototype.updatePhoto = function (data) {
        var userToken = 'Bearer ' + this.currentUserValue.access_token;
        var url = this.BASE_URL + "api/product/create";
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers });
    };
    AuthenticationService.prototype.upload = function (img) {
        var _this = this;
        var data = { 'photo': img };
        // console.log(data)
        // let uploadURL = `${this.SERVER_URL}/auth/${userId}/avatar`;
        var userToken = 'Bearer ' + this.currentUserValue.access_token;
        var url = this.BASE_URL + "api/auth/update-profile-photo";
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers })
            .map(function (res) {
            _this.loadUserProfile();
        });
    };
    AuthenticationService.prototype.loadUserProfile = function () {
        var _this = this;
        var data = { 'photo': 'img' };
        var userToken = 'Bearer ' + this.currentUserValue.access_token;
        var url = this.BASE_URL + "api/auth/user";
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers })
            .map(function (res) {
            var response = res.json();
            _this.currentUserValue.user = response;
            _this.currentUserSubject.next(_this.currentUserValue);
            localStorage.setItem('currentUser', JSON.stringify(_this.currentUserValue));
        })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Server error'); }) //...errors if
            .subscribe();
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/authentication/login']);
        // window.location.reload();
    };
    AuthenticationService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            http_1.HttpClient,
            router_1.ActivatedRoute,
            http_2.Http,
            router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map