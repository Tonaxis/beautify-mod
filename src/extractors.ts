import { Extractor } from "beautify-dev";

// Here you can create your extractors
const extractors: Extractor[] = [
  {
    name: "divs",
    extract: (document) => {
      return document.querySelectorAll("div") as any;
    },
  },
];

export default extractors;
