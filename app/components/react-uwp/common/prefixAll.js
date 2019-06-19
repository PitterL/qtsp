"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Prefixer = require("inline-style-prefixer");
var IS_NODE_ENV_1 = require("./nodeJS/IS_NODE_ENV");
function prefixAll(userAgent) {
    var isServer = IS_NODE_ENV_1.default;
    if (userAgent === false) {
        return function (style) { return style; };
    }
    if (!isServer && userAgent === void 0) {
        userAgent = navigator.userAgent;
    }
    if (!isServer || (isServer && (userAgent !== void 0 && userAgent !== "all"))) {
        var prefixer_1 = new Prefixer({ userAgent: userAgent });
        return function (style) {
            if (!style)
                return;
            return prefixer_1.prefix(style);
        };
    }
    else {
        return function (style) {
            if (!style)
                return;
            var stylePrefixed = Prefixer.prefixAll(style);
            var isFlex = ["flex", "inline-flex"].includes(style.display);
            // We can't apply this join with react-dom:
            // #https://github.com/facebook/react/issues/6467
            if (isFlex) {
                stylePrefixed.display = stylePrefixed.display.join("; display: ") + ";";
            }
            return stylePrefixed;
        };
    }
}
;
exports.default = prefixAll;
//# sourceMappingURL=prefixAll.js.map