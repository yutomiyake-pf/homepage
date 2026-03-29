import { MetadataRoute } from "next";
import { getAllHobbySlugs } from "./blog/hobby/_lib/md";
import { getAllTechSlugs } from "./blog/tech/_lib/md";

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

  const hobbySlugs = getAllHobbySlugs();
  const hobbyPages: MetadataRoute.Sitemap = hobbySlugs.map((slug) => ({
    url: `${baseUrl}/blog/hobby/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const techSlugs = getAllTechSlugs();
  const techPages: MetadataRoute.Sitemap = techSlugs.map((slug) => ({
    url: `${baseUrl}/blog/tech/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...hobbyPages, ...techPages];
}
