<i18n lang="yaml"></i18n>

<script setup lang="ts">
import AcademicProjects from "~~/components/IndexPage/AcademicProjects.vue";

const { t } = useI18n();

useHead({
   title: t("titles.home"),
});
</script>

<template>
   <IndexPageIntroduction />

   <!-- Resume -->
   <section class="pb-0 mb-0">
      <span id="resume" class="anchor" />
      <h2 class="title">
         <HackerTitle :title="t('titles.resume')" />
      </h2>
   </section>
   <IndexPageEducationAndExperience />
   <IndexPageSkills />
   <IndexPageSpokenLanguages />

   <!-- Projects -->
   <section class="pb-0 mb-0">
      <span id="projects" class="anchor" />
      <h2 class="title">
         <HackerTitle :title="t('titles.projects')" />
      </h2>
   </section>
   <AcademicProjects />

   <IndexPageTestimonials />

   <section class="pb-0 mb-0">
      <span id="contact" class="anchor" />
      <h2 class="title">
         <HackerTitle :title="t('titles.contact')" />
      </h2>
   </section>

   <IndexPageContact />
</template>

<style lang="scss"></style>
