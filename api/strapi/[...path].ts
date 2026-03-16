import type { VercelRequest, VercelResponse } from '@vercel/node';

const STRAPI_URL = process.env.STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Remove the /api/strapi prefix from the path
  const path = req.query.path as string[];
  const strapiPath = path ? `/${path.join('/')}` : '/';
  
  // Build the target URL
  const queryString = new URLSearchParams(
    Object.entries(req.query)
      .filter(([key]) => key !== 'path')
      .reduce((acc, [key, value]) => {
        acc[key] = Array.isArray(value) ? value.join(',') : String(value);
        return acc;
      }, {} as Record<string, string>)
  ).toString();
  
  const targetUrl = `${STRAPI_URL}${strapiPath}${queryString ? `?${queryString}` : ''}`;
  
  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });
    
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to proxy request' });
  }
}
