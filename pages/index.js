import Head from "next/head";
import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices";

import Layout from "@/components/Layout";

export default function Home({ page }) {
  return (
    <Layout>
      <Head>
        <title>GreenGenie</title>
        <meta name="description" content="GreenGenie's Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");

  return {
    props: {
      page,
    },
  };
}
