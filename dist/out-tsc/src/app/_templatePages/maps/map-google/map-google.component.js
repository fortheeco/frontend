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
var MapgoogleComponent = /** @class */ (function () {
    function MapgoogleComponent() {
        this.lat = -34.397;
        this.lng = 150.644;
        this.latA = -34.754764;
        this.lngA = 149.736246;
        this.zoom = 8;
        this.styles = [
            {
                featureType: 'all',
                stylers: [
                    {
                        saturation: -80
                    }
                ]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                    {
                        hue: '#00ffee'
                    },
                    {
                        saturation: 50
                    }
                ]
            },
            {
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            }
        ];
    }
    __decorate([
        core_1.ViewChild('map1'),
        __metadata("design:type", Object)
    ], MapgoogleComponent.prototype, "map1", void 0);
    __decorate([
        core_1.ViewChild('map2'),
        __metadata("design:type", Object)
    ], MapgoogleComponent.prototype, "map2", void 0);
    __decorate([
        core_1.ViewChild('map3'),
        __metadata("design:type", Object)
    ], MapgoogleComponent.prototype, "map3", void 0);
    __decorate([
        core_1.ViewChild('map4'),
        __metadata("design:type", Object)
    ], MapgoogleComponent.prototype, "map4", void 0);
    MapgoogleComponent = __decorate([
        core_1.Component({
            selector: 'app-map-google',
            templateUrl: './map-google.component.html',
            styleUrls: ['./map-google.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], MapgoogleComponent);
    return MapgoogleComponent;
}());
exports.MapgoogleComponent = MapgoogleComponent;
//# sourceMappingURL=map-google.component.js.map