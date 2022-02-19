/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    urlImports: [
        "https://framer.com/m/",
        "https://framerusercontent.com/",
        "https://ga.jspm.io/",
        "https://jspm.dev/",
        "http://localhost:4000/",
        "https://cdn.skypack.dev/"
    ],
},
}

module.exports = nextConfig