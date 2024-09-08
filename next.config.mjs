/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: '**.googleusercontent.com',
        },
        {
            protocol: "https",
            hostname: "utfs.io",
        },
        {
            protocol: "https",
            hostname: "**.freepik.com",
        },
    ],
    }
};

export default nextConfig;
