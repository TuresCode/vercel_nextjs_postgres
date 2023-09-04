/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "app/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:5328/api/:path*"
            : "app/api/",
      },
    ];
  },
};

module.exports = nextConfig;
