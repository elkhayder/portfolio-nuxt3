<i18n lang="yaml">
en:
   links:
      mobile_app: Mobile App
      website: Website
      report: Report
      source_code: Source Code

fr:
   links:
      mobile_app: Application Mobile
      website: Site web
      report: Rapport
      source_code: Code Source
</i18n>

<template>
   <main class="text-white">
      <section class="my-0 py-6">
         <h2 class="title !text-white text-center">GuideME</h2>
         <h4 class="subtitle !text-white text-center">The Smart White Cane</h4>
         <nuxt-img
            alt="GuideMe"
            class="max-w-full max-h-64 w-auto object-contain mx-auto"
            src="/projects/images/guideme/full_transparent.png"
         />
      </section>
   </main>
   <section>
      <div class="grid grid-cols-2 gap-12">
         <div>
            <h2 class="subtitle">Description</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Deleniti a voluptates libero, veritatis repellendus, ab atque
               veniam blanditiis molestiae fugit quasi totam eos vero, doloribus
               nihil repudiandae eum aliquam obcaecati.
            </p>
         </div>
         <div>
            <h2 class="subtitle">Purpose</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Deleniti a voluptates libero, veritatis repellendus, ab atque
               veniam blanditiis molestiae fugit quasi totam eos vero, doloribus
               nihil repudiandae eum aliquam obcaecati.
            </p>
         </div>
      </div>
      <!-- <div class="flex gap-3">
         <span class="subtitle after:content-[':']">Stack</span>

         <NuxtLink v-for="x of UsedTechnologies" :to="x.href" target="_blank">
            <img
               :src="x.image"
               :alt="x.name + '\'s Icon'"
               :title="x.name"
               class="max-w-8 max-h-8 w-full h-full object-contain rounded-sm"
            />
         </NuxtLink>
      </div> -->

      <!-- <h3 class="title text-center">Presentation</h3>
      <iframe
         src="https://onedrive.live.com/embed?resid=6FBBFF37B5F9FC14%213725&amp;authkey=!AJBanoSqHABKbHw&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1"
         frameborder="0"
         class="w-full max-w-4xl mx-auto aspect-video"
      /> -->
   </section>
   <section>
      <div>
         <a id="assets" class="anchor" />
         <h4 class="title">Links & Assets</h4>
         <ul class="list-disc">
            <a
               v-for="link of Links"
               :href="link.url"
               :target="link.isDownloadable ? '_self' : '_blank'"
            >
               <li class="font-bold text-gray-600 font-mono mb-2">
                  {{ link.title }}
                  <i
                     :class="
                        link.isDownloadable
                           ? 'far fa-file-download'
                           : 'far fa-external-link-alt'
                     "
                  />
               </li>
            </a>
         </ul>
      </div>
   </section>
</template>

<script setup lang="ts">
import {
   Arduino,
   CLang,
   Bluetooth,
   Dart,
   Flutter,
   Fritzing,
   LanguageTechnology,
   ReactJs,
   GoogleCloud,
} from "~~/include/languages_technologies";

const { t } = useI18n();

// const UsedStack: [LanguageTechnology, string][] = [
//    [CLang, "Used to program the Arduino Software"],
//    [
//       Arduino,
//       "The heart of the Cane, used to process the sensors data and control the vibrators",
//    ],
//    [Bluetooth, "Used to communicate between the Cane and The mobile app"],
//    [
//       Flutter,
//       "Used to develop the mobile app. It is cross platform and relatively easy to get started with",
//    ],
//    [
//       Dart,
//       "A programming language by Google. It was used to develop the mobile app using FLutter",
//    ],
//    [Fritzing, "Used for circuit schematic design"],
//    [ReactJs, "Used to build the web interface that shows th shared place"],
//    [
//       GoogleCloud,
//       "Used Geolocation and Google Places API to find proximity places and addresses",
//    ],
// ];

const UsedTechnologies: LanguageTechnology[] = [
   CLang,
   Arduino,
   Flutter,
   Dart,
   GoogleCloud,
   ReactJs,
   Fritzing,
   Bluetooth,
];

type Link = {
   title: string;
   url: string;
   isDownloadable?: boolean;
};

const Links: Link[] = [
   {
      title: `${t("links.mobile_app")} (${t("links.source_code")})`,
      url: "https://github.com/elkhayder/PFE-DUT-2022-SmartCane/tree/main/mobile_app",
   },
   {
      title: `Cane - Arduino (${t("links.source_code")})`,
      url: "https://github.com/elkhayder/PFE-DUT-2022-SmartCane/tree/main/arduino/main",
   },
   {
      title: `Website (${t("links.source_code")})`,
      url: "https://github.com/elkhayder/PFE-DUT-2022-SmartCane/tree/main/website",
   },
   {
      title: `${t("links.report")} (Fr) (LaTeX)`,
      url: "https://www.overleaf.com/read/jbgnpvhptgnp",
      // url: "https://github.com/elkhayder/PFE-DUT-2022-SmartCane/tree/main/rapport",
   },
   {
      title: `${t("links.report")} (Fr) [33.0mb]`,
      url: "/projects/assets/GuideMe_Rapport.pdf",
      isDownloadable: true,
   },
   {
      title: "Presentation (Fr) [21.6mb]",
      url: "/projects/assets/GuideMe_Presentation_FR.pptx",
      isDownloadable: true,
   },
   {
      title: "Presentation (En) [21.6mb]",
      url: "/projects/assets/GuideMe_Presentation_EN.pptx",
      isDownloadable: true,
   },
];
</script>

<style lang="scss"></style>
