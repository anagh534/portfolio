import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const distDir = resolve(process.cwd(), "dist");
const sitemapIndexPath = resolve(distDir, "sitemap-index.xml");
const sitemapPath = resolve(distDir, "sitemap.xml");

if (existsSync(sitemapIndexPath)) {
    copyFileSync(sitemapIndexPath, sitemapPath);
    console.log("Created sitemap alias: dist/sitemap.xml -> dist/sitemap-index.xml");
} else {
    console.warn("sitemap-index.xml not found; skipping sitemap alias creation.");
}
