<template>
   <div
      class="border-2 w-11 h-11 border-accent-400"
      ref="bigRingRef"
      :class="{
         '!opacity-0': isHidden,
         'bg-accent-400 scale-75': isClickable,
      }"
   />
   <div
      class="w-2 h-2 bg-accent-400"
      ref="smallRingRef"
      :class="{
         '!opacity-0': isHidden || isClickable,
      }"
   />
</template>

<script setup lang="ts">
const isHidden = ref<boolean>(true);

const isClickable = ref<boolean>(true);

const bigRingRef = ref<HTMLDivElement>();
const smallRingRef = ref<HTMLDivElement>();

let timeout: NodeJS.Timeout | null = null;

const onMouseMove = (e: MouseEvent) => {
   // Hiding Logic
   isHidden.value = false;
   if (timeout) clearTimeout(timeout);
   timeout = setTimeout(() => {
      isHidden.value = true;
   }, 1000);

   // Position Logic
   const pos = {
      left: `${e.pageX - window.scrollX}px`,
      top: `${e.pageY - window.scrollY}px`,
   };
   bigRingRef.value?.animate(pos, { duration: 300, fill: "forwards" });
   smallRingRef.value?.animate(pos, { duration: 800, fill: "forwards" });

   // Clickable Logic
   const element = document.elementFromPoint(e.clientX, e.clientY);

   if (!element) return;

   isClickable.value =
      // element.getAttribute("onclick") != null ||
      // element.getAttribute("href") != null ||
      getComputedStyle(element).cursor == "pointer";
};

onMounted(() => {
   window.addEventListener("mousemove", onMouseMove);
});
</script>

<style lang="scss" scoped>
div {
   @apply rounded-full -translate-x-1/2 -translate-y-1/2 transition-[opacity,background-color] duration-300 opacity-80 pointer-events-none z-[200] fixed;
}
</style>
