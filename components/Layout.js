import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children, metadata, settings }) {
  return (
    <>
      <Head>
        <title>
          {metadata.meta_title} - {settings.data.website_name}
        </title>
        <meta name="description" content={metadata.meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={metadata.meta_title} />
        <meta property="og:url" content="https://www.greengenie.io" />
        <meta property="og:image" content={metadata.og_image.url} />
        <meta property="og:description" content={metadata.meta_description} />
      </Head>

      <Navbar settings={settings} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
