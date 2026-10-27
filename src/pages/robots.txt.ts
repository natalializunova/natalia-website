import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const indexable = import.meta.env.PUBLIC_SITE_INDEXABLE === 'true';
  const base = site ?? new URL('http://localhost:4321');
  const body = indexable
    ? `User-agent: *\nAllow: /\nDisallow: /blog/chernovik-znakomstvo-so-stihiyami/\nDisallow: /cart/\nDisallow: /privacy/\nDisallow: /consent/\nDisallow: /offer/\nSitemap: ${new URL('/sitemap-index.xml', base).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
