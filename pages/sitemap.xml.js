import { createClient } from "../prismicio";

const EXTERNAL_DATA_URL = "https://greengenie.io";

function generateSiteMap(pages, blogPosts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
     </url>
     ${pages
       .map(({ uid }) => {
         return `
      <url>
          <loc>${`${EXTERNAL_DATA_URL}/${uid}`}</loc>
      </url>
    `;
       })
       .join("")}
     ${blogPosts
       .map(({ uid }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/blog/${uid}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const client = createClient();

  // We fetch our pages first
  const pages = await client.getAllByType("page");

  // Then we get our blog posts
  const blogPosts = await client.getAllByType("blog_post");

  // We generate the XML sitemap with the pages and blog posts data
  const sitemap = generateSiteMap(pages, blogPosts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
