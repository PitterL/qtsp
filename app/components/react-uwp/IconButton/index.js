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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var Icon_1 = require("../Icon");
var IconButton = /** @class */ (function (_super) {
    __extends(IconButton, _super);
    function IconButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconButton.prototype.render = function () {
        var _a = this.props, style = _a.style, hoverStyle = _a.hoverStyle, activeStyle = _a.activeStyle, children = _a.children, size = _a.size, disabled = _a.disabled, attributes = __rest(_a, ["style", "hoverStyle", "activeStyle", "children", "size", "disabled"]);
        var theme = this.context.theme;
        return (React.createElement(Icon_1.default, __assign({}, attributes, { style: __assign({ display: "inline-block", fontFamily: theme.fonts.segoeMDL2Assets, verticalAlign: "middle", textAlign: "center", userSelect: "none", background: disabled ? theme.baseLow : "none", border: "none", outline: "none", fontSize: size / 2, width: size, height: size, cursor: "pointer", color: disabled ? theme.baseMedium : theme.baseHigh, padding: 0, flexShrink: 0, lineHeight: size + "px", transition: "background .25s ease-in-out" }, style), hoverStyle: disabled ? void 0 : hoverStyle || {
                background: theme.listLow
            }, activeStyle: disabled ? void 0 : activeStyle || {
                background: theme.baseLow
            } }), children));
    };
    IconButton.defaultProps = {
        size: 48
    };
    IconButton.contextTypes = { theme: PropTypes.object };
    return IconButton;
}(React.Component));
exports.IconButton = IconButton;
exports.default = IconButton;
//# sourceMappingURL=index.js.map