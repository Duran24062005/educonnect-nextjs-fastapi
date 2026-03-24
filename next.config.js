/** @type {import('next').NextConfig} */
const internalApiBaseUrl = process.env.INTERNAL_API_BASE_URL || "http://127.0.0.1:8000";

const nextConfig = {
  images: {
    domains: ['127.0.0.1', 'localhost', 'backend'],
  },
  rewrites: async () => {
    return [
      {
        source: "/api/py/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? `${internalApiBaseUrl}/api/py/:path*`
            : "/api/",
      },
      {
        source: "/docs",
        destination:
          process.env.NODE_ENV === "development"
            ? `${internalApiBaseUrl}/api/py/docs`
            : "/api/py/docs",
      },
      {
        source: "/openapi.json",
        destination:
          process.env.NODE_ENV === "development"
            ? `${internalApiBaseUrl}/api/py/openapi.json`
            : "/api/py/openapi.json",
      },
    ];
  },
};

module.exports = nextConfig;
