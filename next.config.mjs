import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  // Keep the MkDocs URL shape (/development/getting-started/) so old links still work.
  trailingSlash: true,
  // A static site has no image optimizer, so serve image files as they are.
  images: { unoptimized: true },
  reactStrictMode: true,
  // Next.js blocks its dev scripts on any host but localhost, which leaves every button dead.
  // Allow this Mac's network address (the "Network:" URL `next dev` prints) and Bonjour names.
  allowedDevOrigins: ['192.168.*.*', '10.*.*.*', '*.local'],
};

export default withMDX(config);
