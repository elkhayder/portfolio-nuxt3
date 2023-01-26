<template>
   <div
      v-if="isShown"
      id="overlay"
      class="overlay"
      :class="{ loaded: isLoaded }"
   >
      <div class="overlayDoor" />
      <div class="overlayContent">
         <div class="loader">
            <div class="inner" />
         </div>
      </div>
   </div>
</template>
<script setup lang="ts">
const isShown = ref<boolean>(true);
const isLoaded = ref<boolean>(false);

const onLoad = () => {
   isLoaded.value = true;
   setTimeout(() => {
      isShown.value = false;
      document.body.classList.add("loaded");
   }, 500 + 800);
};

onMounted(() => {
   onLoad();

   //    window.onload = onLoad;
   //    window.addEventListener("load", onLoad);
});

onUnmounted(() => {
   //    window.removeEventListener("load", onLoad);
});
</script>

<style lang="scss" scoped>
.overlay {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 100000000;
   .overlayDoor {
      &:before,
      &:after {
         content: "";
         position: absolute;
         width: 50%;
         height: 100%;
         background: #111;
         transition: 0.5s cubic-bezier(0.77, 0, 0.18, 1);
         transition-delay: 0.8s;
      }
      &:before {
         left: 0;
      }
      &:after {
         right: 0;
      }
   }
   &.loaded {
      .overlayDoor {
         &:before {
            left: -50%;
         }
         &:after {
            right: -50%;
         }
      }
      .overlayContent {
         opacity: 0;
         margin-top: -15px;
      }
   }
   .overlayContent {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: 0.5s cubic-bezier(0.77, 0, 0.18, 1);
   }
}
.loader {
   width: 128px;
   height: 128px;
   border: 3px solid #fff;
   border-bottom: 3px solid transparent;
   border-radius: 50%;
   position: relative;
   animation: spin 1s linear infinite;
   display: flex;
   justify-content: center;
   align-items: center;
   .inner {
      width: 64px;
      height: 64px;
      border: 3px solid transparent;
      border-top: 3px solid #fff;
      border-radius: 50%;
      animation: spinInner 1s linear infinite;
   }
}
@keyframes spin {
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(360deg);
   }
}
@keyframes spinInner {
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(-720deg);
   }
}
</style>
