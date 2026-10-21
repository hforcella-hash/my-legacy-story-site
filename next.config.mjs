/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return ['mylegacystoryapp.com', 'www.mylegacystoryapp.com'].map((host) => ({
      source: '/:path*',
      has: [{ type: 'host', value: host }],
      destination: 'https://mylifestory.app/:path*',
      permanent: true,
    }));
  },
};

export default nextConfig;
