"use strict";
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
var tinycolor = require("tinycolor2");
var segoe_mdl2_assets_1 = require("./fonts/segoe-mdl2-assets");
var IS_NODE_ENV_1 = require("../common/nodeJS/IS_NODE_ENV");
var prefixAll_1 = require("../common/prefixAll");
var generateAcrylicTexture_1 = require("./generateAcrylicTexture");
if (!IS_NODE_ENV_1.default) {
    segoe_mdl2_assets_1.default();
}
function darken(color, coefficient) {
    var hsl = tinycolor(color).toHsl();
    hsl.l = hsl.l * (1 - coefficient);
    return tinycolor(hsl).toRgbString();
}
exports.darken = darken;
function lighten(color, coefficient) {
    var hsl = tinycolor(color).toHsl();
    hsl.l = hsl.l + (100 - hsl.l) * coefficient;
    return tinycolor(hsl).toRgbString();
}
exports.lighten = lighten;
function getTheme(themeConfig) {
    themeConfig = themeConfig || {};
    var themeName = themeConfig.themeName, accent = themeConfig.accent, useFluentDesign = themeConfig.useFluentDesign, desktopBackgroundImage = themeConfig.desktopBackgroundImage, userAgent = themeConfig.userAgent, useInlineStyle = themeConfig.useInlineStyle;
    themeName = themeName || "dark";
    accent = accent || "#0078D7";
    useFluentDesign = useFluentDesign === void 0 ? false : useFluentDesign;
    var isDark = themeName === "dark";
    var baseHigh = isDark ? "#fff" : "#000";
    var altHigh = isDark ? "#000" : "#fff";
    var baseHighColor = tinycolor(baseHigh);
    var altHighColor = tinycolor(altHigh);
    var accentColor = tinycolor(accent);
    var accentColorHsl = accentColor.toHsl();
    var altMediumLow = altHighColor.setAlpha(0.4).toRgbString();
    var altMedium = altHighColor.setAlpha(0.6).toRgbString();
    var altMediumHigh = altHighColor.setAlpha(0.8).toRgbString();
    var theme = {
        themeName: themeName,
        fonts: {
            sansSerifFonts: "Segoe UI, Microsoft YaHei, Open Sans, sans-serif, Hiragino Sans GB, Arial, Lantinghei SC, STHeiti, WenQuanYi Micro Hei, SimSun",
            segoeMDL2Assets: "Segoe MDL2 Assets"
        },
        useInlineStyle: Boolean(useInlineStyle),
        styleManager: void 0,
        useFluentDesign: useFluentDesign,
        desktopBackground: void 0,
        desktopBackgroundImage: desktopBackgroundImage,
        haveAcrylicTextures: false,
        acrylicTexture40: {
            background: altMediumLow
        },
        acrylicTexture60: {
            background: altMedium
        },
        acrylicTexture80: {
            background: altMediumHigh
        },
        scrollReveals: [],
        scrollRevealListener: void 0,
        accent: accent,
        accentLighter1: lighten(accentColor.toHexString(), 0.5),
        accentLighter2: lighten(accentColor.toHexString(), 0.7),
        accentLighter3: lighten(accentColor.toHexString(), 0.9),
        accentDarker1: darken(accentColor.toHexString(), 0.5),
        accentDarker2: darken(accentColor.toHexString(), 0.7),
        accentDarker3: darken(accentColor.toHexString(), 0.9),
        baseLow: baseHighColor.setAlpha(0.2).toRgbString(),
        baseMediumLow: baseHighColor.setAlpha(0.4).toRgbString(),
        baseMedium: baseHighColor.setAlpha(0.6).toRgbString(),
        baseMediumHigh: baseHighColor.setAlpha(0.8).toRgbString(),
        baseHigh: baseHigh,
        altLow: altHighColor.setAlpha(0.2).toRgbString(),
        altMediumLow: altMediumLow,
        altMedium: altMedium,
        altMediumHigh: altMediumHigh,
        altHigh: altHigh,
        listLow: baseHighColor.setAlpha(0.1).toRgbString(),
        listMedium: baseHighColor.setAlpha(0.2).toRgbString(),
        listAccentLow: accentColor.setAlpha(0.6).toRgbString(),
        listAccentMedium: accentColor.setAlpha(0.8).toRgbString(),
        listAccentHigh: accentColor.setAlpha(0.9).toRgbString(),
        chromeLow: isDark ? "#171717" : "#f2f2f2",
        chromeMediumLow: isDark ? "#2b2b2b" : "#f2f2f2",
        chromeMedium: isDark ? "#1f1f1f" : "#e6e6e6",
        chromeHigh: isDark ? "#767676" : "#ccc",
        chromeAltLow: isDark ? "#f2f2f2" : "#171717",
        chromeDisabledLow: isDark ? "#858585" : "#7a7a7a",
        chromeDisabledHigh: isDark ? "#333" : "#ccc",
        chromeBlackLow: tinycolor("#000").setAlpha(0.2).toRgbString(),
        chromeBlackMediumLow: tinycolor("#000").setAlpha(0.4).toRgbString(),
        chromeBlackMedium: tinycolor("#000").setAlpha(0.8).toRgbString(),
        chromeBlackHigh: "#000",
        chromeWhite: "#fff",
        isDarkTheme: isDark,
        prefixStyle: prefixAll_1.default(userAgent),
        prepareStyle: function (config, callback) {
            if (!this.styleManager)
                return;
            var extendsClassName = config.extendsClassName, managerConfig = __rest(config, ["extendsClassName"]);
            if (this.useInlineStyle) {
                managerConfig.className += extendsClassName ? " " + extendsClassName : "";
                return managerConfig;
            }
            else {
                var styleClasses = this.styleManager.setStyleToManager(managerConfig, callback);
                styleClasses.className += extendsClassName ? " " + extendsClassName : "";
                return styleClasses;
            }
        },
        prepareStyles: function (config, callback) {
            if (!this.styleManager)
                return;
            if (this.useInlineStyle) {
                var styles = config.styles;
                var result = {};
                for (var key in styles) {
                    result[key] = { style: styles[key] };
                }
                return result;
            }
            else {
                var styleClasses = this.styleManager.setStylesToManager(config, callback);
                return styleClasses;
            }
        },
        classNames: function () {
            var classNames = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                classNames[_i] = arguments[_i];
            }
            return classNames.reduce(function (prev, curr) { return (prev || "") + (curr ? " " + curr : ""); });
        },
        generateAcrylicTextures: function (currTheme, themeCallback) {
            var _this = this;
            this.acrylicTextureCount = 0;
            var baseConfig = {
                blurSize: 24,
                noiseSize: 1,
                noiseOpacity: 0.2
            };
            var backgrounds = [];
            var callback = function (image, key) {
                if (key === 4) {
                    _this.acrylicTextureCount += 1;
                    Object.assign(currTheme.acrylicTexture40, __assign({ tintColor: currTheme.chromeMediumLow, tintOpacity: 0.4, background: "url(" + image + ") no-repeat fixed top left / cover" }, baseConfig));
                }
                if (key === 6) {
                    _this.acrylicTextureCount += 1;
                    Object.assign(currTheme.acrylicTexture60, __assign({ tintColor: currTheme.chromeLow, tintOpacity: 0.6, background: "url(" + image + ") no-repeat fixed top left / cover" }, baseConfig));
                }
                if (key === 8) {
                    _this.acrylicTextureCount += 1;
                    Object.assign(currTheme.acrylicTexture80, __assign({ tintColor: currTheme.chromeLow, tintOpacity: 0.8, background: "url(" + image + ") no-repeat fixed top left / cover" }, baseConfig));
                }
                if (_this.acrylicTextureCount === 3) {
                    currTheme.haveAcrylicTextures = true;
                    if (themeCallback)
                        themeCallback(currTheme);
                    if (_this.generateAcrylicTextures.callback) {
                        _this.generateAcrylicTextures.callback(currTheme);
                    }
                    return currTheme;
                }
            };
            generateAcrylicTexture_1.default(currTheme.desktopBackgroundImage, currTheme.chromeMediumLow, 0.4, void 0, void 0, void 0, function (image) { return callback(image, 4); });
            generateAcrylicTexture_1.default(currTheme.desktopBackgroundImage, currTheme.chromeLow, 0.6, void 0, void 0, void 0, function (image) { return callback(image, 6); });
            generateAcrylicTexture_1.default(currTheme.desktopBackgroundImage, currTheme.chromeLow, 0.8, void 0, void 0, void 0, function (image) { return callback(image, 8); });
        },
        toasts: [],
        typographyStyles: {
            header: {
                fontWeight: "lighter",
                fontSize: 46,
                lineHeight: "56px"
            },
            subHeader: {
                fontWeight: "lighter",
                fontSize: 34,
                lineHeight: "40px"
            },
            title: {
                fontWeight: "lighter",
                fontSize: 24,
                lineHeight: "28px"
            },
            subTitle: {
                fontWeight: "normal",
                fontSize: 20,
                lineHeight: "24px"
            },
            subTitleAlt: {
                fontWeight: "normal",
                fontSize: 18,
                lineHeight: "20px"
            },
            base: {
                fontWeight: 300,
                fontSize: 15,
                lineHeight: "20px"
            },
            baseAlt: {
                fontWeight: "bold",
                fontSize: 15,
                lineHeight: "20px"
            },
            body: {
                fontWeight: 200,
                fontSize: 15,
                lineHeight: "20px"
            },
            captionAlt: {
                fontWeight: "lighter",
                fontSize: 13,
                lineHeight: "16px"
            },
            caption: {
                fontWeight: "lighter",
                fontSize: 12,
                lineHeight: "14px"
            }
        },
        zIndex: {
            listView: 10,
            calendarView: 20,
            dropDownMenu: 102,
            commandBar: 200,
            tooltip: 201,
            flyout: 202,
            contentDialog: 300,
            header: 301,
            mediaPlayer: 2147483647,
            toast: 310
        }
    };
    return theme;
}
exports.default = getTheme;
//# sourceMappingURL=getTheme.js.map