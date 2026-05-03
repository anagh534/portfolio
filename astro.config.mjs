import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

const fromRoot = (value) => fileURLToPath(new URL(value, import.meta.url));

const LAST_MODIFIED = new Date().toISOString();

export default defineConfig({
    output: "static",
    site: "https://www.anaghkr.in",
    trailingSlash: "always",
    integrations: [
        react(),
        sitemap({
            // Exclude empty dynamic routes and unwanted pages
            filter: (page) =>
                !page.includes("/ml/") &&
                !page.includes("/kerala/") &&
                !page.includes("/resume"),

            serialize(item) {
                const url = item.url;

                // Homepage — highest priority
                if (url === "https://www.anaghkr.in/") {
                    return { ...item, changefreq: "weekly", priority: 1.0, lastmod: LAST_MODIFIED };
                }

                // Top-performing flutter page
                if (url.includes("/flutter-app-development/")) {
                    return { ...item, changefreq: "monthly", priority: 0.95, lastmod: LAST_MODIFIED };
                }

                // High-value service pages
                if (
                    url.includes("/mobile-app-development/") ||
                    url.includes("/web-development/") ||
                    url.includes("/ecommerce-development/") ||
                    url.includes("/wordpress-development/") ||
                    url.includes("/mern-stack-development/")
                ) {
                    return { ...item, changefreq: "monthly", priority: 0.9, lastmod: LAST_MODIFIED };
                }

                // Secondary service pages
                if (
                    url.includes("-development/") ||
                    url.includes("/services/") ||
                    url.includes("/shopify-store-development/")
                ) {
                    return { ...item, changefreq: "monthly", priority: 0.8, lastmod: LAST_MODIFIED };
                }

                // Blog index & posts
                if (url.includes("/blog/")) {
                    return { ...item, changefreq: "weekly", priority: 0.8, lastmod: LAST_MODIFIED };
                }

                // Location pages
                if (url.includes("/locations/")) {
                    return { ...item, changefreq: "monthly", priority: 0.7, lastmod: LAST_MODIFIED };
                }

                // Core pages (about, contact)
                if (url.includes("/about/") || url.includes("/contact/")) {
                    return { ...item, changefreq: "yearly", priority: 0.6, lastmod: LAST_MODIFIED };
                }

                return { ...item, changefreq: "monthly", priority: 0.5, lastmod: LAST_MODIFIED };
            },
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
        esbuild: {
            loader: "jsx",
            include: /src\/.*\.js$/,
            exclude: []
        },
        resolve: {
            alias: {
                "@": fromRoot("./src")
            }
        }
    }
});
