"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addEventListener_1 = require("./addEventListener");
function addArrayEvent(elm, events, func) {
    if (func === void 0) { func = function () { }; }
    for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
        var event_1 = events_1[_i];
        addEventListener_1.default(elm, event_1, func);
    }
}
exports.default = addArrayEvent;
//# sourceMappingURL=addArrayEvent.js.map