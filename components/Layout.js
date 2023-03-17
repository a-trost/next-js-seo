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
      </Head>

      <Navbar settings={settings} />
      <div>{children}</div>
      <Footer />
    </>
  );
}
