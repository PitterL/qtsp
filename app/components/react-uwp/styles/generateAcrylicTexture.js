"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stackBlurCanvas = require("stackblur-canvas");
var tinycolor2 = require("tinycolor2");
function generateAcrylicTexture(image, tintColor, tintOpacity, blurSize, noiseSize, noiseOpacity, callback) {
    if (tintColor === void 0) { tintColor = "#fff"; }
    if (tintOpacity === void 0) { tintOpacity = 0.4; }
    if (blurSize === void 0) { blurSize = 24; }
    if (noiseSize === void 0) { noiseSize = 1; }
    if (noiseOpacity === void 0) { noiseOpacity = 0.2; }
    if (callback === void 0) { callback = function (image) { }; }
    if (!image)
        return "none";
    var id = "react-uwp-AcrylicTexture-" + tintColor + "-" + tintOpacity;
    var canvas = document.getElementById(id);
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = id;
        document.body.appendChild(canvas);
    }
    canvas.style.display = "none";
    var context = canvas.getContext("2d");
    var imageNode = new Image();
    imageNode.crossOrigin = "Anonymous";
    imageNode.onload = function () {
        var naturalWidth = imageNode.naturalWidth, naturalHeight = imageNode.naturalHeight;
        if (naturalWidth > 1000) {
            naturalHeight = naturalHeight / naturalWidth * 1000;
            naturalWidth = 1000;
        }
        if (naturalHeight > 1000) {
            naturalWidth = naturalWidth / naturalHeight * 1000;
            naturalHeight = 1000;
        }
        canvas.width = naturalWidth;
        canvas.height = naturalHeight;
        context.drawImage(imageNode, 0, 0, naturalWidth, naturalHeight);
        stackBlurCanvas.canvasRGBA(canvas, 0, 0, naturalWidth, naturalHeight, blurSize);
        context.fillStyle = tinycolor2(tintColor).setAlpha(tintOpacity).toRgbString();
        context.fillRect(0, 0, naturalWidth, naturalHeight);
        // const noiseWidth = 40;
        // const noiseHeight = 40;
        // const noiseImageDate = generateNoise(canvas, context, noiseWidth, noiseHeight, noiseSize, noiseOpacity);
        if (HTMLCanvasElement.prototype.toBlob) {
            canvas.toBlob(function (blob) {
                var url = URL.createObjectURL(blob);
                callback(url);
            });
        }
        else if (HTMLCanvasElement.prototype.msToBlob) {
            var blob = canvas.msToBlob();
            var url = URL.createObjectURL(blob);
            callback(url);
        }
        else {
            callback(canvas.toDataURL("image/jpg"));
        }
    };
    imageNode.src = image;
}
exports.default = generateAcrylicTexture;
function generateNoise(canvas, context, width, height, noiseSize, opacity) {
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var numb = Math.floor(Math.random() * 60);
            context.fillStyle = "rgba(" + numb + ", " + numb + ", " + numb + ", " + opacity + ")";
            context.fillRect(x, y, noiseSize, noiseSize);
        }
    }
    return context.getImageData(0, 0, width, height);
}
//# sourceMappingURL=generateAcrylicTexture.js.map