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
var _services_1 = require("../../_services");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.recoverform = false;
        // registerCredentials = {
        // 	name: "James bond",
        // 	role: "manufacturer",
        // 	email: "tapeam.ent@gmail.com",
        // 	password: "1111",
        // 	password2: "1111",
        // 	phone: "",
        // };
        this.registerCredentials = {
            name: "",
            role: "manufacturer",
            email: "",
            password: "",
            password2: "",
            phone: "",
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            role: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            phone: ['', forms_1.Validators.required],
            // termscheck: ['', Validators.requiredTrue],
            password: ['', forms_1.Validators.required],
            password2: ['', forms_1.Validators.required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    SignupComponent.prototype.validEmail = function () {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.registerCredentials.email);
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.signupForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }
        console.log(this.registerCredentials);
        this.loading = true;
        this.authenticationService.signup(this.registerCredentials)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            _this.registerCredentials = {
                name: "",
                role: "",
                email: "",
                password: "",
                password2: "",
                phone: "",
            };
            _this.router.navigate(['/authentication/login']);
        }, function (error) {
            console.log(error);
            _this.error = error;
            _this.loading = false;
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            _services_1.AuthenticationService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map