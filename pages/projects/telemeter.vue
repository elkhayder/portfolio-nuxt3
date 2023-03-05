<i18n lang="yaml">
en:
   title: Telemeter
   alert: Page is still in writing, further updates will be published later.
   redirect: You will be redirected to GuideMe Page in

fr:
   title: Télémètre
   alert: Le page est en cours de rédaction, des mises à jour seront publiées ultérieurement.
   redirect: Vous serez redirigé vers la page GuideMe en
</i18n>

<template>
   <main
      class="text-white min-h-full flex flex-col items-center justify-center gap-12"
   >
      <h2 class="title !text-white text-center">{{ t("title") }}</h2>
      <p class="text-center text-xl text-gray-100 max-w-lg">
         {{ t("alert") }}
      </p>
      <p
         class="text-center text-sm font-bold text-black max-w-lg bg-white px-2 py-1"
      >
         {{ t("redirect") }} {{ timeout.toString() }} ...
      </p>
   </main>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead({
   title: t("title"),
});

const timeout = ref(5);

const localePath = useLocalePath();

onMounted(() => {
   setInterval(() => {
      if (!--timeout.value) {
         location.href = localePath("/projects/guideme");
      }
   }, 1000);
});
</script>

<style lang="scss"></style>
