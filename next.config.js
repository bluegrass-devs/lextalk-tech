/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/lextalk-tech',
    assetPrefix: '/lextalk-tech',
    images: {
        domains: [
            "placekitten.com"
        ]
    }

}

module.exports = nextConfig