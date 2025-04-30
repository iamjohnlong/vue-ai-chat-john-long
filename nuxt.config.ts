import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["@/assets/css/main.css"],
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
  },
});
