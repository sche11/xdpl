//https://nitro.unjs.io/config
export default defineNitroConfig({
  compatibilityDate: "2026-03-17",
  routeRules: {
    "/**": {
      proxy: "https://www2.deepl.com/**",
    },
  },
});
