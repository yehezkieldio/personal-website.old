import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    cleanDistDir: true,
    images: {
        dangerouslyAllowSVG: true,
        domains: ["localhost"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "irswanda.com",
                port: "",
                pathname: "/img/project/**",
            },
            {
                protocol: "https",
                hostname: "img.shields.io",
                port: "",
            },
            {
                protocol: "https",
                hostname: "cdn.simpleicons.org",
                port: "",
            },
        ],
    },
};

const millionConfig = {
    auto: false,
};

export default million.next(nextConfig, millionConfig);
