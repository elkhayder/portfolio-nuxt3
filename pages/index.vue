<i18n lang="yaml"></i18n>

<template>
   <IndexPageIntroduction />
   <section class="pb-0 mb-0">
      <a id="resume" class="anchor" />
      <h2 class="title">{{ t("titles.resume") }}</h2>
   </section>
   <IndexPageEducation />
   <IndexPageSkills />
   <IndexPageSpokenLanguages />
   <IndexPageTestimonials />
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead({
   title: t("titles.home"),
});
</script>

<style lang="scss"></style>
