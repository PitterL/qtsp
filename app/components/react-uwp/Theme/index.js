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
var StyleManager_1 = require("../styles/StyleManager");
var darkTheme_1 = require("../styles/darkTheme");
var getTheme_1 = require("../styles/getTheme");
exports.getTheme = getTheme_1.default;
var RenderToBody_1 = require("../RenderToBody");
var ToastWrapper_1 = require("../Toast/ToastWrapper");
var getBaseCSSText_1 = require("./getBaseCSSText");
var segoe_mdl2_assets_1 = require("../styles/fonts/segoe-mdl2-assets");
var IS_NODE_ENV_1 = require("../common/nodeJS/IS_NODE_ENV");
var customLocalStorageName = "__REACT_UWP__";
var baseClassName = "react-uwp-theme";
var themeCallback = function () { };
var Theme = /** @class */ (function (_super) {
    __extends(Theme, _super);
    function Theme() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.acrylicTextureCount = 0;
        _this.themeClassName = "react-uwp-theme-dark";
        _this.prevStyleManager = null;
        _this.getDefaultTheme = function () {
            var _a = _this.props, theme = _a.theme, autoSaveTheme = _a.autoSaveTheme;
            if (!IS_NODE_ENV_1.default && autoSaveTheme && !theme) {
                theme = _this.getLocalStorageTheme();
            }
            else {
                theme = theme || darkTheme_1.default;
            }
            return theme;
        };
        _this.getLocalStorageTheme = function () {
            var themeConfig = {};
            var theme = _this.props.theme;
            if (theme) {
                Object.assign(themeConfig, {
                    themeName: theme.themeName,
                    accent: theme.accent,
                    useFluentDesign: theme.useFluentDesign,
                    desktopBackgroundImage: theme.desktopBackgroundImage
                });
            }
            var storageString = localStorage.getItem(customLocalStorageName);
            if (storageString) {
                var data = {};
                try {
                    data = JSON.parse(storageString);
                    var themeName = data.themeName, accent = data.accent, useFluentDesign = data.useFluentDesign, desktopBackgroundImage = data.desktopBackgroundImage;
                    theme = getTheme_1.default({
                        themeName: themeName === void 0 ? themeConfig.themeName : themeName,
                        accent: accent === void 0 ? themeConfig.accent : accent,
                        useFluentDesign: useFluentDesign === void 0 ? themeConfig.useFluentDesign : useFluentDesign,
                        desktopBackgroundImage: desktopBackgroundImage === void 0 ? themeConfig.desktopBackgroundImage : desktopBackgroundImage
                    });
                }
                catch (error) {
                    theme = _this.props.theme || darkTheme_1.default;
                }
            }
            else {
                theme = _this.props.theme || darkTheme_1.default;
            }
            return theme;
        };
        _this.bindNewThemeMethods = function (theme) {
            var scrollBarStyleSelector = _this.props.scrollBarStyleSelector;
            var styleManager = new StyleManager_1.default({ theme: theme });
            styleManager.addCSSTextWithUpdate(getBaseCSSText_1.default(theme, "uwp-base", scrollBarStyleSelector));
            Object.assign(theme, {
                desktopBackground: "url(" + theme.desktopBackgroundImage + ") no-repeat fixed top left / cover",
                updateTheme: _this.updateTheme,
                saveTheme: _this.saveTheme,
                addToast: _this.addToast,
                updateToast: _this.updateToast,
                deleteToast: _this.deleteToast,
                scrollRevealListener: _this.handleScrollReveal,
                forceUpdateTheme: _this.forceUpdateTheme,
                styleManager: styleManager
            });
        };
        _this.handleNewTheme = function (theme) {
            _this.props.themeWillUpdate(theme);
        };
        _this.state = {
            currTheme: (function () {
                var theme = _this.getDefaultTheme();
                _this.handleNewTheme(theme);
                return theme;
            })()
        };
        _this.getChildContext = function () {
            return { theme: _this.state.currTheme };
        };
        _this.updateTheme = function (newTheme, callback) {
            if (callback === void 0) { callback = themeCallback; }
            var needGenerateAcrylic = _this.sureNeedGenerateAcrylic(newTheme);
            _this.handleNewTheme(newTheme);
            _this.setState({
                currTheme: newTheme
            }, function () {
                callback(newTheme);
                if (needGenerateAcrylic) {
                    _this.handleNewTheme(newTheme);
                    newTheme.generateAcrylicTextures(newTheme, function (currTheme) { return _this.setState({ currTheme: currTheme }); });
                }
            });
        };
        _this.forceUpdateTheme = function (currTheme) { return _this.setState({ currTheme: currTheme }); };
        _this.saveTheme = function (newTheme, callback) {
            if (callback === void 0) { callback = themeCallback; }
            localStorage.setItem(customLocalStorageName, JSON.stringify({
                themeName: newTheme.themeName,
                accent: newTheme.accent,
                useFluentDesign: newTheme.useFluentDesign,
                desktopBackgroundImage: newTheme.desktopBackgroundImage
            }));
            var needGenerateAcrylic = _this.sureNeedGenerateAcrylic(newTheme);
            _this.handleNewTheme(newTheme);
            _this.setState({
                currTheme: newTheme
            }, function () {
                callback(newTheme);
                if (needGenerateAcrylic) {
                    _this.handleNewTheme(newTheme);
                    newTheme.generateAcrylicTextures(newTheme, function (currTheme) { return _this.setState({ currTheme: currTheme }); });
                }
            });
        };
        _this.sureNeedGenerateAcrylic = function (newTheme) {
            var currTheme = _this.state.currTheme;
            var needGenerateAcrylic = newTheme.desktopBackgroundImage && _this.props.needGenerateAcrylic;
            if (needGenerateAcrylic &&
                newTheme.desktopBackgroundImage === currTheme.desktopBackgroundImage) {
                if (currTheme.useFluentDesign) {
                    Object.assign(currTheme.isDarkTheme ? _this.cacheDarkAcrylicTextures : _this.cacheLightAcrylicTextures, {
                        acrylicTexture40: currTheme.acrylicTexture40,
                        acrylicTexture60: currTheme.acrylicTexture60,
                        acrylicTexture80: currTheme.acrylicTexture80
                    });
                    needGenerateAcrylic = false;
                }
                if (newTheme.useFluentDesign) {
                    if (newTheme.isDarkTheme && _this.cacheDarkAcrylicTextures.acrylicTexture40 || (!newTheme.isDarkTheme && _this.cacheLightAcrylicTextures.acrylicTexture40)) {
                        Object.assign(newTheme, newTheme.isDarkTheme ? _this.cacheDarkAcrylicTextures : _this.cacheLightAcrylicTextures);
                        needGenerateAcrylic = false;
                    }
                    else {
                        needGenerateAcrylic = true;
                    }
                }
                else {
                    needGenerateAcrylic = false;
                    Object.assign(newTheme, {
                        acrylicTexture40: currTheme.acrylicTexture40,
                        acrylicTexture60: currTheme.acrylicTexture60,
                        acrylicTexture80: currTheme.acrylicTexture80
                    });
                }
            }
            needGenerateAcrylic = needGenerateAcrylic && newTheme.useFluentDesign && _this.props.needGenerateAcrylic;
            return needGenerateAcrylic;
        };
        _this.findToastNodeTimers = [];
        _this.toastId = -1;
        _this.addToast = function (toast, callback, increaseId, currToastId) {
            if (increaseId === void 0) { increaseId = true; }
            var toastId = currToastId !== void 0 ? currToastId : _this.toastId;
            if (increaseId) {
                toastId += 1;
                _this.toastId = toastId;
            }
            if (_this.toastWrapper) {
                clearTimeout(_this.findToastNodeTimers[toastId]);
                _this.toastWrapper.addToast(toast);
                if (callback)
                    callback(toastId);
            }
            else {
                _this.findToastNodeTimers[toastId] = setTimeout(function () {
                    _this.addToast(toast, callback, false, toastId);
                }, 100);
            }
        };
        _this.updateToast = function (toastId, toast) {
            if (_this.toastWrapper)
                _this.toastWrapper.updateToast(toastId, toast);
        };
        _this.deleteToast = function (toastId) {
            _this.state.currTheme.toasts[toastId] = void 0;
        };
        _this.handleScrollReveal = function (e) {
            var currTheme = _this.state.currTheme;
            for (var _i = 0, _a = currTheme.scrollReveals; _i < _a.length; _i++) {
                var scrollReveal = _a[_i];
                var rootElm = scrollReveal.rootElm, animated = scrollReveal.animated, setEnterStyle = scrollReveal.setEnterStyle, setLeaveStyle = scrollReveal.setLeaveStyle, _b = scrollReveal.props, topOffset = _b.topOffset, bottomOffset = _b.bottomOffset;
                if (!rootElm)
                    return;
                var _c = rootElm.getBoundingClientRect(), top_1 = _c.top, height = _c.height;
                var innerHeight_1 = window.innerHeight;
                var isIn = false;
                if (height > innerHeight_1) {
                    isIn = top_1 < innerHeight_1 - height * height && top_1 > -height * 0.5;
                }
                else {
                    isIn = top_1 > 0 + topOffset && top_1 + height + bottomOffset < innerHeight_1;
                }
                if (isIn) {
                    if (!animated) {
                        setEnterStyle();
                        scrollReveal.animated = true;
                    }
                }
                else {
                    if (animated) {
                        setLeaveStyle();
                        scrollReveal.animated = false;
                    }
                }
            }
        };
        _this.cleanLocalStorage = function () {
            localStorage.setItem(customLocalStorageName, "");
        };
        return _this;
    }
    Theme.prototype.componentDidMount = function () {
        var _this = this;
        var currTheme = this.state.currTheme;
        if (IS_NODE_ENV_1.default && this.props.autoSaveTheme) {
            var currTheme_1 = this.getLocalStorageTheme();
            this.props.themeWillUpdate(currTheme_1);
            this.setState({ currTheme: currTheme_1 });
        }
        if (IS_NODE_ENV_1.default)
            segoe_mdl2_assets_1.setSegoeMDL2AssetsFonts();
        if (currTheme.useFluentDesign && currTheme.desktopBackgroundImage && this.props.needGenerateAcrylic) {
            this.handleNewTheme(currTheme);
            currTheme.generateAcrylicTextures(currTheme, function (currTheme) { return _this.setState({ currTheme: currTheme }); });
        }
        window.addEventListener("scroll", this.handleScrollReveal);
    };
    Theme.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        var theme = nextProps.theme;
        var currTheme = this.state.currTheme;
        var needGenerateAcrylic = this.sureNeedGenerateAcrylic(theme);
        if (nextProps && nextProps.theme && !this.props.autoSaveTheme) {
            if (theme.accent !== currTheme.accent ||
                theme.themeName !== currTheme.themeName ||
                theme.useFluentDesign !== currTheme.useFluentDesign ||
                theme.desktopBackgroundImage !== currTheme.desktopBackgroundImage) {
                this.handleNewTheme(theme);
                this.setState({
                    currTheme: theme
                }, function () {
                    if (needGenerateAcrylic) {
                        _this.handleNewTheme(theme);
                        theme.generateAcrylicTextures(theme, function (currTheme) { return _this.setState({ currTheme: currTheme }); });
                    }
                });
            }
        }
    };
    Theme.prototype.componentWillUpdate = function (nextProps, nextState) {
        this.prevStyleManager = this.state.currTheme.styleManager;
    };
    Theme.prototype.componentDidUpdate = function () {
        this.prevStyleManager.cleanStyleSheet();
        this.prevStyleManager = null;
    };
    Theme.prototype.componentWillUnmount = function () {
        var _a = this.state.currTheme, acrylicTexture40 = _a.acrylicTexture40, acrylicTexture60 = _a.acrylicTexture60, acrylicTexture80 = _a.acrylicTexture80;
        URL.revokeObjectURL(acrylicTexture40.background);
        URL.revokeObjectURL(acrylicTexture60.background);
        URL.revokeObjectURL(acrylicTexture80.background);
        this.state.currTheme.styleManager.cleanStyleSheet();
        window.removeEventListener("scroll", this.handleScrollReveal);
    };
    Theme.prototype.render = function () {
        var _this = this;
        var _a = this.props, autoSaveTheme = _a.autoSaveTheme, theme = _a.theme, onGeneratedAcrylic = _a.onGeneratedAcrylic, children = _a.children, style = _a.style, className = _a.className, needGenerateAcrylic = _a.needGenerateAcrylic, themeWillUpdate = _a.themeWillUpdate, scrollBarStyleSelector = _a.scrollBarStyleSelector, attributes = __rest(_a, ["autoSaveTheme", "theme", "onGeneratedAcrylic", "children", "style", "className", "needGenerateAcrylic", "themeWillUpdate", "scrollBarStyleSelector"]);
        var currTheme = this.state.currTheme;
        this.themeClassName = baseClassName + "-" + currTheme.themeName;
        this.bindNewThemeMethods(currTheme);
        var rootStyle = darkTheme_1.default.prefixStyle(__assign({ fontSize: 14, fontFamily: currTheme.fonts.sansSerifFonts, color: currTheme.baseHigh, display: "inline-block", verticalAlign: "middle", background: currTheme.useFluentDesign ? (this.acrylicTextureCount === 3 ? "none" : (needGenerateAcrylic ? currTheme.altMediumHigh : "none")) : currTheme.altHigh, width: "100%", height: "100%" }, style));
        var backgroundStyle = {
            position: "fixed",
            zIndex: -1,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: (currTheme.useFluentDesign && currTheme.desktopBackgroundImage) ? currTheme.desktopBackground : currTheme.altHigh,
            pointerEvents: "none"
        };
        currTheme.generateAcrylicTextures.callback = function (theme) {
            if (_this.backgroundEl) {
                Object.assign(_this.backgroundEl.rootElm.style, backgroundStyle, { background: theme.desktopBackground });
            }
            if (onGeneratedAcrylic)
                onGeneratedAcrylic();
        };
        return (React.createElement("div", __assign({}, attributes, currTheme.prepareStyle({
            style: rootStyle,
            className: "theme-root",
            extendsClassName: className ? this.themeClassName + " " + className : this.themeClassName
        })),
            React.createElement(RenderToBody_1.default, __assign({ ref: function (backgroundEl) { return _this.backgroundEl = backgroundEl; } }, currTheme.prepareStyle({
                style: backgroundStyle,
                className: "fluent-background"
            }))),
            React.createElement(RenderToBody_1.default, null,
                React.createElement(ToastWrapper_1.default, { ref: function (toastWrapper) { return _this.toastWrapper = toastWrapper; } })),
            children));
    };
    Theme.defaultProps = {
        needGenerateAcrylic: true,
        onGeneratedAcrylic: themeCallback,
        themeWillUpdate: themeCallback,
        scrollBarStyleSelector: "*"
    };
    Theme.childContextTypes = {
        theme: PropTypes.object
    };
    return Theme;
}(React.Component));
exports.Theme = Theme;
exports.default = Theme;
//# sourceMappingURL=index.js.map