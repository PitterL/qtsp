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
var keycode_1 = require("keycode");
var AddBlurEvent_1 = require("../common/AddBlurEvent");
var Icon_1 = require("../Icon");
var emptyFunc = function () { };
var DropDownMenu = /** @class */ (function (_super) {
    __extends(DropDownMenu, _super);
    function DropDownMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentValue: _this.props.defaultValue || Array.isArray(_this.props.values) && _this.props.values[0],
            currentValues: (function () {
                var _a = _this.props, values = _a.values, defaultValue = _a.defaultValue;
                if (!Array.isArray(values))
                    return [];
                values = values.slice();
                defaultValue = (defaultValue || values[0]);
                values.unshift.apply(values, values.splice(values.indexOf(defaultValue), 1));
                return values;
            })()
        };
        _this.addBlurEvent = new AddBlurEvent_1.default();
        _this.addBlurEventMethod = function () {
            _this.addBlurEvent.setConfig({
                addListener: _this.state.showList,
                clickExcludeElm: _this.rootElm,
                blurCallback: function () {
                    var _a = _this.state, currentValue = _a.currentValue, currentValues = _a.currentValues;
                    currentValues.unshift.apply(currentValues, currentValues.splice(currentValues.indexOf(currentValue), 1));
                    _this.setState({
                        currentValue: currentValue,
                        showList: false,
                        currentValues: currentValues
                    });
                },
                blurKeyCodes: [keycode_1.codes.esc]
            });
        };
        _this.toggleShowList = function (currentValue) {
            var _a = _this.state, currentValues = _a.currentValues, showList = _a.showList;
            if (showList) {
                currentValues.unshift.apply(currentValues, currentValues.splice(currentValues.indexOf(currentValue), 1));
            }
            if (currentValue !== _this.state.currentValue) {
                _this.props.onChangeValue(currentValue);
            }
            _this.setState({
                currentValue: currentValue,
                showList: !showList,
                currentValues: showList ? currentValues : _this.props.values.slice()
            });
        };
        _this.getValue = function () { return _this.state.currentValue; };
        return _this;
    }
    DropDownMenu.prototype.componentWillReceiveProps = function (nextProps) {
        if (!Array.isArray(nextProps.values))
            return;
        this.setState({
            currentValue: nextProps.defaultValue || nextProps.values[0],
            currentValues: (function () {
                var values = nextProps.values, defaultValue = nextProps.defaultValue;
                values = values.slice();
                defaultValue = (defaultValue || values[0]);
                values.unshift.apply(values, values.splice(values.indexOf(defaultValue), 1));
                return values;
            })()
        });
    };
    DropDownMenu.prototype.componentDidMount = function () {
        this.addBlurEventMethod();
    };
    DropDownMenu.prototype.componentDidUpdate = function () {
        this.addBlurEventMethod();
    };
    DropDownMenu.prototype.componentWillUnmount = function () {
        this.addBlurEvent.cleanEvent();
    };
    DropDownMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, values = _a.values, itemWidth = _a.itemWidth, itemHeight = _a.itemHeight, defaultValue = _a.defaultValue, wrapperAttributes = _a.wrapperAttributes, itemAttributes = _a.itemAttributes, onChangeValue = _a.onChangeValue, background = _a.background, padding = _a.padding, style = _a.style, attributes = __rest(_a, ["values", "itemWidth", "itemHeight", "defaultValue", "wrapperAttributes", "itemAttributes", "onChangeValue", "background", "padding", "style"]);
        var _b = this.state, showList = _b.showList, currentValue = _b.currentValue, currentValues = _b.currentValues;
        var theme = this.context.theme;
        var isDarkTheme = theme.isDarkTheme;
        var inlineStyles = getStyles(this);
        var styles = theme.prepareStyles({
            className: "dropDownMenu",
            styles: inlineStyles
        });
        return (React.createElement("div", __assign({}, attributes, styles.root, { ref: function (rootElm) { return _this.rootElm = rootElm; } }),
            React.createElement("div", { ref: function (wrapperElm) { return _this.wrapperElm = wrapperElm; }, style: __assign({}, styles.wrapper.style, { border: (showList ? "1px" : "2px") + " solid " + theme.baseLow }), className: styles.wrapper.className, onMouseEnter: function (e) {
                    if (!showList)
                        e.currentTarget.style.border = "2px solid " + (showList ? theme.baseLow : theme.baseHigh);
                    if (wrapperAttributes.onMouseEnter)
                        wrapperAttributes.onMouseEnter(e);
                }, onMouseLeave: function (e) {
                    if (!showList)
                        e.currentTarget.style.border = "2px solid " + theme.baseLow;
                    if (wrapperAttributes.onMouseLeave)
                        wrapperAttributes.onMouseLeave(e);
                } }, currentValues.map(function (value, index) {
                var isCurrent = currentValue === value;
                return (React.createElement("div", { className: styles.value.className, style: __assign({}, styles.value.style, { height: (isCurrent || showList) ? itemHeight : 0, background: (isCurrent && showList) ? theme.listAccentLow : "none" }), onClick: function () { return _this.toggleShowList(value); }, onMouseEnter: !showList ? itemAttributes.onMouseEnter : function (e) {
                        e.currentTarget.style.background = isCurrent ? theme.listAccentMedium : theme.useFluentDesign ? theme.listLow : theme.chromeMedium;
                        itemAttributes.onMouseEnter(e);
                    }, onMouseLeave: !showList ? itemAttributes.onMouseLeave : function (e) {
                        e.currentTarget.style.background = isCurrent ? theme.listAccentLow : "transparent";
                        itemAttributes.onMouseLeave(e);
                    }, key: "" + index },
                    React.createElement("p", __assign({}, styles.content), value),
                    !showList && isCurrent ? (React.createElement(Icon_1.default, { style: { fontSize: itemHeight / 2 } }, "ChevronDown4Legacy")) : null));
            }))));
    };
    DropDownMenu.defaultProps = {
        itemWidth: 132,
        padding: 4,
        itemHeight: 28,
        onChangeValue: emptyFunc,
        wrapperAttributes: {
            onMouseEnter: emptyFunc,
            onMouseLeave: emptyFunc
        },
        itemAttributes: {
            onMouseEnter: emptyFunc,
            onMouseLeave: emptyFunc
        }
    };
    DropDownMenu.contextTypes = { theme: PropTypes.object };
    return DropDownMenu;
}(React.Component));
exports.DropDownMenu = DropDownMenu;
exports.default = DropDownMenu;
function getStyles(dropDownMenu) {
    var theme = dropDownMenu.context.theme, _a = dropDownMenu.props, style = _a.style, itemHeight = _a.itemHeight, itemWidth = _a.itemWidth, padding = _a.padding, wrapperAttributes = _a.wrapperAttributes, background = _a.background, values = _a.values, showList = dropDownMenu.state.showList;
    var prefixStyle = theme.prefixStyle;
    var currBackground = background || (theme.useFluentDesign ? theme.acrylicTexture80.background : theme.chromeLow);
    var haveWrapperStyle = wrapperAttributes && wrapperAttributes.style;
    var zIndex = (style && style.zIndex) ? style.zIndex : (showList ? theme.zIndex.dropDownMenu : 1);
    return {
        root: prefixStyle(__assign({ position: "relative", display: "inline-block", verticalAlign: "middle", width: itemWidth, height: itemHeight + padding }, style, { zIndex: zIndex })),
        wrapper: prefixStyle(__assign({ position: "absolute", top: 0, left: 0, color: theme.baseMediumHigh, background: currBackground, width: itemWidth, height: showList ? values.length * itemHeight + 16 : itemHeight + padding, overflowX: "hidden", zIndex: zIndex, padding: showList ? "6px 0" : 0, transition: "all .25s 0s ease-in-out" }, (haveWrapperStyle ? wrapperAttributes.style : void 0), { overflowY: showList && haveWrapperStyle ? wrapperAttributes.style.overflowY : "hidden" })),
        value: prefixStyle({
            width: itemWidth,
            display: "flex",
            padding: "0 8px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }),
        content: {
            textAlign: "left",
            cursor: "default",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            wordWrap: "normal",
            whiteSpace: "nowrap",
            lineHeight: "28px",
            textOverflow: "ellipsis"
        }
    };
}
//# sourceMappingURL=index.js.map