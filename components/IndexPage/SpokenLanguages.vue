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
      <div class="grid grid-cols-3 gap-12 max-sm:gap-x-8">
         <div v-for="lang of SpokenLanguages" class="flex justify-between">
            <span class="font-medium italic">{{ lang.title }}:</span>
            <span class="font-bold text-accent-600" title="Proficiency Level">
               {{ lang.proficiency }}
            </span>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

type SpokenLanguage = {
   title: string;
   proficiency: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
};

const SpokenLanguages: SpokenLanguage[] = [
   {
      title: t("en"),
      proficiency: "C1",
   },
   {
      title: t("fr"),
      proficiency: "B2",
   },
   {
      title: t("ar"),
      proficiency: "C2",
   },
];
</script>

<style lang="scss"></style>
