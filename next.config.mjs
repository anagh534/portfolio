/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // Essential for GitHub Pages static export
    trailingSlash: true,  // Helps with GitHub Pages routing
    images: {
        unoptimized: true,  // Required for static export
    },
    // No basePath needed for username.github.io repos
    async redirects() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/sitemap.xml',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
