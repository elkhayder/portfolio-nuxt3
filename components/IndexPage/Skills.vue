<template>
   <section>
      <h2 class="subtitle">Skills</h2>
      <div class="flex flex-wrap gap-x-12 gap-y-10 max-sm:gap-x-8 items-end">
         <div v-for="skill of SkillEntries" class="flex-[1_1_40%]">
            <div
               class="flex justify-between items-center text-sm font-mono text-gray-700"
            >
               <h4 class="inline-block">{{ skill.title }}</h4>
               <h6 class="inline-block">{{ skill.progress }}%</h6>
            </div>
            <div class="mt-2 w-full bg-accent-200 rounded-sm h-1.5">
               <div
                  class="bg-accent-500 h-full rounded-sm"
                  :style="`width: ${skill.progress}%`"
               ></div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
type Skill = { title: string; progress: number };

const SkillEntries: readonly Skill[] = [
   {
      title: "Embedded C",
      progress: 75,
   },
   {
      title: "HTML",
      progress: 80,
   },
   {
      title: "CSS & SCSS",
      progress: 70,
   },
   {
      title: "JavaScript & TypeScript",
      progress: 85,
   },
   {
      title: "Laravel & PHP",
      progress: 90,
   },
   {
      title: "UI/UX",
      progress: 55,
   },
] as const;
</script>

<style lang="scss"></style>
