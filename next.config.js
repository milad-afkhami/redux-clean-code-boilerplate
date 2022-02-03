const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import("next").NextConfig} */
module.exports = {
  env: {
    REACT_APP_API_BASE_URL: "https://jsonplaceholder.typicode.com",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    craCompat: true,
    styledComponents: true,
  },
  images: {
    domains: [],
  },
};
