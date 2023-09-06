import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    cleanDistDir: true,
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

const millionConfig = {
    auto: true,
    auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);
