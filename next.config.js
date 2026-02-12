/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  images: {
    domains: ['127.0.0.1', 'localhost'],
  },
  rewrites: async () => {
    return [
      {
        source: "/api/py/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/py/:path*"
            : "http://backend:8000/api/py/:path*",
      },
      {
        source: "/docs",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/py/docs"
            : "http://backend:8000/api/py/docs",
      },
      {
        source: "/openapi.json",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/py/openapi.json"
            : "http://backend:8000/api/py/openapi.json",
      },
    ];
  },
};

module.exports = nextConfig;
