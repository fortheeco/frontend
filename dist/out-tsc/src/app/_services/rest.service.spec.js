"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var rest_service_1 = require("./rest.service");
describe('RestService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(rest_service_1.RestService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=rest.service.spec.js.map