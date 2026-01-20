/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // 개발 환경(localhost)에서는 루트 경로를 사용하고,
  // GitHub Pages 배포 시(production)에만 리포지토리 이름의 하위 경로를 사용합니다.
  basePath: process.env.NODE_ENV === "production" ? "/graciehyeeunna" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/graciehyeeunna" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
