"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var Link_1 = require("../Link");
var HyperLink = /** @class */ (function (_super) {
    __extends(HyperLink, _super);
    function HyperLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HyperLink.prototype.render = function () {
        return (React.createElement(Link_1.default, __assign({}, __assign({ style: __assign({ textDecoration: "underline" }, this.props.style) }, this.props))));
    };
    HyperLink.contextTypes = { theme: PropTypes.object };
    return HyperLink;
}(React.Component));
exports.HyperLink = HyperLink;
exports.default = HyperLink;
//# sourceMappingURL=index.js.map