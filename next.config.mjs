/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'pix4free.org',
            'www.stockvault.net',
            'www.picpedia.org',
            'www.newsletterstation.com',
            'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com',
            'cameronstevens.ca',
            'encrypted-tbn0.gstatic.com',
            'storage.needpix.com'
        ],
        // Add the external domain here
    },
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
