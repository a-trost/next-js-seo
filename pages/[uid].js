import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices";

import Layout from "@/components/Layout";

export default function Page({ page, settings }) {
  return (
    <Layout metadata={page.data} settings={settings}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid);

  const settings = await client.getSingle("settings");

  return {
    props: {
      page,
      settings,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  };
}
