/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "placeholder.com", protocol: "https" }],
  },
};

export default nextConfig;
