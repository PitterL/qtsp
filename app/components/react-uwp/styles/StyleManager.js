"use strict";
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
var createHash = require("murmurhash-js/murmurhash3_gc");
var IS_NODE_ENV_1 = require("../common/nodeJS/IS_NODE_ENV");
var isUnitlessNumber_1 = require("../common/react/isUnitlessNumber");
exports.replace2Dashes = function (key) { return key.replace(/[A-Z]/g, function ($1) { return "-" + $1.toLowerCase(); }); };
exports.getStyleValue = function (key, value) { return ((typeof value === "number" && !isUnitlessNumber_1.default[key]) ? value + "px" : value); };
exports.extendsStyleKeys = {
    "&:hover": true,
    "&:active": true,
    "&:focus": true,
    "&:disabled": true
};
var StyleManager;
StyleManager = /** @class */ (function () {
    function class_1(config) {
        var _this = this;
        this.themeId = 0;
        this.styleElement = null;
        this.sheets = {};
        this.CSSText = "";
        this.addedCSSText = {};
        this.setupTheme = function (theme) {
            _this.theme = theme;
            _this.themeId = createHash([theme.accent, theme.themeName, theme.useFluentDesign].join(", "));
        };
        this.setupStyleElement = function () {
            if (IS_NODE_ENV_1.default)
                return;
            if (!_this.styleElement) {
                var name_1 = "data-uwp-jss-" + _this.themeId;
                _this.styleElement = document.createElement("style");
                _this.styleElement.setAttribute(name_1, "");
                document.head.appendChild(_this.styleElement);
            }
        };
        this.cleanStyleSheet = function () {
            if (_this.styleElement)
                document.head.removeChild(_this.styleElement);
            _this.theme = null;
            _this.sheets = {};
            _this.CSSText = "";
            _this.styleElement = null;
        };
        this.style2CSSText = function (style) { return style ? Object.keys(style).map(function (key) { return ("  " + exports.replace2Dashes(key) + ": " + exports.getStyleValue(key, style[key]) + ";"); }).join("\n") : void 0; };
        this.sheetsToString = function () { return "\n" + Object.keys(_this.sheets).map(function (id) { return _this.sheets[id].CSSText; }).join(""); };
        this.addStyle = function (style, className, callback) {
            if (className === void 0) { className = ""; }
            if (callback === void 0) { callback = function () { }; }
            var id = createHash(_this.themeId + ": " + JSON.stringify(style));
            if (_this.sheets[id])
                return _this.sheets[id];
            var classNameWithHash = "" + _this.globalClassName + className + "-" + id;
            var styleKeys = Object.keys(style);
            var CSSText = "";
            var contentCSSText = "";
            var extendsCSSText = "";
            for (var _i = 0, styleKeys_1 = styleKeys; _i < styleKeys_1.length; _i++) {
                var styleKey = styleKeys_1[_i];
                if (exports.extendsStyleKeys[styleKey]) {
                    var extendsStyle = style[styleKey];
                    if (extendsStyle) {
                        extendsCSSText += "." + classNameWithHash + styleKey.slice(1) + " {\n" + _this.style2CSSText(extendsStyle) + "\n}\n";
                    }
                }
                else {
                    if (style[styleKey] !== void 0) {
                        contentCSSText += "  " + exports.replace2Dashes(styleKey) + ": " + exports.getStyleValue(styleKey, style[styleKey]) + ";\n";
                    }
                }
            }
            CSSText += "." + classNameWithHash + " {\n" + contentCSSText + "\n}\n";
            CSSText += extendsCSSText;
            _this.sheets[id] = { CSSText: CSSText, classNameWithHash: classNameWithHash, id: id, className: className };
            callback();
            return _this.sheets[id];
        };
        this.addStyleWithUpdate = function (style, className) {
            if (className === void 0) { className = ""; }
            return _this.addStyle(style, className, _this.renderSheets);
        };
        this.addCSSText = function (CSSText, callback) {
            if (callback === void 0) { callback = function () { }; }
            var hash = createHash(CSSText);
            var shouldUpdate = !_this.addedCSSText[hash];
            if (shouldUpdate) {
                _this.addedCSSText[hash] = true;
                _this.CSSText += CSSText;
            }
            callback(shouldUpdate);
        };
        this.addCSSTextWithUpdate = function (CSSText) {
            _this.addCSSText(CSSText, function (shouldUpdate) {
                if (_this.styleElement && shouldUpdate) {
                    _this.updateStyleElement(_this.styleElement.textContent += CSSText);
                }
            });
        };
        this.renderSheets = function () {
            var textContent = _this.sheetsToString();
            textContent += _this.CSSText;
            _this.updateStyleElement(textContent);
        };
        this.updateStyleElement = function (textContent) {
            var name = "data-uwp-jss-" + _this.themeId;
            if (_this.styleElement) {
                _this.styleElement.textContent = textContent;
                _this.styleDidUpdate();
            }
        };
        var globalClassName = config.globalClassName, theme = config.theme, styleDidUpdate = config.styleDidUpdate;
        this.styleDidUpdate = styleDidUpdate || (function () { });
        this.globalClassName = globalClassName ? globalClassName + "-" : "";
        this.setupTheme(theme);
        this.setupStyleElement();
    }
    class_1.prototype.setStyleToManager = function (config, callback) {
        var newStyles = {};
        var _a = config || {}, style = _a.style, className = _a.className;
        if (callback)
            style = callback(this.theme);
        var dynamicStyle = style.dynamicStyle, styleProperties = __rest(style, ["dynamicStyle"]);
        className = className || "";
        var sheet = this.addStyleWithUpdate(styleProperties, className);
        newStyles = {
            className: sheet.classNameWithHash,
            style: dynamicStyle
        };
        return newStyles;
    };
    class_1.prototype.setStylesToManager = function (config, callback) {
        var newStyles = {};
        var className = config.className, styles = config.styles;
        if (callback)
            styles = callback(this.theme);
        className = className || "";
        var keys = Object.keys(styles);
        var CSSText = "";
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var styleItem = styles[key];
            if (!styleItem)
                continue;
            var isStyleClasses = styleItem.className || styleItem.style;
            var secondClassName = "-" + key;
            if (isStyleClasses) {
                secondClassName = styleItem.className;
                secondClassName = secondClassName ? "-" + secondClassName : "";
                secondClassName = "-" + key + secondClassName;
            }
            var _a = (isStyleClasses ? styleItem.style : styleItem), dynamicStyle = _a.dynamicStyle, styleProperties = __rest(_a, ["dynamicStyle"]);
            var sheet = this.addStyleWithUpdate(styleProperties, "" + className + secondClassName);
            newStyles[key] = {
                className: sheet.classNameWithHash,
                style: dynamicStyle
            };
            CSSText += sheet.CSSText + "\n";
        }
        return newStyles;
    };
    return class_1;
}());
exports.default = StyleManager;
//# sourceMappingURL=StyleManager.js.map