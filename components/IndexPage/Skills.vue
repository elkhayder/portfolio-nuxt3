<template>
   <section>
      <h3 class="subtitle">Skills</h3>
      <div
         class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-sm:gap-x-8"
      >
         <div v-for="skill of SkillEntries" class="flex-[0_1_30%]">
            <div class="text-sm font-mono text-gray-700 flex justify-between">
               <span class="font-medium">{{ skill.title }}:</span>
               <span
                  class="font-bold italic text-accent-600"
                  :title="ProficiencyLevels[skill.level - 1][1]"
               >
                  {{ ProficiencyLevels[skill.level - 1][0] }}
               </span>
            </div>
            <div class="mt-3 flex flex-wrap gap-4">
               <a
                  v-for="tech of skill.technologies"
                  :href="tech.href"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img
                     :src="tech.image"
                     :alt="`${tech.name}'s Logo`"
                     :title="tech.name"
                     class="max-h-10 max-w-10 w-full h-full hover:grayscale-0 transition rounded-md"
                  />
               </a>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
import {
   LanguageTechnology,
   AdobeIllustrator,
   AdobeXD,
   Android,
   Apache,
   Arduino,
   CLang,
   CPP,
   Css,
   Dart,
   EmbeddedC,
   ExpressJs,
   Figma,
   Firebase,
   Flutter,
   Fritzing,
   HTML,
   JavaScript,
   Laravel,
   Linux,
   Matlab,
   MySQL,
   NextJs,
   NodeJs,
   NuxtJs,
   PHP,
   RaspberryPI,
   ReactJs,
   Sass,
   TailwindCss,
   TypeScript,
   VueJs,
} from "~~/include/languages_technologies";

type Skill = {
   title: string;
   level: 1 | 2 | 3 | 4;
   technologies: readonly LanguageTechnology[];
};

// 1 - Fundamental Awareness (basic knowledge)
// 2 - Novice (limited experience)
// 3 - Intermediate (practical application)
// 4 - Advanced (applied theory)
const ProficiencyLevels = [
   ["Fundamental Awareness", "Basic knowledge"],
   ["Novice", "Limited experience"],
   ["Intermediate", "Practical application"],
   ["Advanced", "Applied theory"],
] as const;

const SkillEntries: readonly Skill[] = [
   {
      title: "Frontend development",
      level: 4,
      technologies: [
         HTML,
         Css,
         Sass,
         TailwindCss,
         JavaScript,
         TypeScript,
         VueJs,
         NuxtJs,
         ReactJs,
         NextJs,
      ],
   },
   {
      title: "Backend development",
      level: 4,
      technologies: [
         PHP,
         Laravel,
         MySQL,
         Firebase,
         NodeJs,
         ExpressJs,
         Apache,
         Linux,
      ],
   },
   {
      title: "Embedded Systems",
      level: 3,
      technologies: [
         CLang,
         CPP,
         EmbeddedC,
         Linux,
         Arduino,
         RaspberryPI,
         Fritzing,
         Matlab,
      ],
   },
   {
      title: "Mobile development",
      level: 2,
      technologies: [Dart, Flutter, Android],
   },
   {
      title: "UX/UI design",
      level: 1,
      technologies: [Figma, AdobeXD, AdobeIllustrator],
   },
] as const;
</script>

<style lang="scss"></style>
