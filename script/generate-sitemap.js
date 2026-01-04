import { writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Your actual routes from App.tsx
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/products', priority: '0.9', changefreq: 'weekly' },
  { path: '/faq', priority: '0.8', changefreq: 'monthly' },
];

// Get product pages - check what products you have
const mattressPages = [
  '/product-details/mattress-amber',
  '/product-details/mattress-bailey', 
  '/product-details/mattress-carlisle',
];

// Combine all routes
const allRoutes = [
  ...staticRoutes,
  ...mattressPages.map(path => ({ 
    path, 
    priority: '0.7', 
    changefreq: 'monthly' 
  }))
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
  <url>
    <loc>https://auroradream.ca${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')}
</urlset>`;

// Write to file
const outputPath = join(__dirname, '..', 'dist', 'public', 'sitemap.xml');
writeFileSync(outputPath, sitemap);
console.log('✅ Sitemap generated at:', outputPath);
console.log('📄 Included URLs:', allRoutes.map(r => r.path).join(', '));
