/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "contoh.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placeimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.psicologos.com.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "academy-of-capital.ru",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
