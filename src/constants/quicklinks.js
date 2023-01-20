import { links } from "constants/links";

const quicklinks = [
  {
    title: "About Us",
    meta: [
      { name: "About Us", to: links.ABOUT },
      { name: "Sell", to: links.SELL },
      { name: "Pricing", to: links.PRICING },
    ],
  },
  {
    title: "Top Categories",
    meta: [
      { name: "Paintings", to: links.PAINTINGS },
      { name: "Prints", to: links.PRINTS },
      { name: "Photography", to: links.PHOTOGRAPHY },
      { name: "Limited", to: links.LIMITED },
    ],
  },
  {
    title: "Community",
    meta: [
      { name: "Artists", to: "/paintings" },
      { name: "Art Fairs", to: "/prints" },
      { name: "Sponsors", to: "/photography" },
      { name: "FAQs", to: "/limited" },
    ],
  },
  {
    title: "Guides",
    meta: [
      { name: "How To", to: "/how-to" },
      { name: "Upload Art", to: "/prints" },
      { name: "Package", to: "/photography" },
    ],
  },
];

export { quicklinks };
