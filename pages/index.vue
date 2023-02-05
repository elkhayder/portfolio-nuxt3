<i18n lang="yaml"></i18n>

<template>
   <IndexPageIntroduction />

   <!-- Resume -->
   <section class="pb-0 mb-0">
      <span id="resume" class="anchor" />
      <h2 class="title">{{ t("titles.resume") }}</h2>
   </section>
   <IndexPageEducation />
   <IndexPageSkills />
   <IndexPageSpokenLanguages />

   <!-- Projects -->
   <section class="pb-0 mb-0">
      <span id="projects" class="anchor" />
      <h2 class="title">{{ t("titles.projects") }}</h2>
   </section>
   <AcademicProjects />

   <IndexPageTestimonials />
</template>

<script setup lang="ts">
import AcademicProjects from "~~/components/IndexPage/AcademicProjects.vue";

const { t } = useI18n();

useHead({
   title: t("titles.home"),
});
</script>

<style lang="scss"></style>
