import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://semeton.xyz/sitemap.xml",
    host: "https://semeton.xyz",
  }
}
