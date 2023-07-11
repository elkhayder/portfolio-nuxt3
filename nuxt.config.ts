import { NuxtConfig } from "nuxt/config";

import { sort as sortPlugin } from "vite-plugin-utils/sort-plugin";
import dynamicImport from "vite-plugin-dynamic-import";
import { viteRequire } from "vite-require";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   // css: ["~/assets/css/main.scss"],
   modules: [
      "@nuxt/image-edge",
      "@nuxt/content",
      "@nuxtjs/i18n",
      ["@funken-studio/sitemap-nuxt-3", { generateOnBuild: true }],
      "@vueuse/nuxt",
      // "@nuxtjs/tailwindcss",
      // ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN }],
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
         script: [
            {
               type: "module",
               src: "https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js",
            },
         ],
      },
   },
   vite: {
      plugins: [
         // sortPlugin({
         //    plugin: dynamicImport(),
         //    names: ["vite:vue", "vite:vue-jsx"],
         //    enforce: "post",
         // }),
         sortPlugin({
            plugin: viteRequire(),
            names: ["vite:vue", "vite:vue-jsx", "nuxt:vite-relative-asset"],
            enforce: "post",
         }),
         { src: "~/plugins/vercel.ts", mode: "client" },
      ],
   },
   vue: {
      compilerOptions: {
         isCustomElement: (x) => ["model-viewer"].includes(x),
      },
   },
   i18n: {
      baseUrl: "https://zelkhayder.me",
      defaultLocale: "en",
      strategy: "prefix",
      // langDir: "~/locales/",
      locales: [
         {
            code: "en",
            iso: "en-US",
            name: "English",
            flag: "us",
            dir: "ltr",
            // file: "en.yaml",
         },
         {
            code: "fr",
            iso: "fr-FR",
            name: "Français",
            dir: "ltr",
            // file: "fr.yaml",
         },
         {
            code: "ar",
            iso: "ar-MA",
            name: "العربية",
            flag: "ma",
            dir: "rtl",
            // file: "fr.yaml",
         },
      ],
      vueI18n: "./i18n.config.ts",
   },
   sitemap: { hostname: "https://zelkhayder.me", gzip: true },
} as NuxtConfig);
