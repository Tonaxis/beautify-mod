"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const beautify_dev_1 = require("beautify-dev");
const jsdom_1 = require("jsdom");
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("TEST");
    const response = yield fetch("https://example.com");
    const html = yield response.text();
    const dom = new jsdom_1.JSDOM(html);
    const document = dom.window.document;
    globalThis.document = document;
    const extractor = {
        name: "images",
        extract: (document) => {
            return document.querySelectorAll("img");
        },
    };
    const result = (0, beautify_dev_1.extract)([extractor]);
    console.log(result);
}))();
