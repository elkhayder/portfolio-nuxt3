<template>
   <span @mouseover="onMouseOver">
      {{ mangled }}
   </span>
</template>

<script setup lang="ts">
const { title } = defineProps<{ title: string }>();

const mangled = ref(title);

let interval: NodeJS.Timer | null = null;

const onMouseOver = (e: MouseEvent) => {
   let iteration = 0;

   clearInterval(interval!);

   interval = setInterval(() => {
      mangled.value = title
         .split("")
         .map((letter, index) => {
            if (index < iteration || letter == " ") {
               return letter;
            }

            return String.fromCharCode(
               97 + Math.floor(Math.random() * 26)
            ).toUpperCase();
         })
         .join("");

      if (iteration >= title.length) {
         clearInterval(interval!);
      }

      iteration += 1 / 3;
   }, 30);
};
</script>

<style lang="scss"></style>
