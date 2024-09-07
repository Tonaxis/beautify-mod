import { extract, render } from "beautify-dev";
import extractors from "./extractors";

console.log("ENTERED 2");

const results = extract(extractors);

console.log("doc", (globalThis as any).beautify.document.outerHTML);

results.divs.forEach((element) => {
  element.style.boxShadow = "1px 2px 3px 4px red";
});

render();
