const serve = require('serve-like-a-pro');

const server = serve({
  root: ".",
  port: process.env.PORT || 1234,
  memoize: ["**/*.js", "**/*.css"],
  cache: {
    "**/*.js": 60 * 60 * 24 * 365
  },
  fallback: "404.html",
  gzip: true
});