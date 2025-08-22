/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,       // needed for GitHub Pages
    },
    basePath: "/portfolio",
    async redirects() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/public/sitemap.xml', // Ensure this matches the location where next-sitemap places your sitemap file
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
