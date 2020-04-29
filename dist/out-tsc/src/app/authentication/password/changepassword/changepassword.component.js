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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var _services_1 = require("../../../_services");
var rest_service_1 = require("../../../_services/rest.service");
var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(rest, formBuilder, route, router, authenticationService) {
        this.rest = rest;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.newCredentials = {
            password: "1111",
            password2: "1111",
        };
        this.recoverform = false;
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        this.passwordForm = this.formBuilder.group({
            password: ['', forms_1.Validators.required],
            password2: ['', forms_1.Validators.required]
        });
    };
    Object.defineProperty(ChangepasswordComponent.prototype, "f", {
        get: function () { return this.passwordForm.controls; },
        enumerable: true,
        configurable: true
    });
    ChangepasswordComponent.prototype.logout = function () {
        this.authenticationService.logout();
        // this.router.navigate(['/']);
    };
    ChangepasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.passwordForm.invalid) {
            return;
        }
        console.log(this.newCredentials);
        this.loading = true;
        this.rest.changePassword(this.newCredentials)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            _this.newCredentials = {
                password: "",
                password2: "",
            };
            _this.authenticationService.logout();
            _this.router.navigate(['/authentication/login']);
        }, function (error) {
            console.log(error);
            _this.error = error;
            _this.loading = false;
        });
    };
    ChangepasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-changepassword',
            templateUrl: './changepassword.component.html',
            styleUrls: ['./changepassword.component.css']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService,
            forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            _services_1.AuthenticationService])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());
exports.ChangepasswordComponent = ChangepasswordComponent;
//# sourceMappingURL=changepassword.component.js.map