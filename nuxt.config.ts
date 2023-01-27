// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   css: ["@/assets/style/main.scss"],
   modules: ["@nuxt/content"],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
   nitro: {
      prerender: {
         routes: ["/sitemap.xml"],
      },
   },
   app: {
      head: {
         title: "Portfolio",
         titleTemplate: "%s — EL KHAYDER Zakaria",
         meta: [
            { charset: "utf-8" },
            {
               name: "viewport",
               content: "width=device-width, initial-scale=1",
            },
            { name: "format-detection", content: "telephone=yes" },
            { hid: "og-type", property: "og:type", content: "website" },
         ],
         link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      },
   },
});
