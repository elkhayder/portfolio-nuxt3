<template>
   <Head>
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
      <NuxtPage />
   </NuxtLayout>

   <LoadingScreen />

   <LazyClientOnly>
      <MouseFollower />
   </LazyClientOnly>
</template>

<script lang="ts"></script>
