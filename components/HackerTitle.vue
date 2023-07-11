<template>
   <span @mouseover="onMouseOver">
      {{ mangled }}
   </span>
</template>

<script setup lang="ts">
const { title } = defineProps<{ title: string }>();

const mangled = ref(title);

let interval: NodeJS.Timer | null = null;

const locale = useI18n().locale;

const onMouseOver = (e: MouseEvent) => {
   let iteration = 0;

   clearInterval(interval!);

   const isArabic = locale.value == "ar";

   const CharStart = isArabic ? 1575 : 97;
   const CharsCount = isArabic ? 28 : 26;

   const CharPerIter = isArabic ? 1 : 3;

   interval = setInterval(() => {
      mangled.value = title
         .split("")
         .map((letter, index) => {
            if (index < iteration || letter == " ") {
               return letter;
            }

            return String.fromCharCode(
               CharStart + Math.floor(Math.random() * CharsCount)
            ).toUpperCase();
         })
         .join("");

      if (iteration >= title.length) {
         clearInterval(interval!);
      }

      iteration += 1 / CharPerIter;
   }, 30);
};
</script>

<style lang="scss"></style>
