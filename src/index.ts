import { extract } from "beautify-dev";
import extractors from "./extractors";

const results = extract(extractors);

results.divs.forEach((element) => {
  element.style.boxShadow = "1px 2px 3px 4px red";
});
