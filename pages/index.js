import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenGenie</title>
        <meta name="description" content="GreenGenie's Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="bg-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="md:flex md:items-center md:justify-between">
            <div class="md:w-1/2">
              <p class="text-7xl font-bold leading-tighter mb-4 text-green-600 ">
                Offset Your Carbon Footprint
              </p>
              <p class="text-lg mb-8 text-gray-700">
                GreenGenie is the easy way to reduce your carbon footprint and
                help fight climate change. Our app makes it simple and
                affordable to offset your carbon emissions from daily activities
                like driving, flying, and using electricity.
              </p>
              <a
                href="#"
                class="bg-green-500 inline-block mb-6 text-white font-medium py-2 px-4 rounded hover:bg-green-600 hover:text-white transition-colors duration-300"
              >
                Sign Up
              </a>
            </div>
            <div class="md:w-1/2">
              <img src="/wind-turbine.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
