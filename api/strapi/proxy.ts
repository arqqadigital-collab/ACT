import type { VercelRequest, VercelResponse } from '@vercel/node';

const STRAPI_URL = process.env.STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Build target URL - ensure proper formatting
    let urlPath = req.url || '';
    
    // Remove /api/strapi prefix if present
    if (urlPath.startsWith('/api/strapi/')) {
      urlPath = urlPath.substring('/api/strapi/'.length);
    } else if (urlPath.startsWith('/api/strapi')) {
      urlPath = urlPath.substring('/api/strapi'.length);
    }
    
    // Ensure urlPath starts with /
    if (!urlPath.startsWith('/')) {
      urlPath = '/' + urlPath;
    }
    
    const targetUrl = `${STRAPI_URL}${urlPath}`;
    
    console.log('Proxying:', req.method, targetUrl);
    
    // Forward request
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: req.body && (req.method === 'POST' || req.method === 'PUT') 
        ? JSON.stringify(req.body) 
        : undefined,
    });
    
    // Get response as text first
    const responseText = await response.text();
    
    // Try to parse as JSON
    try {
      const jsonData = JSON.parse(responseText);
      res.status(response.status).json(jsonData);
    } catch {
      // Not valid JSON - return as text with proper content type
      res.status(response.status).setHeader('Content-Type', 'text/plain').send(responseText);
    }
  } catch (error: any) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Proxy failed', 
      details: error.message 
    });
  }
}
