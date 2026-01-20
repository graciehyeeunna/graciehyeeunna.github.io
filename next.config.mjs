/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/gracieNa",
  assetPrefix: "/gracieNa/",
  trailingSlash: true, // 정적 배포 시 라우팅 문제 해결을 위해 추가
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
