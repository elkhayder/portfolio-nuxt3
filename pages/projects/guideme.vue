<template>
   <main class="text-white">
      <section class="my-0 py-6">
         <h2 class="title !text-white text-center">GuideME</h2>
         <h4 class="subtitle !text-white text-center">The Smart White Cane</h4>
      </section>
   </main>
   <section>
      <div class="flex gap-3">
         <span class="subtitle after:content-[':']">Stack</span>

         <NuxtLink v-for="x of UsedTechnologies" :to="x.href" target="_blank">
            <img
               :src="x.image"
               :alt="x.name + '\'s Icon'"
               :title="x.name"
               class="max-w-8 max-h-8 w-full h-full object-contain rounded-sm"
            />
         </NuxtLink>
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
</script>

<style lang="scss"></style>
