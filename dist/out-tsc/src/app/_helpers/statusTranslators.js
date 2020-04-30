"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusTranslators = /** @class */ (function () {
    function StatusTranslators() {
    }
    StatusTranslators.prototype.deliveryStatus = function (value) {
        var status = "";
        switch (value) {
            case "0":
                status = "requested";
                break;
            case "1":
                status = "picked up";
                break;
            case "2":
                status = "enroute";
                break;
            case "3":
                status = "delivered";
                break;
            default:
                status = "invalid status";
                break;
        }
        return status;
    };
    StatusTranslators.prototype.pickupStatus = function (value) {
        // JSON.stringify(value);
        var status = "";
        if (value == "0") {
            status = "REQUESTED";
        }
        else if (value == "1") {
            status = "PICKED UP";
        }
        return status;
    };
    return StatusTranslators;
}());
exports.StatusTranslators = StatusTranslators;
//# sourceMappingURL=statusTranslators.js.map