import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://easi-as.com"
  const currentDate = new Date().toISOString()

  return [
    // Primary pages - highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/comparison`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Section anchors for deep linking - features
    {
      url: `${baseUrl}/#features`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#how-it-works`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#myslp`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#pricing`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#why-easi`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#team`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#security`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Privacy/compliance sections
    {
      url: `${baseUrl}/privacy#hipaa`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy#ferpa`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy#ndpa`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy#nist`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    // Comparison page sections for deep linking
    {
      url: `${baseUrl}/comparison#easi-vs-chatgpt`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/comparison#easi-vs-salt`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ]
}
