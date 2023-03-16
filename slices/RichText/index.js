import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.RichTextSlice} RichTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RichTextSlice>} RichTextProps
 * @param { RichTextProps }
 */
const RichText = ({ slice }) => (
  <section>
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className=" prose prose-headings:text-green-700 prose-headings:font-bold md:prose-lg">
        <PrismicRichText field={slice.primary.text} />
      </div>
    </div>
  </section>
);

export default RichText;
