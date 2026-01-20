/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // 루트 도메인(https://graciehyeeunna.github.io)을 사용하므로 basePath가 필요 없습니다.
  basePath: "",
  assetPrefix: "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
