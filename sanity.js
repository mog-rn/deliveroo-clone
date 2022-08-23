import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = new sanityClient({
  projectId: "qwoxusny",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
// sanity cors add http://localhost:3000
export default client;
