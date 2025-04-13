import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@pinia/colada-nuxt",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})