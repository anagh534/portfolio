/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",   // 👈 required
    images: { unoptimized: true },

    // Enable all production optimizations
    reactStrictMode: true,

    // Optimize CSS
    experimental: {
        optimizeCss: true, // Enable CSS optimization
    },

    // Compress output for better performance
    compress: true,

    // Production source maps (disable for smaller bundles)
    productionBrowserSourceMaps: false,

    // Optimize bundle splitting
    webpack: (config, { isServer }) => {
        // Optimize bundle size
        if (!isServer) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        default: false,
                        vendors: false,
                        // Vendor chunk
                        vendor: {
                            name: 'vendor',
                            chunks: 'all',
                            test: /node_modules/,
                            priority: 20
                        },
                        // Common chunk
                        common: {
                            name: 'common',
                            minChunks: 2,
                            chunks: 'all',
                            priority: 10,
                            reuseExistingChunk: true,
                            enforce: true
                        }
                    }
                }
            };
        }
        return config;
    },
};

export default nextConfig;
