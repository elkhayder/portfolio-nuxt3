<i18n lang="yaml">
en:
   subtitle: Web developer, Electronics engineering student
   phone: Phone
   location: Location
   yo: years old

fr:
   subtitle: Developpeur Web, et étudiant en ingenierie des Systèmes électroniques
   phone: Tel
   location: Localisation
   yo: ans
</i18n>

<template>
   <span id="me" class="anchor" />
   <main>
      <div
         class="w-full max-w-6xl mx-auto p-6 max-sm:pb-0 flex max-sm:flex-col-reverse gap-12 max-sm:gap-6 text-white font-mono"
      >
         <div class="w-full max-w-xs relative max-sm:mx-auto max-sm:-mb-10">
            <nuxt-img
               src="/images/ai_selfie.png"
               alt="EL KHAYDER's Image"
               class="sm:absolute rounded-lg w-full object-cover"
               :width="360"
               :height="360"
               preload
            />
         </div>
         <div>
            <h1 class="charta text-4xl font-bold">
               <HackerTitle title="EL KHAYDER ZAKARIA" />
            </h1>
            <h3 class="mt-2 mb-10">{{ t("subtitle") }}</h3>
            <dl>
               <dt><HackerTitle title="Age" /></dt>
               <dd>
                  {{ diffYears(new Date(), new Date("2002-12-27")) }}
                  {{ t("yo") }}
               </dd>
               <dt><HackerTitle :title="t('phone')" /></dt>
               <dd><a href="tel:+33745640961">+33 745 640961</a></dd>
               <dt><HackerTitle title="Email" /></dt>
               <dd>
                  <a href="mailto:zelkhayder@gmail.com" class="text-ellipsis">
                     zelkhayder@gmail.com
                  </a>
               </dd>
               <dt><HackerTitle :title="t('location')" /></dt>
               <dd>Strasbourg, France</dd>
            </dl>
         </div>
      </div>
   </main>
</template>

<script setup lang="ts">
import { diffYears } from "@/include/helpers";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
dl {
   dd {
      @apply pl-36 my-4;
   }

   dt {
      @apply float-left uppercase text-gray-700  bg-white px-1 font-semibold;

      &::after {
         content: ":";
      }
   }
}

.charta::after {
   content: "_";
}
</style>
