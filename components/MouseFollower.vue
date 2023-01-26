<template>
   <div
      class="select-none z-[200] fixed w-6 h-6 bg-accent-500 opacity-80 -translate-x-1/2 -translate-y-1/2 rounded-full"
      :style="{
         top: position.y + 'px',
         left: position.x + 'px',
      }"
   ></div>
</template>

<script setup lang="ts">
const position = reactive<{ x?: number; y?: number; scrollOffset: number }>({
   scrollOffset: 0,
});

let prevValue = 0;

const onMouseMove = (e: MouseEvent) => {
   position.x = e.pageX - window.scrollX;
   position.y = e.pageY - window.scrollY;
};

onMounted(() => {
   window.addEventListener("mousemove", onMouseMove);
});
</script>

<style lang="scss" scoped></style>
