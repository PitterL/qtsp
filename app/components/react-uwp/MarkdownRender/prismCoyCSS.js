"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "/**\n * prism.js Coy theme for JavaScript, CoffeeScript, CSS and HTML\n * Based on https://github.com/tshedor/workshop-wp-theme (Example: http://workshop.kansan.com/category/sessions/basics or http://workshop.timshedor.com/category/sessions/basics);\n * @author Tim  Shedor\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  color: black;\n  background: none;\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n  position: relative;\n  margin: .5em 0;\n  box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;\n  border-left: 10px solid #358ccb;\n  background-color: #fdfdfd;\n  background-image: linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-size: 3em 3em;\n  background-origin: content-box;\n  overflow: visible;\n  padding: 0;\n}\n\ncode[class*=\"language\"] {\n  max-height: inherit;\n  height: 100%;\n  padding: 0 1em;\n  display: block;\n  overflow: auto;\n}\n\n/* Margin bottom to accomodate shadow */\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n  background-color: #fdfdfd;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin-bottom: 1em;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n  position: relative;\n  padding: .2em;\n  border-radius: 0.3em;\n  color: #c92c2c;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  display: inline;\n  white-space: normal;\n}\n\npre[class*=\"language-\"]:before,\npre[class*=\"language-\"]:after {\n  content: '';\n  z-index: -2;\n  display: block;\n  position: absolute;\n  bottom: 0.75em;\n  left: 0.18em;\n  width: 40%;\n  height: 20%;\n  max-height: 13em;\n  box-shadow: 0px 13px 8px #979797;\n  -webkit-transform: rotate(-2deg);\n  -moz-transform: rotate(-2deg);\n  -ms-transform: rotate(-2deg);\n  -o-transform: rotate(-2deg);\n  transform: rotate(-2deg);\n}\n\n:not(pre) > code[class*=\"language-\"]:after,\npre[class*=\"language-\"]:after {\n  right: 0.75em;\n  left: auto;\n  -webkit-transform: rotate(2deg);\n  -moz-transform: rotate(2deg);\n  -ms-transform: rotate(2deg);\n  -o-transform: rotate(2deg);\n  transform: rotate(2deg);\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #7D8B99;\n}\n\n.token.punctuation {\n  color: #5F6364;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #c92c2c;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.function,\n.token.builtin,\n.token.inserted {\n  color: #2f9c0a;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable {\n  color: #a67f59;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword,\n.token.class-name {\n  color: #1990b8;\n}\n\n.token.regex,\n.token.important {\n  color: #e90;\n}\n\n.language-css .token.string,\n.style .token.string {\n  color: #a67f59;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.token.important {\n  font-weight: normal;\n}\n\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n\n.token.entity {\n  cursor: help;\n}\n\n.namespace {\n  opacity: .7;\n}\n\n@media screen and (max-width: 767px) {\n  pre[class*=\"language-\"]:before,\n  pre[class*=\"language-\"]:after {\n    bottom: 14px;\n    box-shadow: none;\n  }\n\n}\n\n/* Plugin styles */\n.token.tab:not(:empty):before,\n.token.cr:before,\n.token.lf:before {\n  color: #e0d7d1;\n}\n\n/* Plugin styles: Line Numbers */\npre[class*=\"language-\"].line-numbers {\n  padding-left: 0;\n}\n\npre[class*=\"language-\"].line-numbers code {\n  padding-left: 3.8em;\n}\n\npre[class*=\"language-\"].line-numbers .line-numbers-rows {\n  left: 0;\n}\n\n/* Plugin styles: Line Highlight */\npre[class*=\"language-\"][data-line] {\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 0;\n}\npre[data-line] code {\n  position: relative;\n  padding-left: 4em;\n}\npre .line-highlight {\n  margin-top: 0;\n}\n";
//# sourceMappingURL=prismCoyCSS.js.map