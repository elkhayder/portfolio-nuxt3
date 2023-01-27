<template>
   <section>
      <h3 class="subtitle">Languages</h3>
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
type SpokenLanguage = {
   title: string;
   proficiency: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
};

const SpokenLanguages: readonly SpokenLanguage[] = [
   {
      title: "English",
      proficiency: "C1",
   },
   {
      title: "French",
      proficiency: "B2",
   },
   {
      title: "Arabic",
      proficiency: "C2",
   },
];
</script>

<style lang="scss"></style>
