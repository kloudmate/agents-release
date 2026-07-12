import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  serverExternalPackages: ['@takumi-rs/core', '@takumi-rs/image-response'],
  images: {
    unoptimized: true,
  },
  webpack: (webpackConfig, { isServer }) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    if (isServer) {
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        'typescript': false,
        'drizzle-kit': false,
      }
    }

    return webpackConfig
  },
}

export default withMDX(config)
