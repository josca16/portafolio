/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.cesurformacion.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
