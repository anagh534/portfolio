import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { transformWithOxc } from "vite";

const fromRoot = (value) => fileURLToPath(new URL(value, import.meta.url));

const transformJsxInJs = () => ({
    name: "transform-jsx-in-js",
    enforce: "pre",
    async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;
        return await transformWithOxc(code, id, { lang: "jsx" });
    },
});

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
        plugins: [
            tailwindcss(),
            transformJsxInJs(),
        ],
        resolve: {
            alias: {
                "@": fromRoot("./src")
            }
        }
    }
});
