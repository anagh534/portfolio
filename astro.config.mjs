import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

const fromRoot = (value) => fileURLToPath(new URL(value, import.meta.url));

export default defineConfig({
    output: "static",
    site: "https://www.anaghkr.in",
    trailingSlash: "always",
    build: {
        inlineStylesheets: "always",
    },
    integrations: [
        react(),
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
