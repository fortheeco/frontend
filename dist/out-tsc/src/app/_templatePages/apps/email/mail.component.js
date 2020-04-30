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
var mail_service_1 = require("./mail.service");
var app_state_1 = require("./app.state");
var MailComponent = /** @class */ (function () {
    function MailComponent(service, route, router, state) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.state = state;
        this.markAsRead = false;
        this.markAsUnRead = false;
        this.deleteChecked = false;
        this.status = false;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.id = _this.route.snapshot.firstChild.params['id'];
                _this.type = _this.route.snapshot.firstChild.params['type'];
                setTimeout(function () {
                    // jQuery('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });
                });
            }
        });
    }
    MailComponent.prototype.getBack = function () {
        if (this.type) {
            this.router.navigate(['apps/email/mail-list/' + this.type]);
        }
        else {
            this.router.navigate(['apps/email/mail-list/inbox']);
        }
    };
    MailComponent.prototype.trash = function () {
        // jQuery('[data-toggle="tooltip"]').tooltip('hide');
        this.service.getMail(this.id).then(function (mail) {
            mail.trash = true;
            mail.sent = false;
            mail.draft = false;
            mail.starred = false;
        });
        this.router.navigate(['apps/email/mail-list/inbox']);
    };
    MailComponent.prototype.setAsRead = function () {
        this.markAsRead = !this.markAsRead;
        this.state.notifyDataChanged('markAsRead', this.markAsRead);
    };
    MailComponent.prototype.setAsUnRead = function () {
        this.markAsUnRead = !this.markAsUnRead;
        this.state.notifyDataChanged('markAsUnRead', this.markAsUnRead);
    };
    MailComponent.prototype.deleteCheckedMail = function () {
        this.deleteChecked = !this.deleteChecked;
        this.state.notifyDataChanged('deleteChecked', this.deleteChecked);
    };
    MailComponent.prototype.openClleft = function () {
        this.status = !this.status;
    };
    MailComponent = __decorate([
        core_1.Component({
            selector: 'app-mail',
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: './mail.component.html',
            styleUrls: ['./mail.component.scss'],
            providers: [mail_service_1.MailService]
        }),
        __metadata("design:paramtypes", [mail_service_1.MailService,
            router_1.ActivatedRoute,
            router_1.Router,
            app_state_1.AppState])
    ], MailComponent);
    return MailComponent;
}());
exports.MailComponent = MailComponent;
//# sourceMappingURL=mail.component.js.map