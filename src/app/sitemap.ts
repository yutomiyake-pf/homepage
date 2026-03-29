import { MetadataRoute } from "next";
import { getHobbyArticlesMeta } from "./blog/hobby/_lib/md";
import { getTechArticlesMeta } from "./blog/tech/_lib/md";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.miyakun.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/profile`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/hobby`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const hobbyMeta = getHobbyArticlesMeta();
  const hobbyPages: MetadataRoute.Sitemap = hobbyMeta.map((m) => ({
    url: `${baseUrl}/blog/hobby/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const techMeta = getTechArticlesMeta();
  const techPages: MetadataRoute.Sitemap = techMeta.map((m) => ({
    url: `${baseUrl}/blog/tech/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...hobbyPages, ...techPages];
}
