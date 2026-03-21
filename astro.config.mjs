import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

const fromRoot = (value) => fileURLToPath(new URL(value, import.meta.url));

export default defineConfig({
    site: "https://www.anaghkr.in",
    integrations: [react(), sitemap()],
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
