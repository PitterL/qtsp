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
var PseudoClasses_1 = require("../PseudoClasses");
var emptyFunc = function () { };
var ListView = /** @class */ (function (_super) {
    __extends(ListView, _super);
    function ListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            focusIndex: _this.props.defaultFocusListIndex
        };
        _this.inlineStyles = null;
        _this.getItemNode = function (itemNode, index, disabled, focus, style, onClick) {
            var inlineStyles = _this.inlineStyles;
            var theme = _this.context.theme;
            var _a = _this.props, onChooseItem = _a.onChooseItem, background = _a.background;
            var focusIndex = _this.state.focusIndex;
            var isDarkTheme = theme.isDarkTheme;
            var isFocus = focus || focusIndex === index;
            var defaultBG = isFocus ? theme.listAccentLow : "none";
            var focusBG = isFocus ? theme.listAccentHigh : (theme.useFluentDesign ? theme.acrylicTexture40.background : theme.listLow);
            var clickBG = isFocus ? theme.accent : theme.chromeHigh;
            var itemStyles = theme.prepareStyle({
                className: "list-view-item",
                style: theme.prefixStyle(__assign({ background: defaultBG, color: disabled ? theme.baseLow : theme.baseHigh, "&:hover": {
                        background: focusBG
                    }, "&:active": {
                        transform: "scale(0.99)"
                    } }, inlineStyles.item, style))
            });
            return (React.createElement(PseudoClasses_1.default, __assign({}, itemStyles, { key: "" + index }),
                React.createElement("div", { onClick: onClick, onMouseDown: disabled ? void 0 : function (e) {
                        onChooseItem(index);
                    } }, itemNode)));
        };
        return _this;
    }
    ListView.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.defaultFocusListIndex !== this.state.focusIndex) {
            this.setState({ focusIndex: nextProps.defaultFocusListIndex });
        }
    };
    ListView.prototype.render = function () {
        var _this = this;
        var _a = this.props, listSource = _a.listSource, listItemStyle = _a.listItemStyle, onChooseItem = _a.onChooseItem, background = _a.background, defaultFocusListIndex = _a.defaultFocusListIndex, attributes = __rest(_a, ["listSource", "listItemStyle", "onChooseItem", "background", "defaultFocusListIndex"]);
        var theme = this.context.theme;
        var inlineStyles = getStyles(this);
        var styles = theme.prepareStyles({
            className: "list-view",
            styles: inlineStyles
        });
        this.inlineStyles = inlineStyles;
        var listSourceAny = listSource;
        return (React.createElement("div", __assign({ ref: function (rootElm) { return _this.rootElm = rootElm; } }, attributes, styles.root), listSourceAny && listSourceAny.map(function (listItem, index) {
            if (React.isValidElement(listItem)) {
                var props = listItem.props;
                var disabled = props.disabled, focus_1 = props.focus, style = props.style, onClick = props.onClick;
                return _this.getItemNode(listItem, index, disabled, focus_1, style, onClick);
            }
            else if (typeof listItem === "string" || typeof listItem === "number") {
                return _this.getItemNode(listItem, index);
            }
            else if (typeof listItem === "object" && listItem.itemNode) {
                var itemNode = listItem.itemNode, disabled = listItem.disabled, focus_2 = listItem.focus, style = listItem.style, onClick = listItem.onClick;
                return _this.getItemNode(itemNode, index, disabled, focus_2, style, onClick);
            }
            else {
                return null;
            }
        })));
    };
    ListView.defaultProps = {
        onChooseItem: emptyFunc
    };
    ListView.contextTypes = { theme: PropTypes.object };
    return ListView;
}(React.Component));
exports.ListView = ListView;
function getStyles(listView) {
    var context = listView.context, _a = listView.props, listItemStyle = _a.listItemStyle, background = _a.background, style = _a.style;
    var theme = context.theme;
    var prefixStyle = theme.prefixStyle;
    return {
        root: theme.prefixStyle(__assign({ width: 320, display: "inline-block", verticalAlign: "middle", fontSize: 14, padding: "8px 0", color: theme.baseMediumHigh, border: "1px solid " + (theme.useFluentDesign ? theme.listLow : theme.altHigh), background: background || (theme.useFluentDesign ? theme.acrylicTexture60.background : theme.chromeLow), transition: "all .25s" }, style)),
        item: theme.prefixStyle(__assign({ cursor: "default", padding: 8, width: "100%", transition: "all 0.25s" }, listItemStyle))
    };
}
exports.default = ListView;
//# sourceMappingURL=index.js.map