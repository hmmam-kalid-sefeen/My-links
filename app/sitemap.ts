import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.9smart.buzz",
      lastModified: new Date(),
    },
  ];
}
