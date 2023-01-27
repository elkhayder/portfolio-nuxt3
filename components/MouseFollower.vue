<template>
   <div
      class="pointer-events-none z-[200] fixed 0 transition-[opacity,background-color,transform] duration-300 opacity-80 -translate-x-1/2 -translate-y-1/2 rounded-full"
      :class="{
         'opacity-0': isHidden,
         'bg-accent-400 scale-75': isClickable,
      }"
      :style="{
         top: position.y + 'px',
         left: position.x + 'px',
      }"
   >
      <div class="rounded-full border-2 w-11 h-11 border-accent-400" />
      <div
         class="w-2 h-2 bg-accent-400 rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
      />
   </div>
</template>

<script setup lang="ts">
const position = reactive<{ x: number; y: number; scrollOffset: number }>({
   x: 0,
   y: 0,
   scrollOffset: 0,
});

const isHidden = ref<boolean>(true);

const isClickable = ref<boolean>(true);

let timeout: NodeJS.Timeout | null = null;

const onMouseMove = (e: MouseEvent) => {
   position.x = e.pageX - window.scrollX;
   position.y = e.pageY - window.scrollY;
   isHidden.value = false;

   timeout && clearTimeout(timeout!);
   timeout = setTimeout(() => {
      isHidden.value = true;
   }, 1000);

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

<style lang="scss" scoped></style>
