/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "d1c9xn9tvapvue.cloudfront.net", pathname: "/**" },
      { protocol: "https", hostname: "davf9otgz7zc8.cloudfront.net", pathname: "/images/**" },
    ],
  },
};

export default nextConfig;