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
var http_1 = require("@angular/http");
var config_1 = require("../_providers/config/config");
var _services_1 = require("../_services");
var RestService = /** @class */ (function () {
    function RestService(httpc, authenticationService) {
        this.httpc = httpc;
        this.authenticationService = authenticationService;
        this.BASE_URL = config_1.BASE_URL;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers_formdata = new http_1.Headers({ 'Content-Type': undefined });
    }
    /* //////////////////////////////////
        Change password API
       //////////////////////////////////
    */
    /**
     * Add product
     *
     * @param data Product
     * @return Response
     */
    RestService.prototype.changePassword = function (data) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/auth/update-password";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers });
    };
    /* //////////////////////////////////
        Product CRUD API calls
       //////////////////////////////////
    */
    /**
     * Display a list of products.
     *
     * @return Products
     */
    RestService.prototype.getProducts = function () {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/product/get";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url, { headers: this.headers });
    };
    /**
     * Display a list of products by manufacturer.
     *
     * @return Products
     */
    RestService.prototype.getmManufacturerProducts = function (id) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/product/manufacturer/get/" + id;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url, { headers: this.headers });
    };
    /**
     * Add product
     *
     * @param data Product
     * @return Response
     */
    RestService.prototype.addProduct = function (data) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/product/create";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers });
    };
    /**
     * Add product
     *
     * @param data Product
     * @return Response
     */
    RestService.prototype.addBulkProducts = function (data) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/product/create/bulk";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers });
    };
    /**
     * Update product
     *
     * @param data Product
     * @return Response
     */
    RestService.prototype.updateProduct = function (data) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/product/update";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers });
    };
    /**
     * Delete product
     *
     * @param data Product
     * @return Response
     */
    RestService.prototype.deleteProduct = function (data) {
        console.log(data);
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/product/delete/" + data.id;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.delete(url, { headers: this.headers });
    };
    /* //////////////////////////////////
        Product Batch CRUD API calls
       //////////////////////////////////
    */
    /**
     * Display a list of products.
     *
     * @return Products Batch
     */
    RestService.prototype.getProductBatches = function (filters) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/product/batch/get";
        if (filters)
            url += "?product_id=" + filters.product_id;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url, { headers: this.headers });
    };
    /**
     * Add product Batch
     *
     * @param data Product
     * @return Response
     */
    RestService.prototype.addProductBatch = function (data) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/product/batch/create";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers });
    };
    /**
     * Update product Batch
     *
     * @param data Product
     * @return Response
     */
    RestService.prototype.updateProductBatch = function (data) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/product/batch/update";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers });
    };
    /**
     * Delete product Batch
     *
     * @param data Product
     * @return Response
     */
    RestService.prototype.deleteProductBatch = function (data) {
        console.log(data);
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/product/batch/delete/" + data.id;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.delete(url, { headers: this.headers });
    };
    /* //////////////////////////////////
        Middleman API calls
       //////////////////////////////////
    */
    /**
     * Display a list of middlemen.
     *
     * @return Middlemen
     */
    RestService.prototype.getMiddlemen = function () {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/auth/middlemen/get";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url, { headers: this.headers });
    };
    /**
     * Display a list of middlemen.
     *
     * @return Middlemen
     */
    RestService.prototype.getMiddlemanAssignment = function () {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/auth/middleman/assigments/get";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url, { headers: this.headers });
    };
    /**
     * Add middleman under user
     *
     * @param data Profile
     * @return Response
     */
    RestService.prototype.addMiddleman = function (data) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/auth/add-user";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers });
    };
    /**
     * Remove middleman under user
     *
     * @param data Profile
     * @return Response
     */
    RestService.prototype.removeMiddleman = function (data) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/auth/remove-middleman";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers });
    };
    /* //////////////////////////////////
        Staff API calls
       //////////////////////////////////
    */
    /**
     * Display a list of staff.
     *
     * @return Staff
     */
    RestService.prototype.getStaff = function () {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/auth/staff/get";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url, { headers: this.headers });
    };
    /**
     * Display a list of products.
     *
     * @return Products Batch
     */
    RestService.prototype.getAgents = function () {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/auth/agents/get";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url, { headers: this.headers });
    };
    /**
     * Add agent under user
     *
     * @param data Profile
     * @return Response
     */
    RestService.prototype.addAgent = function (data) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/auth/add-user";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers });
    };
    /**
     * Remove agent under user
     *
     * @param data Profile
     * @return Response
     */
    RestService.prototype.removeAgent = function (data) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/auth/remove-agent";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers });
    };
    RestService.prototype.processErrorMessages = function (str) {
        var s = "";
        for (var i in str) {
            s += str[i] + ", ";
        }
        return s;
    };
    /* //////////////////////////////////
        Requests API calls
       //////////////////////////////////
    */
    /**
    * Display a list of pickup requests by user.
    *
    * @return Requests
    */
    RestService.prototype.getUserPickupRequest = function () {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/request/pickup/get/by-user";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url, { headers: this.headers });
    };
    /**
    * Display a list of pickup requests by user.
    *
    * @return Requests
    */
    RestService.prototype.getUserIncomingPickupRequest = function () {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/request/pickup/get/to-user";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url, { headers: this.headers });
    };
    /**
     * Request Pickup
     *
     * @param data Request
     * @return Response
     */
    RestService.prototype.requestPickup = function (data) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/request/pickup/create";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers });
    };
    /**
    * Display a list of delivery requests by user.
    *
    * @return Requests
    */
    RestService.prototype.getUserDeliveries = function () {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/request/delivery/get/by-user";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url, { headers: this.headers });
    };
    /**
    * Get delivery details
    *
    * @return Delivery
    */
    RestService.prototype.viewDelivery = function (id) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/request/delivery/view/" + id;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.get(url, { headers: this.headers });
    };
    /**
     * Request Delivery
     *
     * @param data Request
     * @return Response
     */
    RestService.prototype.requestDelivery = function (data) {
        var userToken = 'Bearer ' + this.authenticationService.currentUserValue.access_token;
        var url = this.BASE_URL + "api/request/delivery/create";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('Authorization', userToken);
        return this.httpc.post(url, data, { headers: this.headers });
    };
    RestService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http,
            _services_1.AuthenticationService])
    ], RestService);
    return RestService;
}());
exports.RestService = RestService;
//# sourceMappingURL=rest.service.js.map