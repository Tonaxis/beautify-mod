"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const beautify_dev_1 = require("beautify-dev");
const extractors_1 = __importDefault(require("./extractors"));
const results = (0, beautify_dev_1.extract)(extractors_1.default);
results.divs.forEach((element) => {
    element.style.boxShadow = "1px 2px 3px 4px red";
});
