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
   <section v-if="locale == 'fr'" class="py-0">
      <div
         class="bg-red-600 text-white rounded-xl py-8 px-4 text-center font-semibold italic"
      >
         <p>Jusqu'à présent, cette page n'est disponible qu'en anglais.</p>
         <p>
            Le rapport et la présentation de soutenance sont disponibles en
            français <NuxtLink href="#assets" class="underline">ici</NuxtLink>
         </p>
      </div>
   </section>
   <section>
      <h2 class="title">Page Content</h2>
      <ul>
         <li class="subtitle !mb-2">
            <a href="#parts">1. Parts</a>
         </li>
         <li class="subtitle !mb-2">
            <a href="#functionalities">2. Functionalities</a>
         </li>
         <li class="subtitle !mb-2">
            <a href="#assets">3. Links & Assets</a>
         </li>
      </ul>
   </section>
   <div class="anchor" id="parts" />
   <section class="[&>.section]:my-4">
      <h2 class="title">Parts</h2>
      <div class="section reversed">
         <div>
            <h3 class="title">Handle</h3>
            <p>
               We designed a very ergonomic, visually pleasing and extremely
               usable
               <i>handle</i>.
            </p>
            <p>
               The cane can be used for long periods of time without feeling
               sore and hurt thanks to it's relatively lightweight. The
               <i>handle</i> weighs less than 300G, and most of it come from the
               10000mAh battery that can be easily swapped.
            </p>
            <p>
               An HC-SR04 Proximity sensor is placed in the front of the handle,
               tilted by a 45 degree angle for more natural obstacles detection.
            </p>
            <p>
               Control buttons are placed on the top of the handle, close to the
               thumb for easy use. Each button can do multiple tasks.
            </p>
            <p>Three LEDs are placed in different regions of the handle:</p>
            <ul class="list-disc list-inside">
               <li>
                  <b>Red LED</b>: Lights up when the battery capacity drops
                  under 20%, a vocal warning will frequently play in the mobile
                  app.
               </li>
               <li><b>Green LED</b>: Lights up when the cane is on.</li>
               <li>
                  <b>White LED</b>: Can be controlled using the middle button,
                  it is used to make the user more visible in night and dim
                  areas.
               </li>
            </ul>
         </div>
         <ProjectPageGuidemeHandle3DModel />
      </div>
      <div class="section">
         <div>
            <h3 class="title">Buttons</h3>
            <p>
               The <b><i>GuideMe</i></b> have 5 buttons placed on top of the
               handle, they are used to control and navigate the mobile app.
            </p>
            <p>
               The buttons board is connected to the main board using jumper
               wires, the design can be updated to use a flex cable or different
               type of connectors.
            </p>
            <p>Three types of clicks can be detected:</p>
            <ul class="list-disc list-inside">
               <li class="font-semibold">Simple & Quick click</li>
               <li class="font-semibold">Long press (>1000ms)</li>
               <li class="font-semibold">
                  Double click (Two quick clicks in less than 200ms)
               </li>
            </ul>
            <p>
               Depending on the type of the click, each button can execute
               different task. Thanks to the simplicity of the app, double click
               was never needed, and all tasks were able to be executed only
               using single or double click.
            </p>
            <ol class="list-inside">
               <li>
                  <b>Top Button</b>:
                  <ul class="list-disc list-inside ml-4">
                     <li><b>Quick click:</b> Return to the previous page</li>
                     <li><b>Long press:</b> Restart the app</li>
                  </ul>
               </li>
               <li>
                  <b>Bottom Button</b>:
                  <ul class="list-disc list-inside ml-4">
                     <li><b>Quick click:</b> Click on the selected element</li>
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
                     <li><b>Long press:</b> Turn on/off the visibility LED</li>
                  </ul>
               </li>
            </ol>
         </div>
         <ProjectPageGuidemeButtons3DModel />
      </div>

      <div class="section reversed">
         <div>
            <h2 class="title">Cane</h2>
            <p>
               A foldable cane can be screwed to the handle using the thread in
               front of the cane.
            </p>
            <p>
               The cane consists of three parts that can be joined together,
               inside of which runs an elastic band that keeps the parts
               together when folded.
            </p>
            <ul class="list-disc list-inside mt-2">
               <li>
                  <b>Master Stick:</b>
                  Screws to the cane in the top and can be connect to other
                  slave sticks.
               </li>
               <li>
                  <b>Slave Stick:</b>
                  Each of them measures 15cm and have a male and female
                  connector on each side so you can connect multiple of them
                  together to make the total height longer.
               </li>
               <li>
                  <b>Tip:</b>
                  Connects to the bottom of the cane, to give more surface area,
                  make sliding smoother and protect the cane from degrading due
                  to friction
               </li>
            </ul>
         </div>
         <nuxt-img
            class="w-full"
            src="/projects/guideme/images/full assembly.png"
            alt="GuideMe assembled"
            width="600"
         />
      </div>
   </section>
   <div class="anchor" id="functionalities" />
   <section class="functionalities">
      <h2 class="title truncate">Functionalities</h2>
      <div class="section">
         <div>
            <h4 class="subtitle">Detect obstacles</h4>
            <p>
               GuideMe vibrates to inform you of low-hanging obstacles that the
               bottom of a cane may typically miss, such as a sign or tree
               branch.
            </p>
            <p>
               The vibration intensity changes depending on the proximity of the
               said obstacle.
            </p>
         </div>
         <div>
            <h4 class="subtitle">Navigate</h4>
            <p>
               Use Google Maps for a step-by-step navigation guide to your
               destination. Voice feedback can come from your phone’s speaker or
               via a Bluetooth headset.
            </p>
         </div>
         <div>
            <h4 class="subtitle">Search & Discover</h4>
            <p>
               Find your current location and search for the places you know or
               discover new ones around you. All controlled from the app or
               cane.
            </p>
         </div>
         <div>
            <h4 class="subtitle">
               Find your phone using your cane & vice-versa
            </h4>
            <p>
               In case of cane loss, you can use your phone to play a ringtone
               on the cane, and vise-versa.
            </p>
         </div>
         <div>
            <h4 class="subtitle">Save & share your favorite places</h4>
            <p>
               Save the places you like and share them with whoever you want.
            </p>
            <p>
               The shared link opens in GuideMe mobile app if installed,
               otherwise it open the website
            </p>
         </div>
         <div>
            <h4 class="subtitle">Share you current location easily</h4>
            <p>
               You can send a SMS message containing your current location to a
               predefined list of contacts .
            </p>
            <p>
               You can customize the list and the message from the settings
               screen
            </p>
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
p,
li {
   text-align: justify;
}
.section {
   @apply grid grid-cols-2 max-md:grid-cols-1 gap-8;

   .title {
      @apply text-xl max-sm:text-lg;
   }

   & > div > p {
      @apply mt-2;

      &:first-of-type {
         @apply mt-0;
      }

      // &:last-of-type {
      //    @apply mb-0;
      // }
   }

   &.reversed {
      & > *:first-child {
         @apply md:order-2;
      }
      & > *:last-child {
         @apply md:order-1;
      }
   }

   model-viewer,
   img {
      @apply self-center;
   }
}

.functionalities {
   .subtitle {
      @apply mb-2;
   }

   p {
      margin-top: 0 !important;
   }
}
</style>
