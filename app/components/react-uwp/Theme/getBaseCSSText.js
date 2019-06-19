"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getBaseCSS(theme, themeClassName, scrollBarStyleSelector) {
    if (themeClassName === void 0) { themeClassName = "uwp-base"; }
    if (scrollBarStyleSelector === void 0) { scrollBarStyleSelector = "*"; }
    return "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n." + themeClassName + " * {\n  font-family: " + theme.fonts.sansSerifFonts.split(", ").map(function (font) { return "\"" + font + "\""; }).join(", ") + ";\n}\n\nbody {\n  margin: 0;\n}\n\n" + scrollBarStyleSelector + "::-webkit-scrollbar-track {\n  background-color: " + theme.chromeLow + ";\n}\n\n" + scrollBarStyleSelector + "::-webkit-scrollbar-thumb {\n  background-color: " + (theme.useFluentDesign ? theme.baseLow : theme.baseMediumLow) + ";\n}\n\n" + scrollBarStyleSelector + "::-webkit-scrollbar:vertical {\n  width: 6px;\n}\n\n" + scrollBarStyleSelector + "::-webkit-scrollbar:horizontal {\n  height: 6px\n}\n\n" + scrollBarStyleSelector + "::-webkit-scrollbar {\n  -webkit-appearance: none\n}\n\n." + themeClassName + " *:after, ." + themeClassName + " *:before {\n  box-sizing: border-box;\n}\n\n." + themeClassName + " {\n  -webkit-text-size-adjust: none;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n." + themeClassName + " input, ." + themeClassName + " textarea {\n  box-shadow: none;\n  border-radius: none;\n}\n";
}
exports.default = getBaseCSS;
//# sourceMappingURL=getBaseCSSText.js.map