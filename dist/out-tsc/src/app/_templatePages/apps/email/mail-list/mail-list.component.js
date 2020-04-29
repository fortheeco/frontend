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
require("rxjs/add/operator/switchMap");
var router_1 = require("@angular/router");
var mail_service_1 = require("../mail.service");
var app_state_1 = require("../app.state");
var MailListComponent = /** @class */ (function () {
    function MailListComponent(service, route, router, state) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.state = state;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.unSelectAll();
                _this.searchText = '';
            }
        });
        this.state.subscribe('markAsRead', function (val) {
            _this.markAllAsRead();
        });
        this.state.subscribe('markAsUnRead', function (val) {
            _this.markAllAsUnRead();
        });
        this.state.subscribe('deleteChecked', function (val) {
            _this.deleteAllCheckedMail();
        });
    }
    MailListComponent.prototype.ngOnInit = function () {
        this.getMails();
    };
    MailListComponent.prototype.getMails = function () {
        var _this = this;
        this.mails = this.route.params.switchMap(function (params) {
            _this.type = params['type'];
            switch (_this.type) {
                case 'inbox':
                    return _this.service.getInboxMails();
                case 'starred':
                    return _this.service.getStarredMails();
                case 'sent':
                    return _this.service.getSentMails();
                case 'drafts':
                    return _this.service.getDraftMails();
                case 'trash':
                    return _this.service.getTrashMails();
                default:
                    return _this.service.getInboxMails();
            }
        });
    };
    MailListComponent.prototype.toggleAll = function () {
        var toggleStatus = !this.isAllSelected;
        this.mails.subscribe(function (result) {
            result.forEach(function (mail) {
                mail.selected = toggleStatus;
            });
        });
    };
    MailListComponent.prototype.toggleOne = function () {
        var _this = this;
        this.mails.subscribe(function (result) {
            _this.isAllSelected = result.every(function (mail) {
                return mail.selected === true;
            });
        });
    };
    MailListComponent.prototype.unSelectAll = function () {
        this.isAllSelected = false;
        if (this.mails) {
            this.mails.subscribe(function (result) {
                result.forEach(function (mail) {
                    mail.selected = false;
                });
            });
        }
    };
    MailListComponent.prototype.markAllAsRead = function () {
        this.mails.subscribe(function (result) {
            result.forEach(function (mail) {
                if (mail.selected) {
                    mail.unread = false;
                }
            });
        });
    };
    MailListComponent.prototype.markAllAsUnRead = function () {
        this.mails.subscribe(function (result) {
            result.forEach(function (mail) {
                if (mail.selected) {
                    mail.unread = true;
                }
            });
        });
    };
    MailListComponent.prototype.deleteAllCheckedMail = function () {
        this.mails.subscribe(function (result) {
            result.forEach(function (mail) {
                if (mail.selected) {
                    mail.trash = true;
                    mail.sent = false;
                    mail.draft = false;
                    mail.starred = false;
                }
            });
        });
        this.getMails();
        this.isAllSelected = false;
    };
    MailListComponent.prototype.goToDetail = function (mail) {
        mail.unread = false;
        this.router.navigate(['apps/email/mail-list/' + this.type, mail.id]);
    };
    MailListComponent.prototype.changeStarStatus = function (mail) {
        mail.starred = !mail.starred;
    };
    MailListComponent = __decorate([
        core_1.Component({
            selector: 'app-inbox-list',
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: './mail-list.component.html'
        }),
        __metadata("design:paramtypes", [mail_service_1.MailService,
            router_1.ActivatedRoute,
            router_1.Router,
            app_state_1.AppState])
    ], MailListComponent);
    return MailListComponent;
}());
exports.MailListComponent = MailListComponent;
//# sourceMappingURL=mail-list.component.js.map