const fs = require('fs').promises;
const path = require('path');

async function generateSitemap() {
  const baseUrl = 'https://auroradream.ca';
  const today = new Date().toISOString().split('T')[0];
  
  // Main pages
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/products', priority: 0.9, changefreq: 'weekly' },
    { url: '/delivery-zone', priority: 0.9, changefreq: 'weekly' },
    { url: '/faq', priority: 0.8, changefreq: 'monthly' },
    { url: '/service-area', priority: 0.8, changefreq: 'monthly' },
    { url: '/neighborhoods/kanata', priority: 0.7, changefreq: 'weekly' },
    { url: '/neighborhoods/barrhaven', priority: 0.7, changefreq: 'weekly' },
    { url: '/neighborhoods/nepean', priority: 0.7, changefreq: 'weekly' },
    { url: '/neighborhoods/orleans', priority: 0.7, changefreq: 'weekly' },
    { url: '/neighborhoods/centretown', priority: 0.7, changefreq: 'weekly' }
  ];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
  
  for (const page of pages) {
    xml += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  }
  
  xml += `</urlset>`;
  
  await fs.writeFile('client/public/sitemap.xml', xml);
  console.log('✅ Sitemap generated with', pages.length, 'URLs');
  console.log('📊 Sitemap saved to: client/public/sitemap.xml');
}

generateSitemap().catch(console.error);
