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
require("rxjs/Rx");
var rest_service_1 = require("../../_services/rest.service");
var statusTranslators_1 = require("../../_helpers/statusTranslators");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var firebase = require("Firebase");
var core_2 = require("@agm/core");
var ViewDeliveryComponent = /** @class */ (function () {
    function ViewDeliveryComponent(rest, activatedRoute, statusTranslators, mapsAPILoader, modalService) {
        this.rest = rest;
        this.activatedRoute = activatedRoute;
        this.statusTranslators = statusTranslators;
        this.mapsAPILoader = mapsAPILoader;
        this.modalService = modalService;
        this.isLoading = false;
        this.cords = { latitude: '', longitude: '' };
        this.agenticon = './assets/images/person1.png';
        this.device = {
            uuid: '12345',
        };
        this.markers = [];
        this.deliveryId = this.activatedRoute.snapshot.paramMap.get("id");
        this.getDelivery(this.deliveryId);
    }
    ViewDeliveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.delivery)
                _this._getDelivery();
        }, 2000);
    };
    ViewDeliveryComponent.prototype.getDelivery = function (id) {
        var _this = this;
        this.isLoading = true;
        this.rest.viewDelivery(id).subscribe(function (response) {
            _this.isLoading = false;
            _this.delivery = response.json().data;
            _this.geoCode(_this.delivery.delivery_address);
            // this.ref = firebase.database().ref(`geolocations/${this.delivery.agent.id}`);
            _this.ref = firebase.database().ref("geolocations");
            console.log(_this.delivery);
            _this.ref.on('value', function (resp) {
                console.log(resp);
                _this.deleteMarkers();
                exports.snapshotToArray(resp).forEach(function (data) {
                    console.log('>>>data');
                    console.log(data);
                    var image = 'assets/img/person1.png';
                    var updatelocation = new google.maps.LatLng(data.latitude, data.longitude);
                    //set latitude, longitude and zoom
                    _this.latitude = data.latitude;
                    _this.longitude = data.longitude;
                    _this.zoom = 14;
                    _this.addMarker(updatelocation, image);
                    _this.setMapOnAll(_this.map);
                    // this.map.panTo(updatelocation)
                });
            });
        }, function (error) {
            _this.isLoading = false;
        });
    };
    ViewDeliveryComponent.prototype._getDelivery = function () {
        var _this = this;
        this.rest.viewDelivery(this.deliveryId).subscribe(function (response) {
            _this.delivery = response.json().data;
        }, function (error) {
        });
    };
    ViewDeliveryComponent.prototype.addMarker = function (location, image) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: image
        });
        this.markers.push(marker);
    };
    ViewDeliveryComponent.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    ViewDeliveryComponent.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    ViewDeliveryComponent.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    ViewDeliveryComponent.prototype.viewAllBoxesQR = function (row) {
        var modalRef = null;
        modalRef = this.modalService.open(allBoxesQRModalContent);
        modalRef.componentInstance.inputData = row;
    };
    ViewDeliveryComponent.prototype.geoCode = function (address) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == 'OK') {
                console.log(_this.cords.latitude);
                _this.cords.latitude = results[0].geometry.location.lat();
                _this.cords.longitude = results[0].geometry.location.lng();
                // this.loadMap(this.cords.latitude, this.cords.longitude);
                var latLng = new google.maps.LatLng(_this.cords.latitude, _this.cords.longitude);
                // let latLng = new google.maps.LatLng(-34.9290, 138.6010);
                var marker = new google.maps.Marker({
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    position: latLng
                });
                //  console.log(this.cords.longitude);       
            }
            else {
            }
        });
    };
    ViewDeliveryComponent = __decorate([
        core_1.Component({
            selector: 'app-view-delivery',
            templateUrl: './view-delivery.component.html',
            styleUrls: ['./view-delivery.component.css']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService,
            router_1.ActivatedRoute,
            statusTranslators_1.StatusTranslators,
            core_2.MapsAPILoader,
            ng_bootstrap_1.NgbModal])
    ], ViewDeliveryComponent);
    return ViewDeliveryComponent;
}());
exports.ViewDeliveryComponent = ViewDeliveryComponent;
var allBoxesQRModalContent = /** @class */ (function () {
    function allBoxesQRModalContent(activeModal) {
        this.activeModal = activeModal;
        this.loading = false;
        this.error = '';
        this.RepeatArr = Array;
        this.staticAlertClosed = false;
    }
    allBoxesQRModalContent.prototype.ngOnInit = function () {
    };
    allBoxesQRModalContent.prototype.returnString = function (obj) {
        return JSON.stringify(obj);
    };
    allBoxesQRModalContent = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-content',
            template: "\n  <div class=\"modal-header\"  *ngIf=\"inputData\">\n    <h4 class=\"modal-title\">QR for batch {{ inputData.batch_code }}</h4>\n    <!-- \n    <label for=\"inlineFormCustomSelect\">Per Page</label>\n    <select [(ngModel)]=\"perPage\" class=\"custom-select col-md-2\" id=\"inlineFormCustomSelect\">\n      <option value=\"1\">1</option>\n      <option value=\"4\">4</option>\n      <option value=\"8\">8</option>\n    </select>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    -->\n  </div>\n  <div class=\"modal-body\"  *ngIf=\"inputData\"> \n    <div class=\"row\" id=\"print-section\">\n        <div style=\"width: 960px;\">\n          <div *ngFor=\"let i of inputData\"  style=\"width: 200px; float:left; margin-bottom: 15px;\">\n          <h4 style=\"text-align:center; margin-bottom: 30px\">QR for Box {{ i.box_id }}</h4> \n            <qrcode [qrdata]=\"returnString(i)\" [size]=\"128\" [level]=\"'M'\"></qrcode>\n          </div>\n        </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button printSectionId=\"print-section\" class=\"btn btn-outline-success\" ngxPrint><i class=\"mdi mdi-printer\"></i> Print</button> \n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.dismiss()\">Close</button>\n  </div>\n  <style>\n    .lbl{\n      font-weight: bold;\n      display: inline-block;\n      width: 30%;\n    }\n    @media print {\n      .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n           float: left;\n      }\n      .col-sm-12 {\n           width: 100%;\n      }\n      .col-sm-11 {\n           width: 91.66666667%;\n      }\n      .col-sm-10 {\n           width: 83.33333333%;\n      }\n      .col-sm-9 {\n           width: 75%;\n      }\n      .col-sm-8 {\n           width: 66.66666667%;\n      }\n      .col-sm-7 {\n           width: 58.33333333%;\n      }\n      .col-sm-6 {\n           width: 50%;\n      }\n      .col-sm-5 {\n           width: 41.66666667%;\n      }\n      .col-sm-4 {\n           width: 33.33333333%;\n      }\n      .col-sm-3 {\n           width: 25%;\n      }\n      .col-sm-2 {\n           width: 16.66666667%;\n      }\n      .col-sm-1 {\n           width: 8.33333333%;\n      }\n   }\n    </style>\n  "
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
    ], allBoxesQRModalContent);
    return allBoxesQRModalContent;
}());
exports.allBoxesQRModalContent = allBoxesQRModalContent;
exports.snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=view-delivery.component.js.map