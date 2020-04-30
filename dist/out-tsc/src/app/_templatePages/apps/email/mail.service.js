"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Mail = /** @class */ (function () {
    function Mail(id, sender, senderMail, subject, date, body, attachment, attachments, unread, sent, starred, draft, trash, selected) {
        this.id = id;
        this.sender = sender;
        this.senderMail = senderMail;
        this.subject = subject;
        this.date = date;
        this.body = body;
        this.attachment = attachment;
        this.attachments = attachments;
        this.unread = unread;
        this.sent = sent;
        this.starred = starred;
        this.draft = draft;
        this.trash = trash;
        this.selected = selected;
    }
    return Mail;
}());
exports.Mail = Mail;
var Mails = [
    new Mail(1, 'Seth Wright', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '6:08 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], true, false, false, false, false, false),
    new Mail(2, 'Leo Jons', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '12:55 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', true, ['assets/images/product/chair.png', 'assets/images/product/chair2.png'], true, false, true, false, false, false),
    new Mail(3, 'Aron Shaur', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '01.11.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(4, 'Emily Rhodes', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '21.07.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], true, false, false, false, false, false),
    new Mail(5, 'Draft', '', 'no subject', '2:14 PM', '', false, [], false, false, false, true, false, false),
    new Mail(6, 'Draft', '', 'Please confirm your account for furthur process', 'Jan 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet. ', false, [], false, false, false, true, false, false),
    new Mail(7, 'Kendra', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '27.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(8, 'Jimmy Fallon', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '14.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, true, false, false, false),
    new Mail(9, 'Sam Tighe', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '03.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(10, 'Saul', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', '30.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, true, false, false, false, false),
    new Mail(11, 'Nathan James', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '24.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(12, 'Mia Green', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '11.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(13, 'Mario Gomez', 'info@wrappixel.com', 'Download the freebies from the site wrappixel.com all the admin template for free', '24.02.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false)
];
var mailsPromise = Promise.resolve(Mails);
var MailService = /** @class */ (function () {
    function MailService() {
    }
    MailService.prototype.getInboxMails = function () {
        return mailsPromise.then(function (mails) {
            return mails.filter(function (mail) {
                return mail.sent === false && mail.draft === false && mail.trash === false;
            });
        });
    };
    MailService.prototype.getStarredMails = function () {
        return mailsPromise.then(function (mails) {
            return mails.filter(function (mail) { return mail.starred === true; });
        });
    };
    MailService.prototype.getSentMails = function () {
        return mailsPromise.then(function (mails) { return mails.filter(function (mail) { return mail.sent === true; }); });
    };
    MailService.prototype.getDraftMails = function () {
        return mailsPromise.then(function (mails) {
            return mails.filter(function (mail) { return mail.draft === true; });
        });
    };
    MailService.prototype.getTrashMails = function () {
        return mailsPromise.then(function (mails) {
            return mails.filter(function (mail) { return mail.trash === true; });
        });
    };
    MailService.prototype.getMail = function (id) {
        return mailsPromise.then(function (mails) { return mails.find(function (mail) { return mail.id === +id; }); });
    };
    MailService = __decorate([
        core_1.Injectable()
    ], MailService);
    return MailService;
}());
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map