// File: /api/llms-txt.js
export default async function handler(req, res) {
  try {
    const response = await fetch("https://cdn.aisitemap.ai/express-js-on-vercel-green-delta-29-vercel-app/llms.txt");
    if (!response.ok) {
      return res.status(502).send("Failed to fetch llms.txt");
    }

    const content = await response.text();
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=900, stale-while-revalidate=3600");
    res.status(200).send(content);
  } catch (error) {
    res.status(503).send("Service temporarily unavailable");
  }
}
