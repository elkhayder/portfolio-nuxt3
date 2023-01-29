import { NuxtConfig } from "nuxt/config";
import en from "./locales/en";
import fr from "./locales/fr";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   css: ["@/assets/style/main.scss"],
   modules: [
      "@nuxt/content",
      "@nuxtjs/i18n",
      ["@funken-studio/sitemap-nuxt-3", { generateOnBuild: true }],
   ],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
   // nitro: {
   //    prerender: {
   //       routes: ["/sitemap.xml"],
   //    },
   // },
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
   i18n: {
      baseUrl: "https://zelkhayder.me",
      // langDir: "~/locales/",
      locales: [
         {
            code: "en",
            iso: "en-US",
            // file: "en.yaml",
         },
         {
            code: "fr",
            iso: "fr-FR",
            // file: "fr.yaml",
         },
      ],
      vueI18n: {
         legacy: false,
         messages: {
            en,
            fr,
         },
      },
   },
   sitemap: { hostname: "https://zelkhayder.me", gzip: true },
} as NuxtConfig);
