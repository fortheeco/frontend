"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var _models_1 = require("../_models");
var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var users = [
            { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: _models_1.Role.Admin },
            { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: _models_1.Role.User }
        ];
        var authHeader = request.headers.get('Authorization');
        var isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
        var roleString = isLoggedIn && authHeader.split('.')[1];
        var role = roleString ? _models_1.Role[roleString] : null;
        // wrap in delayed observable to simulate server api call
        return rxjs_1.of(null).pipe(operators_1.mergeMap(function () {
            // authenticate - public
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                var user = users.find(function (x) { return x.username === request.body.username && x.password === request.body.password; });
                if (!user)
                    return error('Username or password is incorrect');
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role,
                    token: "fake-jwt-token." + user.role
                });
            }
            // get user by id - admin or user (user can only access their own record)
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                if (!isLoggedIn)
                    return unauthorised();
                // get id from request url
                var urlParts = request.url.split('/');
                var id_1 = parseInt(urlParts[urlParts.length - 1]);
                // only allow normal users access to their own record
                var currentUser = users.find(function (x) { return x.role === role; });
                if (id_1 !== currentUser.id && role !== _models_1.Role.Admin)
                    return unauthorised();
                var user = users.find(function (x) { return x.id === id_1; });
                return ok(user);
            }
            // get all users (admin only)
            if (request.url.endsWith('/users') && request.method === 'GET') {
                if (role !== _models_1.Role.Admin)
                    return unauthorised();
                return ok(users);
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(operators_1.materialize())
            .pipe(operators_1.delay(500))
            .pipe(operators_1.dematerialize());
        // private helper functions
        function ok(body) {
            return rxjs_1.of(new http_1.HttpResponse({ status: 200, body: body }));
        }
        function unauthorised() {
            return rxjs_1.throwError({ status: 401, error: { message: 'Unauthorised' } });
        }
        function error(message) {
            return rxjs_1.throwError({ status: 400, error: { message: message } });
        }
    };
    FakeBackendInterceptor = __decorate([
        core_1.Injectable()
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());
exports.FakeBackendInterceptor = FakeBackendInterceptor;
exports.fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: http_1.HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
//# sourceMappingURL=fake-backend.js.map