(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const beautify_dev_1 = require("beautify-dev");
const extractor = {
    name: "images",
    extract: (document) => {
        return document.querySelectorAll("img");
    },
};
const result = (0, beautify_dev_1.extract)([extractor]);
console.log("result", result);
// const result2 = await extract([extractor]);
// console.log("PROMISE result", result2);
// (async () => {
// })();

},{"beautify-dev":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = extract;
async function extract(extractors) {
    const extracted = {};
    for (const extractor of extractors) {
        if (extractor.name && extractor.extract) {
            const elements = extractor.extract(globalThis.document);
            extracted[extractor.name] = elements;
        }
    }
    return extracted;
}

},{}],3:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extract = void 0;
var extracting_1 = require("./functions/extracting");
Object.defineProperty(exports, "extract", { enumerable: true, get: function () { return __importDefault(extracting_1).default; } });

},{"./functions/extracting":2}]},{},[1]);
