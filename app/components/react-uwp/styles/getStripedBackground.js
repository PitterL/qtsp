"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStripedBackground(size, firstColor, secondColor) {
    if (size === void 0) { size = 4; }
    if (firstColor === void 0) { firstColor = "#000"; }
    if (secondColor === void 0) { secondColor = "hsla(0, 0%, 0%, 0.85)"; }
    return {
        background: "linear-gradient(45deg, " + firstColor + " 25%, " + secondColor + " 0px, " + secondColor + " 50%, " + firstColor + " 0px, " + firstColor + " 75%, " + secondColor + " 0px) 0% 0% / " + size + "px " + size + "px " + firstColor
    };
}
exports.default = getStripedBackground;
//# sourceMappingURL=getStripedBackground.js.map