/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",   // 👈 required
    images: { unoptimized: true },
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
