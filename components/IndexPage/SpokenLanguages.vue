<i18n lang="yaml">
en:
   title: Languages
   ar: Arabic
   fr: French
   en: English

fr:
   title: Langues
   ar: Arabe
   fr: Français
   en: Anglais

ar:
   title: اللغات
   ar: العربية
   fr: الفرنسية
   en: الإنجليزية
</i18n>

<template>
   <section>
      <h3 class="subtitle">{{ t("title") }}</h3>
      <div
         class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 max-sm:gap-x-8"
      >
         <div v-for="lang of SpokenLanguages" class="flex justify-between">
            <span class="font-medium italic">{{ lang.title }}:</span>
            <!-- <span
               class="font-bold text-accent-600 lg:hidden"
               title="Proficiency Level"
            >
               {{ lang.proficiency.short }}
            </span> -->
            <span
               class="font-bold text-sm text-accent-600"
               :title="lang.proficiency.short"
            >
               {{ lang.proficiency.long }}
            </span>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

type SpokenLanguage = {
   title: string;
   proficiency: {
      short: string;
      long: string;
   };
};

const SpokenLanguages: SpokenLanguage[] = [
   {
      title: t("en"),
      proficiency: {
         short: "C2",
         long: "Fairly Fluent",
      },
   },
   {
      title: t("fr"),
      proficiency: {
         short: "C1",
         long: "Excellent working knowledge",
      },
   },
   {
      title: t("ar"),
      proficiency: {
         short: "C2",
         long: "Native language",
      },
   },
];
</script>

<style lang="scss"></style>
