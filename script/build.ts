import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Server deps to bundle
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

// Simple sitemap generator function
async function generateSitemap() {
  console.log("🌐 Generating sitemap...");
  
  const { writeFileSync } = await import('fs');
  
  // Your actual routes - update these if you add more pages
  const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/products', priority: '0.9', changefreq: 'weekly' },
    { path: '/faq', priority: '0.8', changefreq: 'monthly' },
    { path: '/product-details/mattress-amber', priority: '0.7', changefreq: 'monthly' },
    { path: '/product-details/mattress-bailey', priority: '0.7', changefreq: 'monthly' },
    { path: '/product-details/mattress-carlisle', priority: '0.7', changefreq: 'monthly' },
    // Neighborhood doorway pages
    { path: '/kanata-mattress-delivery', priority: '0.7', changefreq: 'monthly' },
    { path: '/barrhaven-sleep-solutions', priority: '0.7', changefreq: 'monthly' },
    { path: '/nepean-mattress-store', priority: '0.7', changefreq: 'monthly' },
    { path: '/orleans-bed-shop', priority: '0.7', changefreq: 'monthly' },
    { path: '/centretown-mattress-showroom', priority: '0.7', changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>https://auroradream.ca${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')}
</urlset>`;

  const outputPath = join(__dirname, '..', 'dist', 'public', 'sitemap.xml');
  writeFileSync(outputPath, sitemap);
  console.log("✅ Sitemap generated at:", outputPath);
}

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("🏗️  Building client...");
  await viteBuild();

  console.log("🌐 Generating sitemap...");
  await generateSitemap();

  console.log("🚀 Building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
