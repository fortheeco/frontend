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
var mail_service_1 = require("../mail.service");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var MailDetailComponent = /** @class */ (function () {
    function MailDetailComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.replyMessage = new core_3.EventEmitter();
    }
    MailDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.service.getMail(+params['id']); })
            .subscribe(function (mail) { return (_this.mail = mail); });
    };
    MailDetailComponent.prototype.goToReply = function (mail) {
        this.replyMessage.emit(mail);
    };
    MailDetailComponent.prototype.trash = function (id) {
        this.service.getMail(id).then(function (mail) {
            mail.trash = true;
            mail.sent = false;
            mail.draft = false;
            mail.starred = false;
        });
        this.router.navigate(['apps/email/mail-list/inbox']);
    };
    __decorate([
        core_2.Output(),
        __metadata("design:type", Object)
    ], MailDetailComponent.prototype, "replyMessage", void 0);
    MailDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-mail-detail',
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: './mail-detail.component.html'
        }),
        __metadata("design:paramtypes", [mail_service_1.MailService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], MailDetailComponent);
    return MailDetailComponent;
}());
exports.MailDetailComponent = MailDetailComponent;
//# sourceMappingURL=mail-detail.component.js.map