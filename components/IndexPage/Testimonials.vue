<i18n lang="yaml">
en:
   quote:
      Zakaria has played a key role in the development of several robust and scalable
      applications that have exceeded our client's expectations... He is pleasure to
      work with, easy going, proactive in identifying and solving problems
   founder_of: Founder of

fr:
   quote:
      Zakaria a joué un rôle clé dans le développement de plusieurs applications
      robustes et évolutives qui ont dépassé les attentes de nos clients... Il est agréable
      à travailler avec et proactif dans l'identification et la résolution des problèmes
   founder_of: Fondateur de
</i18n>

<template>
   <a id="testimonials" class="anchor" />
   <div id="testimonials" class="bg bg-[length:60px_60px] bg-repeat py-8">
      <section class="text-center">
         <figure class="max-w-screen-md mx-auto">
            <img
               src="@/assets/svg/quote.svg"
               class="text-gray-400 h-14 mx-auto mb-3 bg-white p-3 pb-0"
               alt="Quote' Icon"
            />
            <blockquote>
               <p
                  class="text-lg font-medium after:text-3xl after:text-gray-100 after:leading-7 before:text-3xl before:text-gray-100 before:leading-7 before:content-['“'] after:content-['”']"
               >
                  <span
                     class="inline py-[0.25] px-2 bg-white text-black font-mono mx-2"
                  >
                     ... {{ t("quote") }} ...
                  </span>
               </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
               <img
                  class="w-8 h-8 rounded-full object-cover"
                  src="@/assets/images/people/hunor_kerekes.jpg"
                  alt="Hunor's profile picture"
               />
               <div
                  class="flex items-center divide-x-2 divide-gray-400 text-sm"
               >
                  <div
                     class="mr-3 px-1 font-medium text-gray-800 bg-white font-mono"
                  >
                     <a
                        href="https://www.linkedin.com/in/hunorkerekes"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Hunor Kerekes
                     </a>
                  </div>
                  <div class="pl-3 text-sm font-light text-gray-100">
                     {{ t("founder_of") }}
                     <a
                        href="https://www.linkedin.com/company/kuko-studio/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        kuko.studio
                     </a>
                  </div>
               </div>
            </figcaption>
         </figure>
      </section>
   </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style lang="scss" scoped>
.bg {
   $bgOpacity: 0.9;
   background-image: url("@/assets/images/testimonials-bg.png"),
      linear-gradient(
         rgba(45, 45, 45, $bgOpacity),
         rgba(45, 45, 45, $bgOpacity)
      );
}
</style>
