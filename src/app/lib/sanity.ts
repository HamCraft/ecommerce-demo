/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "l93r0fmv",
  dataset: "production",
  apiVersion: "2025-01-07",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}