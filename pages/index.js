import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices";

import Layout from "@/components/Layout";

export default function Home({ page, settings }) {
  return (
    <Layout metadata={page.data} settings={settings}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");

  const settings = await client.getSingle("settings");

  return {
    props: {
      page,
      settings,
    },
  };
}
