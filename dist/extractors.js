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
