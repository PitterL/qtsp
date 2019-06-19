"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createMergeFuncs(staticFunc) {
    if (staticFunc === void 0) { staticFunc = function () { }; }
    function mergeFuncs() {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        var _a = mergeFuncs, cacheFuncs = _a.cacheFuncs, cacheStaticFunc = _a.cacheStaticFunc;
        cacheFuncs = cacheFuncs || [];
        cacheStaticFunc = cacheStaticFunc || (function () { });
        for (var _b = 0, funcs_1 = funcs; _b < funcs_1.length; _b++) {
            var originFunc = funcs_1[_b];
            var func = originFunc;
            if (func.isMergedFunc) {
                for (var _c = 0, _d = func.cacheFuncs; _c < _d.length; _c++) {
                    var cacheFuncItem = _d[_c];
                    var isSameFunc = false;
                    for (var _e = 0, cacheFuncs_1 = cacheFuncs; _e < cacheFuncs_1.length; _e++) {
                        var cacheFunc = cacheFuncs_1[_e];
                        if (cacheFunc === cacheFuncItem) {
                            isSameFunc = true;
                            break;
                        }
                    }
                    if (!isSameFunc) {
                        cacheFuncs = cacheFuncs.concat(cacheFuncItem);
                    }
                }
            }
            else {
                cacheFuncs = cacheFuncs.concat(func);
            }
        }
        mergeFuncs["cacheFuncs"] = cacheFuncs;
        mergeFuncs["cacheStaticFunc"] = cacheStaticFunc;
        function resultFunc() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            for (var _a = 0, cacheFuncs_2 = cacheFuncs; _a < cacheFuncs_2.length; _a++) {
                var func = cacheFuncs_2[_a];
                func.apply(void 0, args);
            }
            cacheStaticFunc.apply(void 0, args);
        }
        resultFunc["isMergedFunc"] = true;
        resultFunc["cacheFuncs"] = cacheFuncs;
        resultFunc["cacheStaticFunc"] = cacheStaticFunc;
        return resultFunc;
    }
    if (staticFunc["isMergedFunc"]) {
        mergeFuncs.cacheStaticFunc = staticFunc["cacheStaticFunc"];
        mergeFuncs.cacheFuncs = staticFunc["cacheFuncs"];
    }
    else if (!mergeFuncs.cacheStaticFunc) {
        mergeFuncs.cacheStaticFunc = staticFunc;
    }
    return mergeFuncs;
}
exports.default = createMergeFuncs;
var mergeFuncs = createMergeFuncs(staticFunc);
function staticFunc() { console.log("static", arguments[0]); }
var resultFunc = mergeFuncs(function (numb) { console.log(numb + 1); });
resultFunc = mergeFuncs(resultFunc, function (numb) { console.log(numb + 2); });
resultFunc = mergeFuncs(function (numb) { console.log(numb + 3); });
resultFunc = mergeFuncs(resultFunc);
resultFunc(0);
//# sourceMappingURL=createMergeFuncs.js.map