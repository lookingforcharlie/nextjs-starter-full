import type { NextConfig } from 'next'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    typedRoutes: true // type Link props inside Next.js app
  }
}

export default nextConfig
