<i18n lang="yaml">
en:
   arr: All Rights Reserved

fr:
   arr: Tous droits réservés
</i18n>

<template>
   <footer class="py-6 bg-gray-900">
      <section class="my-0">
         <!-- <hr
            class="mb-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
         /> -->
         <div
            class="flex items-center gap-4 justify-between max-md:justify-center max-md:flex-col"
         >
            <span class="text-sm text-gray-400 sm:text-center">
               &copy; {{ new Date().getFullYear() }}
               <a href="https://zelkhayder.me/">@elkhayder</a>
               <span class="mx-2">|</span> {{ t("arr") }}
            </span>
            <div class="flex gap-4">
               <a
                  v-for="x of SocialMediaEntries"
                  target="_blank"
                  :href="x.href"
                  :title="x.title"
                  class="text-gray-400 hover:text-white"
               >
                  <i :class="x.icon" class="w-5 h-5" />
               </a>
            </div>
         </div>
      </section>
   </footer>
</template>

<script setup lang="ts">
import { SocialMediaEntries } from "~~/include/misc";

const { t } = useI18n();
</script>

<style lang="scss"></style>
