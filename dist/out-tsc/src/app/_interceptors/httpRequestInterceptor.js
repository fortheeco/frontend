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
var httpRequestInterceptor = /** @class */ (function () {
    function httpRequestInterceptor() {
    }
    //     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     return next.handle(req).catch(event => {
    //       if (event instanceof HttpErrorResponse) {
    //         const response = event as HttpErrorResponse;
    //         if (response.headers.get('content-type') === 'application/json') {
    //           return Observable.throw(new HttpErrorResponse({
    //             error: JSON.parse(response.error),
    //             headers: response.headers,
    //             status: response.status,
    //             statusText: response.statusText,
    //             url: response.url,
    //           }));
    //         }
    //       }
    //       return Observable.throw(event);
    //     })
    // }
    httpRequestInterceptor.prototype.intercept = function (request, next) {
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        request = request.clone({ headers: request.headers.set('Freaky', 'Jolly') });
        return next.handle(request).pipe(operators_1.map(function (event) {
            if (event instanceof http_1.HttpResponse) {
            }
            return event;
        }), operators_1.catchError(function (error) {
            var data = {};
            data = {
                message: error.message,
            };
            return rxjs_1.throwError(error);
        }));
    };
    httpRequestInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], httpRequestInterceptor);
    return httpRequestInterceptor;
}());
exports.httpRequestInterceptor = httpRequestInterceptor;
//# sourceMappingURL=httpRequestInterceptor.js.map