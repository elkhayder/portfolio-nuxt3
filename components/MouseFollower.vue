<template>
   <div
      class="border-2 w-11 h-11 border-accent-400"
      ref="bigRingRef"
      :class="{
         '!opacity-0': isHidden,
         'bg-accent-400 scale-75': isClickable,
         'bg-red-400 scale-[0.6]': isDisabled,
      }"
   />
   <div
      class="w-2 h-2 bg-accent-400"
      ref="smallRingRef"
      :class="{
         '!opacity-0': isHidden || isClickable || isDisabled,
         'bg-red-400': isDisabled,
      }"
   />
</template>

<script setup lang="ts">
const isHidden = ref<boolean>(true);

const isClickable = ref<boolean>(true);

const isDisabled = ref<boolean>(false);

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
   bigRingRef.value?.animate(pos, { duration: 150, fill: "forwards" });
   smallRingRef.value?.animate(pos, { duration: 300, fill: "forwards" });

   // Clickable Logic
   const element = document.elementFromPoint(e.clientX, e.clientY);

   if (!element) return;

   isClickable.value =
      // element.getAttribute("onclick") != null ||
      // element.getAttribute("href") != null ||
      getComputedStyle(element).cursor == "pointer";

   isDisabled.value =
      element.getAttribute("disabled") != null ||
      element.getAttribute("aria-disabled") != null ||
      getComputedStyle(element).cursor == "not-allowed";
};

onMounted(() => {
   window.addEventListener("mousemove", onMouseMove);
});
</script>

<style lang="scss" scoped>
div {
   @apply rounded-full -translate-x-1/2 -translate-y-1/2 transition-[opacity,background-color,transform] duration-300 opacity-80 pointer-events-none z-[200] fixed;
}
</style>
