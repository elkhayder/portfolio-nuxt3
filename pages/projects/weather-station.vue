<i18n lang="yaml">
en:
   title: Weather Station
   alert: Project is still under construction, further updates will be published later
fr:
   title: Station météo
   alert: Le projet est toujours en cours de construction, des mises à jour seront publiées ultérieurement.
</i18n>

<template>
   <main
      class="text-white min-h-full flex flex-col items-center justify-center gap-12"
   >
      <h2 class="title !text-white text-center">{{ t("title") }}</h2>
      <p class="text-center font-mono text-xl text-gray-100 max-w-md">
         {{ t("alert") }}
      </p>
   </main>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead({
   title: t("title"),
});
</script>

<style lang="scss"></style>
