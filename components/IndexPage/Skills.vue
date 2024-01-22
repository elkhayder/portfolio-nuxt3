<i18n lang="yaml">
en:
   title: Skills
   frontend: Front-End development
   backend: Back-End development
   embedded: Embedded Systems
   mobile: Mobile development
   ui_ux: UX/UI design
   others: Others
   proficiency:
      - - Fundamental Awareness
        - Basic knowledge
      - - Novice
        - Limited experience
      - - Intermediate
        - Practical application
      - - Advanced
        - Applied theory

fr:
   title: Compétences
   frontend: Développement Front-End
   backend: Développement Back-End
   embedded: Systèmes embarqués
   mobile: Développement Mobile
   ui_ux: Désign UX/UI
   others: Autres
   proficiency:
      - - Connaissances de base
        - Conscience fondamentale
      - - Débutant
        - Expérience limitée
      - - Intermédiaire
        - Application pratique
      - - Avancé
        - Théorie appliquée

ar:
   title: المهارات
   frontend: تطوير الواجهة الأمامية
   backend: تطوير الواجهة الخلفية
   embedded: أنظمة مضمنة
   mobile: تطوير التطبيقات المحمولة
   ui_ux: تصميم تجربة وواجهة المستخدم
   others: مهارات أخرى
   proficiency:
      - - مفاهيم
        - معرفة أساسية
      - - مبتدئ
        - تجربة محدودة
      - - متوسط
        - تطبيق عملي
      - - متقدم
        - نظرية مطبقة
</i18n>

<template>
   <section>
      <h3 class="subtitle">{{ t("title") }}</h3>
      <div
         class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-sm:gap-x-8"
      >
         <div v-for="skill of SkillEntries" class="flex-[0_1_30%]">
            <div class="text-sm font-mono text-gray-700 flex justify-between">
               <span class="font-medium">{{ skill.title }}:</span>
               <span
                  v-if="skill.level"
                  class="font-bold italic text-accent-600"
                  :title="t(`proficiency.${skill.level - 1}.1`)"
               >
                  {{ t(`proficiency.${skill.level - 1}.0`) }}
               </span>
            </div>
            <div
               class="mt-3 grid gap-4 items-center"
               style="
                  grid-template-columns: repeat(auto-fit, 2.5rem);
                  grid-gap: 1rem;
               "
            >
               <a
                  v-for="tech of skill.technologies"
                  :href="tech.href"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <nuxt-img
                     :src="tech.image"
                     :alt="`${tech.name}'s Logo`"
                     :title="tech.name"
                     :width="40"
                     class="w-full object-contain hover:grayscale-0 transition rounded-sm"
                     fit="contain"
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
   OfficeWord,
   OfficeExcel,
   OfficePowerPoint,
   LaTeX,
   Canva,
   Cloudflare,
   PhpMyAdmin,
   ProteusDesignSuite,
   Vercel,
   Netlify,
   Rust,
   Typst,
   Golang,
   VHDL
} from "~~/include/languages_technologies";

const { t } = useI18n();

type Skill = {
   title: string;
   level?: 1 | 2 | 3 | 4;
   technologies: readonly LanguageTechnology[];
};

// 1 - Fundamental Awareness (basic knowledge)
// 2 - Novice (limited experience)
// 3 - Intermediate (practical application)
// 4 - Advanced (applied theory)

const SkillEntries: Skill[] = [
   {
      title: t("frontend"),
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
      title: t("backend"),
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
      title: t("embedded"),
      level: 3,
      technologies: [
         CLang,
         CPP,
         VHDL,
         Golang,
         Linux,
         Arduino,
         RaspberryPI,
         Rust,
         Fritzing,
         Matlab,
         ProteusDesignSuite,
      ],
   },
   {
      title: t("mobile"),
      level: 2,
      technologies: [Dart, Flutter, Android],
   },
   {
      title: t("ui_ux"),
      level: 1,
      technologies: [Figma, AdobeXD, AdobeIllustrator],
   },
   {
      title: t("others"),
      technologies: [
         LaTeX,
         Typst,
         PhpMyAdmin,
         Cloudflare,
         Vercel,
         Netlify,
         OfficeWord,
         OfficeExcel,
         OfficePowerPoint,
         Canva,
      ],
   },
];
</script>

<style lang="scss"></style>
