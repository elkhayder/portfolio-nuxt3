<script setup lang="ts">
const { t } = useI18n();
useHead({
   titleTemplate: (title) => `${t(title ?? "portfolio")} - ${t("name")}`,
});
</script>

<template>
   <Head>
      <Meta
         name="viewport"
         content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <Meta
         name="description"
         content="Full-Stack Web developer & Electronics engineering student"
      />
      <Meta
         name="og:description"
         content="Full-Stack Web developer & Electronics engineering student"
      />
      <Meta name="og:image" content="/og_image.jpg" />
      <Meta name="twitter:image" content="/og_image.jpg" />
      <Meta name="og:image:width" content="2994" />
      <Meta name="og:image:height" content="2994" />
      <Meta name="twitter:card" content="summary_large_image" />
   </Head>

   <NuxtLayout>
      <LoadingScreen />

      <NuxtPage />
   </NuxtLayout>

   <LazyClientOnly>
      <MouseFollower />
   </LazyClientOnly>
</template>

<script lang="ts"></script>

<style lang="scss">
@import url("https://pro.fontawesome.com/releases/v5.15.4/css/all.css");

/* DevIcon */
/* @import url("https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"); */

/* Roboto Mono & Roboto Flex */
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Cairo:wght@300;400;500;600;700;800;900&display=swap");

// @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
   html {
      scroll-behavior: smooth;
   }

   html,
   body,
   #__nuxt,
   #__layout {
      height: 100% !important;
      width: 100% !important;
      // max-width: 100vw;
      // overflow-x: hidden;

      @apply max-xs:text-sm; // Reduce font size on small screens
   }
}

:is([dir="rtl"]) .font-mono {
   @apply font-cairo;
}

a {
   @apply hover:underline transition;
}

.anchor {
   @apply invisible relative block -top-24;
}

section {
   @apply w-full max-w-6xl mx-auto my-16 py-2 px-6 sm:px-10;
}

.title {
   @apply text-3xl ltr:font-mono uppercase font-semibold text-gray-500 mb-6 ltr:tracking-[0.3em];
   &::after {
      content: "_";
   }
}

.subtitle {
   @apply text-lg ltr:font-mono uppercase font-semibold text-gray-500 mb-6 ltr:tracking-[0.3em];
}

body {
   overflow: hidden;
   &.loaded {
      overflow: auto;
   }

   @apply rtl:font-cairo; // Arabic font
   //    // cursor: none;;
}

main {
   @apply pt-20;

   $bgOpacity: 0.8;
   position: relative;
   background-image: linear-gradient(
         rgba(45, 45, 45, $bgOpacity),
         rgba(45, 45, 45, $bgOpacity)
      ),
      url(/images/background-bw.jpg);
   background-position: center;
   background-size: cover;
}

model-viewer {
   @apply w-full min-h-[24rem];
}
</style>
