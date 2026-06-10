import { copyFileSync, existsSync, unlinkSync, readdirSync } from "node:fs";
import { resolve, join } from "node:path";

const distDir = resolve(process.cwd(), "dist");
const sitemap0Path = resolve(distDir, "sitemap-0.xml");
const sitemapIndexPath = resolve(distDir, "sitemap-index.xml");
const sitemapPath = resolve(distDir, "sitemap.xml");

console.log("Running sitemap post-processing script...");

if (existsSync(sitemap0Path)) {
    // Copy the actual sitemap content (from sitemap-0.xml) to sitemap.xml
    copyFileSync(sitemap0Path, sitemapPath);
    console.log("Successfully copied actual sitemap content: sitemap-0.xml -> sitemap.xml");
    
    // Delete the extra sitemap-0.xml file to keep only sitemap.xml
    try {
        unlinkSync(sitemap0Path);
        console.log("Deleted sitemap-0.xml");
    } catch (err) {
        console.error("Failed to delete sitemap-0.xml:", err.message);
    }
} else {
    console.warn("sitemap-0.xml not found.");
}

// Delete sitemap-index.xml since we only want a single sitemap.xml
if (existsSync(sitemapIndexPath)) {
    try {
        unlinkSync(sitemapIndexPath);
        console.log("Deleted sitemap-index.xml");
    } catch (err) {
        console.error("Failed to delete sitemap-index.xml:", err.message);
    }
}

// Clean up any other remaining sitemap-*.xml files just in case
try {
    const files = readdirSync(distDir);
    for (const file of files) {
        if (file.startsWith("sitemap-") && file.endsWith(".xml")) {
            const filePath = join(distDir, file);
            unlinkSync(filePath);
            console.log(`Cleaned up extra sitemap file: ${file}`);
        }
    }
} catch (err) {
    console.error("Error cleaning up extra sitemap files:", err.message);
}

console.log("Sitemap post-processing complete. Only sitemap.xml remains.");
