<i18n lang="yaml">
en:
   title: Academic Projects
   pfe: End-of-Study Project

fr:
   title: Projets académiques
   pfe: Projet de fin d'études
</i18n>
<template>
   <section>
      <!-- <h3 class="subtitle">{{ t("title") }}</h3> -->
      <div class="grid gap-4 grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
         <NuxtLink
            v-for="p of ProjectsEntries"
            :to="localePath(`/projects/${p.slug}`)"
            class="!no-underline"
         >
            <div
               class="font-mono p-4 rounded-md overflow-hidden transition-colors duration-300 hover:bg-accent-200 group"
            >
               <div class="relative rounded-md overflow-hidden">
                  <nuxt-img
                     :src="p.image"
                     class="w-full object-cover aspect-[9/8] relative"
                     :width="330"
                     loading="lazy"
                     alt=""
                  />
                  <div
                     class="absolute inset-0 bg-accent-500/30 flex justify-center items-center transition-opacity opacity-0 group-hover:opacity-100 duration-300"
                  >
                     <i class="fas fa-link text-7xl text-white" />
                  </div>
               </div>
               <span
                  class="block w-fit mt-4 mb-2 px-2 py-1 bg-gray-700 text-gray-100 text-xs"
               >
                  <time>
                     {{ p.year }}
                  </time>
                  - {{ t("pfe") }}
               </span>
               <h4
                  class="mb-2 w-fit tracking-wider bg-accent-600 text-white px-2 py-0.5"
               >
                  {{ p.title }}
               </h4>
               <p class="text-sm ml-1 after:content-['.']">
                  {{ p.description }}
               </p>
            </div>
         </NuxtLink>
      </div>
   </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

type Project = {
   year: number;
   image: string;
   title: string;
   slug: string;
   description: string;
};

const ProjectsEntries: Project[] = [
   {
      year: 2023,
      title: "Weather Station",
      slug: "weather-station",
      description:
         "A general purpose Weather Station, featuring various sensors, a user-friendly web interface, and a coverage area of up to 2km in diameter",
      image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=100&w=330&h=294&fit=crop",
   },
   {
      year: 2022,
      title: "GuideMe",
      slug: "guideme",
      description:
         "A Smart White Cane for the visually impaired, featuring obstacle detection, and a custom mobile app for navigation and more",
      image: "/projects/guideme/images/pink.jpg",
   },
   {
      year: 2019,
      title: "Telemeter",
      slug: "telemeter",
      description:
         "Measure distance to remote objects and calculate the surface area and the volume for various geometric shapes",
      image: "https://images.unsplash.com/photo-1485851480953-7214e7bf049c?q=100&w=330&h=294&fit=crop",
   },
];
</script>

<style lang="scss"></style>
