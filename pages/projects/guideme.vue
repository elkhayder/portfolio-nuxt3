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

<script setup lang="ts">
const { t, locale } = useI18n();

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
      title: `${t("links.mobile_app")} (APK)`,
      url: "https://github.com/elkhayder/PFE-DUT-2022-SmartCane/releases/download/Publish/app-release.apk",
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
      url: "/projects/guideme/assets/Rapport.pdf",
      isDownloadable: true,
   },
   {
      title: "Presentation (Fr) [21.6mb]",
      url: "/projects/guideme/assets/Presentation_FR.pptx",
      isDownloadable: true,
   },
   {
      title: "Presentation (En) [21.6mb]",
      url: "/projects/guideme/assets/Presentation_EN.pptx",
      isDownloadable: true,
   },
];

useHead({
   title: "GuideMe",
});
</script>

<template>
   <main class="text-white">
      <section class="my-0 py-6">
         <h2 class="title !text-white text-center">GuideME</h2>
         <h4 class="subtitle !text-white text-center">The Smart White Cane</h4>
      </section>
   </main>
   <section
      v-if="locale == 'fr'"
      class="bg-red-600 text-white rounded-xl py-8 text-center font-semibold italic"
   >
      Jusqu'à présent, cette page n'est disponible qu'en Anglais.<br />
      La traduction en Français est en cours.
   </section>
   <section class="[&>.section]:my-4">
      <h2 class="title">Parts</h2>
      <div class="section reversed">
         <div>
            <h3 class="title">Handle</h3>
            <ul class="spaced">
               <li>
                  We designed a very ergonomic, visually pleasing and extremely
                  usable
                  <span class="italic">handle</span>.
               </li>
               <li>
                  The cane can be used for long periods of time without feeling
                  sore and hurt thanks to it's relatively lightweight. The
                  <span class="italic">handle</span> weighs less than 300G, and
                  most of it come from the 10000mAh battery that can be easily
                  swapped.
               </li>
               <li>
                  An HC-SR04 Proximity sensor is placed in the front of the
                  handle, tilted by a 45 degree angle to allow it to better
                  detect obstacle in front of the user.
               </li>
               <li>
                  A bendable cane can be connected to the handle using the
                  thread in front of the cane.
               </li>
               <li>
                  Control buttons are placed on the top of the handle, close to
                  the thumb for easy use. Each button can do multiple tasks.
               </li>
               <li>
                  Three LEDs are placed in different regions of the handle:
                  <ul class="list-disc list-inside">
                     <li>
                        <b>Red LED</b>: Lights up when the battery capacity
                        drops under 20%, a vocal warning will frequently play in
                        the mobile app.
                     </li>
                     <li><b>Green LED</b>: Lights up when the cane is on.</li>
                     <li>
                        <b>White LED</b>: Can be controlled using the middle
                        button, it is used to make the user more visible in dark
                        periods and dim areas.
                     </li>
                  </ul>
               </li>
            </ul>
         </div>
         <ProjectPageGuidemeHandle3DModel />
      </div>
      <div class="section">
         <div>
            <h3 class="title">Buttons</h3>
            <ul class="spaced">
               <li>
                  The <span class="font-bold italic">GuideMe</span> have 5
                  buttons placed on top of the handle, they are used to control
                  and navigate the mobile app.
               </li>
               <li>
                  The buttons board is connected to the main board using jumper
                  wires, the design can be updated to use a flex cable or
                  different type of connectors.
               </li>
               <li>
                  Three types of clicks can be detected:
                  <ul class="list-disc list-inside">
                     <li class="font-semibold">Simple & Quick click</li>
                     <li class="font-semibold">Long press (>1000ms)</li>
                     <li class="font-semibold">
                        Double click (Two quick clicks in less than 200ms)
                     </li>
                  </ul>
               </li>
               <li>
                  Depending on the type of the click, each button can execute
                  different task. Thanks to the simplicity of the app, double
                  click was never needed, and all tasks were able to be executed
                  only using single or double click.
                  <ol class="list-inside">
                     <li>
                        <b>Top Button</b>:
                        <ul class="list-disc list-inside ml-4">
                           <li>
                              <b>Quick click:</b> Return to the previous page
                           </li>
                           <li><b>Long press:</b> Restart the app</li>
                        </ul>
                     </li>
                     <li>
                        <b>Bottom Button</b>:
                        <ul class="list-disc list-inside ml-4">
                           <li>
                              <b>Quick click:</b> Click on the selected element
                           </li>
                           <li><b>Long press:</b> Start phone ringtone</li>
                        </ul>
                     </li>
                     <li>
                        <b>Left Button</b>:
                        <ul class="list-disc list-inside ml-4">
                           <li><b>Quick click:</b> Select previous element</li>
                           <li><b>Long press:</b> Send emergency SMS</li>
                        </ul>
                     </li>
                     <li>
                        <b>Right Button</b>:
                        <ul class="list-disc list-inside ml-4">
                           <li><b>Quick click:</b> Select next element</li>
                           <li>
                              <b>Long press:</b> Navigate to the
                              <span class="italic">Explore</span> page
                           </li>
                        </ul>
                     </li>
                     <li>
                        <b>Middle Button</b>:
                        <ul class="list-disc list-inside ml-4">
                           <li><b>Quick click:</b> Click selected element</li>
                           <li>
                              <b>Long press:</b> Turn on/off the visibility LED
                           </li>
                        </ul>
                     </li>
                  </ol>
               </li>
            </ul>
         </div>
         <ProjectPageGuidemeButtons3DModel />
      </div>

      <div class="section reversed">
         <div>
            <h2 class="title">Cane</h2>
         </div>
      </div>
   </section>
   <section class="[&>.section]:my-4">
      <h2 class="title">Functionalities</h2>
      <div class="section reversed">
         <div>
            <h3 class="title">X</h3>
            <p></p>
         </div>
      </div>
   </section>
   <section>
      <div>
         <a id="assets" class="anchor" />
         <h4 class="title">Links & Assets</h4>
         <ul class="list-disc list-inside">
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

<style lang="scss" scoped>
.section {
   @apply grid grid-cols-2 max-md:grid-cols-1 gap-4;

   .title {
      @apply text-xl max-sm:text-lg;
   }

   &.reversed {
      & > *:first-child {
         @apply md:order-2;
      }
      & > *:last-child {
         @apply md:order-1;
      }
   }

   model-viewer {
      @apply self-center;
   }
}

ul.spaced {
   @apply [&>li:not(:first-child)]:mt-2;
}
</style>
