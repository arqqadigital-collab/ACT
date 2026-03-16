import type { VercelRequest, VercelResponse } from '@vercel/node';

const STRAPI_URL = process.env.STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const originalUrl = req.url || '/';
    const url = new URL(originalUrl, 'http://localhost');

    const pathWithoutPrefix = url.pathname
      .replace(/^\/api\/strapi(\/|$)/, '/');

    const targetUrl = `${STRAPI_URL}${pathWithoutPrefix}${url.search}`;

    const headers: Record<string, string> = {};
    for (const [key, value] of Object.entries(req.headers)) {
      if (!value) continue;
      const lower = key.toLowerCase();
      if (lower === 'host' || lower === 'connection' || lower === 'content-length') continue;
      headers[key] = Array.isArray(value) ? value.join(',') : String(value);
    }
    headers['Accept'] = headers['Accept'] || 'application/json';

    const method = (req.method || 'GET').toUpperCase();
    const hasBody = !['GET', 'HEAD'].includes(method);
    const body = hasBody && req.body !== undefined ? JSON.stringify(req.body) : undefined;
    if (hasBody) {
      headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    }

    console.log('Strapi proxy:', method, targetUrl);

    const upstream = await fetch(targetUrl, {
      method,
      headers,
      body,
    });

    const contentType = upstream.headers.get('content-type') || '';
    const text = await upstream.text();

    res.status(upstream.status);
    if (contentType) {
      res.setHeader('Content-Type', contentType);
    }

    if (contentType.includes('application/json')) {
      try {
        res.send(JSON.parse(text));
      } catch {
        res.setHeader('Content-Type', 'text/plain');
        res.send(text);
      }
      return;
    }

    res.send(text);
  } catch (error) {
    console.error('Strapi proxy error:', error);
    res.status(500).json({
      error: 'Proxy failed',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
