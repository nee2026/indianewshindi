import { fetchHomepageData } from "@/services/api"

export async function GET() {

    const baseUrl = "https://indianewshindi.com"

    try {
        const data = await fetchHomepageData()

        const articles = [
            ...(data.top_20 || []),
            ...(data.trending_posts || [])
        ]

        const unique = Array.from(
            new Map(articles.map(a => [a.id, a])).values()
        )

        const cutoff = new Date(Date.now() - 48 * 60 * 60 * 1000)

        const recent = unique.filter(p => {
            if (!p.date) return false
            return new Date(p.date) >= cutoff
        })

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
 xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
 xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">

${recent.map(post => `
<url>
  <loc>${baseUrl}/post/${post.id}/${post.slug}</loc>
  <news:news>
    <news:publication>
      <news:name>India News Hindi</news:name>
      <news:language>hi</news:language>
    </news:publication>
    <news:publication_date>${new Date(post.date).toISOString()}</news:publication_date>
    <news:title><![CDATA[${post.title}]]></news:title>
  </news:news>
</url>
`).join("")}

</urlset>`

        return new Response(xml, {
            headers: { "Content-Type": "application/xml" }
        })

    } catch (err) {
        console.error("News sitemap error:", err)
        return new Response("", { status: 500 })
    }
}