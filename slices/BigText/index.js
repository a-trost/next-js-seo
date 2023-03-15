import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.BigTextSlice} BigTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BigTextSlice>} BigTextProps
 * @param { BigTextProps }
 */
const BigText = ({ slice }) => (
  <div className="py-24 px-6 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-bold tracking-tight text-green-600 sm:text-6xl">
        {slice.primary.heading}
      </h2>

      <div className="mt-6 text-lg leading-8 text-gray-700">
        <PrismicRichText field={slice.primary.body} />
      </div>
    </div>
  </div>
);

export default BigText;
