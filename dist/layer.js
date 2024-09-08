(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Here you can create your extractors
const extractors = [
    {
        name: "divs",
        extract: (document) => {
            return document.querySelectorAll("div");
        },
    },
];
exports.default = extractors;

},{}],2:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const beautify_dev_1 = require("beautify-dev");
const extractors_1 = __importDefault(require("./extractors"));
const results = (0, beautify_dev_1.extract)(extractors_1.default);
console.log(results);
console.log(results.divs);
(_a = results.divs) === null || _a === void 0 ? void 0 : _a.forEach((element) => {
    console.log(element);
    element.style.boxShadow = "1px 2px 3px 4px red";
    console.log(element);
});
(0, beautify_dev_1.render)();

},{"./extractors":1,"beautify-dev":5}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = extract;
function extract(extractors) {
    const extracted = {};
    for (const extractor of extractors) {
        if (extractor.name && extractor.extract) {
            const elements = extractor.extract(globalThis.beautify.document);
            extracted[extractor.name] = elements;
        }
    }
    return extracted;
}

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = render;
function render() {
    const beautifiedDocument = globalThis.beautify
        .document;
    beautifiedDocument
        .querySelectorAll("*:not([beautified])")
        .forEach((element) => {
        element.setAttribute("beautified", "true");
    });
    document.documentElement.innerHTML = beautifiedDocument.innerHTML;
}

},{}],5:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.extract = void 0;
var extracting_1 = require("./functions/extracting");
Object.defineProperty(exports, "extract", { enumerable: true, get: function () { return __importDefault(extracting_1).default; } });
var rendering_1 = require("./functions/rendering");
Object.defineProperty(exports, "render", { enumerable: true, get: function () { return __importDefault(rendering_1).default; } });
globalThis.beautify = {
    document: document.documentElement.cloneNode(true),
};

},{"./functions/extracting":3,"./functions/rendering":4}]},{},[2]);
