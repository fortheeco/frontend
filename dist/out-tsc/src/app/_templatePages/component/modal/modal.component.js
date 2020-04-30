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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var NgbdModalBasicComponent = /** @class */ (function () {
    function NgbdModalBasicComponent(modalService) {
        this.modalService = modalService;
    }
    // This is for the first modal
    NgbdModalBasicComponent.prototype.open1 = function (content1) {
        var _this = this;
        this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This is for the Second modal
    NgbdModalBasicComponent.prototype.open2 = function (content2) {
        var _this = this;
        this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This is for the Third varios modal options
    NgbdModalBasicComponent.prototype.openBackDropCustomClass = function (content3) {
        this.modalService.open(content3, { backdropClass: 'light-blue-backdrop' });
    };
    NgbdModalBasicComponent.prototype.openWindowCustomClass = function (content3) {
        this.modalService.open(content3, { windowClass: 'dark-modal' });
    };
    NgbdModalBasicComponent.prototype.openSm = function (content3) {
        this.modalService.open(content3, { size: 'sm' });
    };
    NgbdModalBasicComponent.prototype.openLg = function (content3) {
        this.modalService.open(content3, { size: 'lg' });
    };
    NgbdModalBasicComponent.prototype.openVerticallyCentered = function (content3) {
        this.modalService.open(content3, { centered: true });
    };
    NgbdModalBasicComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasicComponent = __decorate([
        core_1.Component({
            selector: 'app-ngbd-modal',
            templateUrl: './modal.component.html'
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
    ], NgbdModalBasicComponent);
    return NgbdModalBasicComponent;
}());
exports.NgbdModalBasicComponent = NgbdModalBasicComponent;
//# sourceMappingURL=modal.component.js.map