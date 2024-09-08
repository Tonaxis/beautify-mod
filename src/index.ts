import { extract, render } from "beautify-dev";
import extractors from "./extractors";

const results = extract(extractors);

console.log(results);

results.divs?.forEach((element) => {
  console.log(element);
  element.style.boxShadow = "1px 2px 3px 4px red";
  console.log(element);
});

render();
