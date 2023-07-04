<template>
   <div class="relative w-[fit-content]">
      <button
         class="bg-white text-gray-500 rounded py-2 px-3 focus:outline-none flex items-center"
         @click="isMenuOpen = !isMenuOpen"
      >
         <nuxt-img
            :src="`https://flagicons.lipis.dev/flags/4x3/${
               currentLocale.flag ?? currentLocale.code
            }.svg`"
            class="h-4 mr-2"
         />
         <i class="fas fa-chevron-down text-xs" />
      </button>
      <transition
         enter-active-class="transition ease duration-300 transform"
         enter-from-class="opacity-0 translate-y-2"
         enter-to-class="opacity-100 translate-y-0"
         leave-active-class="transition ease duration-300 transform"
         leave-from-class="opacity-100 translate-y-0"
         leave-to-class="opacity-0 translate-y-4"
      >
         <div
            class="bg-white text-gray-700 shadow-md rounded text-sm absolute mt-12 top-0 right-0 min-w-full w-48 z-30 lg:translate-x-0 translate-x-[30%]"
            v-if="isMenuOpen"
         >
            <span
               class="absolute top-0 right-0 w-3 h-3 bg-white transform rotate-45 -mt-1 mr-3"
            />
            <div class="bg-white overflow-auto rounded w-full relative z-10">
               <ul class="list-reset">
                  <template v-for="lang in typedLocales">
                     <NuxtLink
                        :to="switchLocalePath(lang.code)"
                        class="px-4 py-2 flex hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100"
                     >
                        <li
                           class="flex items-center w-full"
                           @click="isMenuOpen = false"
                        >
                           <img
                              :src="`https://flagicons.lipis.dev/flags/4x3/${
                                 lang.flag ?? lang.code
                              }.svg`"
                              class="h-4 mr-2"
                           />
                           {{ lang.name }}
                           <i
                              class="ml-auto fas fa-check"
                              v-if="locale == lang.code"
                           />
                        </li>
                     </NuxtLink>
                  </template>
               </ul>
            </div>
         </div>
      </transition>
   </div>
</template>

<script setup lang="ts">
import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";
import { ref, ComputedRef } from "vue";

const isMenuOpen = ref(false);

const { locale, locales } = useI18n();

const typedLocales = locales as unknown as ComputedRef<LocaleObject[]>;
const currentLocale = computed(
   () => typedLocales.value.find((e) => e.code == locale.value)!
);

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

useHead({
   link: typedLocales.value.map((lang) => ({
      rel: "preload",
      href: `https://flagicons.lipis.dev/flags/4x3/${
         lang.flag ?? lang.code
      }.svg`,
      as: "image",
   })),
});

// onLanguageSwitched = (oldLocale: string, newLocale: string) => {
//    isMenuOpen.value = false;
// };
</script>

<style lang="scss"></style>
