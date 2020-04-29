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
var ng2_dragula_1 = require("ng2-dragula");
var DragComponent = /** @class */ (function () {
    // This is for the basic example and for general
    function DragComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        // This is with the output example
        this.many = ['The', 'possibilities', 'are', 'endless!'];
        this.many2 = ['Explore', 'them'];
        dragulaService.drag.subscribe(function (value) {
            // console.log(`drag: ${value[0]}`); // value[0] will always be bag name
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            // console.log(`drop: ${value[0]}`);
            _this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe(function (value) {
            // console.log(`over: ${value[0]}`);
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            // console.log(`out: ${value[0]}`);
            _this.onOut(value.slice(1));
        });
        dragulaService.dropModel.subscribe(function (value) {
            _this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe(function (value) {
            _this.onRemoveModel(value.slice(1));
        });
    }
    DragComponent.prototype.hasClass = function (el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    };
    DragComponent.prototype.addClass = function (el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    };
    DragComponent.prototype.removeClass = function (el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    };
    DragComponent.prototype.onDrag = function (args) {
        var e = args[0];
        this.removeClass(e, 'ex-moved');
    };
    DragComponent.prototype.onDrop = function (args) {
        var e = args[0];
        this.addClass(e, 'ex-moved');
    };
    DragComponent.prototype.onOver = function (args) {
        var el = args[0];
        this.addClass(el, 'ex-over');
    };
    DragComponent.prototype.onOut = function (args) {
        var el = args[0];
        this.removeClass(el, 'ex-over');
    };
    DragComponent.prototype.onDropModel = function (args) {
        var el = args[0], target = args[1], source = args[2];
        console.log('onDropModel:');
        console.log(el);
        console.log(target);
        console.log(source);
    };
    DragComponent.prototype.onRemoveModel = function (args) {
        var el = args[0], source = args[1];
        console.log('onRemoveModel:');
        console.log(el);
        console.log(source);
    };
    DragComponent = __decorate([
        core_1.Component({
            templateUrl: './drag.component.html',
            styleUrls: ['./drag.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [ng2_dragula_1.DragulaService])
    ], DragComponent);
    return DragComponent;
}());
exports.DragComponent = DragComponent;
//# sourceMappingURL=drag.component.js.map