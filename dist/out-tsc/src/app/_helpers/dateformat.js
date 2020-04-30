"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var moment = require("moment");
var MomentDateFormatter = /** @class */ (function (_super) {
    __extends(MomentDateFormatter, _super);
    function MomentDateFormatter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DT_FORMAT = 'MM/DD/YYYY';
        return _this;
    }
    MomentDateFormatter.prototype.parse = function (value) {
        if (value) {
            value = value.trim();
            var mdt = moment(value, this.DT_FORMAT);
        }
        return null;
    };
    MomentDateFormatter.prototype.format = function (date) {
        if (!date)
            return '';
        var mdt = moment([date.year, date.month - 1, date.day]);
        if (!mdt.isValid())
            return '';
        return mdt.format(this.DT_FORMAT);
    };
    return MomentDateFormatter;
}(ng_bootstrap_1.NgbDateParserFormatter));
exports.MomentDateFormatter = MomentDateFormatter;
//# sourceMappingURL=dateformat.js.map