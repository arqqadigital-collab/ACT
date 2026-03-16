import type { VercelRequest, VercelResponse } from '@vercel/node';

const STRAPI_URL = process.env.STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Get the path segments from the query
    const pathSegments = req.query.path as string[] | undefined;
    const strapiPath = pathSegments ? `/${pathSegments.join('/')}` : '/';
    
    // Build query string (exclude the 'path' parameter)
    const queryParams = new URLSearchParams();
    Object.entries(req.query).forEach(([key, value]) => {
      if (key !== 'path' && value !== undefined) {
        const strValue = Array.isArray(value) ? value.join(',') : String(value);
        queryParams.append(key, strValue);
      }
    });
    
    const queryString = queryParams.toString();
    const targetUrl = `${STRAPI_URL}${strapiPath}${queryString ? `?${queryString}` : ''}`;
    
    console.log('Proxying to:', targetUrl);
    
    // Prepare headers
    const headers: Record<string, string> = {};
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      headers['Content-Type'] = 'application/json';
    }
    
    // Forward the request
    const fetchOptions: RequestInit = {
      method: req.method,
      headers,
    };
    
    // Add body for non-GET/HEAD requests
    if (req.method !== 'GET' && req.method !== 'HEAD' && req.body) {
      fetchOptions.body = JSON.stringify(req.body);
    }
    
    const response = await fetch(targetUrl, fetchOptions);
    
    // Get response data
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    
    // Forward response status and data
    res.status(response.status);
    
    // Forward content-type header if present
    if (contentType) {
      res.setHeader('Content-Type', contentType);
    }
    
    res.send(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to proxy request',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
