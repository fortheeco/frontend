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
var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.config = {};
        this.showSidebar = false;
        this.users = [
            {
                name: 'Steve Rogers',
                avtar: 'assets/images/users/1.jpg',
                status: 'online',
                lastmsg: 'Hey Banner, where are you?',
                time: '9:30 AM'
            },
            {
                name: 'Tony Stark',
                avtar: 'assets/images/users/2.jpg',
                status: 'busy',
                lastmsg: 'Thanos is coming.',
                time: '9:30 AM'
            },
            {
                name: 'Buckey Barnes',
                avtar: 'assets/images/users/3.jpg',
                status: 'away',
                lastmsg: 'I did not kill your father.',
                time: '9:30 AM'
            },
            {
                name: 'Natasha Romanoff',
                avtar: 'assets/images/users/4.jpg',
                status: 'offline',
                lastmsg: 'I am multitasking.',
                time: '9:30 AM'
            },
            {
                name: 'Maria Hill',
                avtar: 'assets/images/users/5.jpg',
                status: 'online',
                lastmsg: 'We are not at war.',
                time: '9:30 AM'
            },
            {
                name: 'Wanda Maximoff',
                avtar: 'assets/images/users/6.jpg',
                status: 'busy',
                lastmsg: 'We have to save Vision.',
                time: '9:30 AM'
            },
            {
                name: 'Carol Danevars',
                avtar: 'assets/images/users/7.jpg',
                status: 'away',
                lastmsg: 'I am coming.',
                time: '9:30 AM'
            }
        ];
        this.selectedUser = this.users[1];
    }
    ChatComponent.prototype.mobileSidebar = function () {
        this.showSidebar = !this.showSidebar;
    };
    ChatComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    ChatComponent.prototype.ngAfterViewInit = function () { };
    ChatComponent = __decorate([
        core_1.Component({
            templateUrl: './chat.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map