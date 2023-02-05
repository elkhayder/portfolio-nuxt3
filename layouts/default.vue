<template>
   <Html :lang="head.htmlAttrs!.lang" :dir="head.htmlAttrs!.dir">
      <Head>
         <Link
            v-for="link in head.link"
            :key="link.id"
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
         />
         <Meta
            v-for="meta in head.meta"
            :key="meta.id"
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
         />
         <Link rel="preload" as="image" href="/images/background-bw.jpg" />
      </Head>
      <Body>
         <Header />
         <slot />
         <Footer />
      </Body>
   </Html>
</template>

<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();

const head = useLocaleHead({
   addDirAttribute: true,
   identifierAttribute: "id",
   addSeoAttributes: true,
});
</script>

<style lang="scss"></style>
