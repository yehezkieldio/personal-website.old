/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "irswanda.com",
                port: "",
                pathname: "/img/project/**",
            },
        ],
    },
};

module.exports = nextConfig;
