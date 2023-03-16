import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => (
  <section>
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl sm:text-7xl font-bold leading-tighter mb-4 text-green-700 ">
            {slice.primary.heading}
          </h1>
          <div className="text-lg mb-8 text-gray-700">
            <PrismicRichText field={slice.primary.description} />
          </div>
          <a
            href="#"
            className="bg-green-700 inline-block mb-6 text-white font-medium py-2 px-4 rounded hover:bg-green-800 hover:text-white transition-colors duration-300"
          >
            Sign Up
          </a>
        </div>
        <div className="md:w-1/2">
          <PrismicNextImage
            field={slice.primary.image}
            fallbackAlt=""
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
