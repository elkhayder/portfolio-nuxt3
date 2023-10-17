<i18n lang="yaml">
en:
   subtitle: Web developer, Electronics & Embedded Systems engineering student
   phone: Phone
   location: Location
   email: Email
   age: Age
   yo: years old
   city: Strasbourg, France

fr:
   subtitle: Developpeur Web, et étudiant en Ingenierie des Systèmes Embarqués
   phone: Tel
   location: Localisation
   yo: ans

ar:
   subtitle: مطور ويب، طالب هندسة الإلكترونيات وأنظمة النظم المضمنة
   phone: هاتف
   location: موقع
   yo: سنة
   email: البريد الإلكتروني
   age: العمر
   city: ستراسبورغ، فرنسا
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
               <HackerTitle :title="t('name')" />
            </h1>
            <h3 class="mt-2 mb-10">{{ t("subtitle") }}</h3>
            <dl>
               <template v-for="x of info">
                  <dt>
                     <HackerTitle :title="x.title" />
                  </dt>
                  <dd>
                     <template v-if="typeof x.value === 'string'">
                        {{ x.value }}
                     </template>
                     <template v-else>
                        <a dir="ltr" :href="x.value.href" class="text-ellipsis">
                           {{ x.value.text }}
                        </a>
                     </template>
                  </dd>
               </template>
               <!-- <dt><HackerTitle :title="t('age')" /></dt>
               <dd>
                  {{ diffYears(new Date(), new Date("2002-12-27")) }}
                  {{}}
               </dd>
               <dt><HackerTitle :title="t('phone')" /></dt>
               <dd>
                  <a dir="ltr" href="tel:+33745640961"> +33 745 640961 </a>
               </dd>
               <dt><HackerTitle :title="t('email')" /></dt>
               <dd>
                  <a href="mailto:zelkhayder@gmail.com" class="text-ellipsis">
                     zelkhayder@gmail.com
                  </a>
               </dd>
               <dt><HackerTitle :title="t('location')" /></dt>
               <dd>Strasbourg, France</dd> -->
            </dl>
         </div>
      </div>
   </main>
</template>

<script setup lang="ts">
import { diffYears } from "@/include/helpers";

const { t } = useI18n();

const info = [
   {
      title: t("age"),
      value: diffYears(new Date(), new Date("2002-12-27")) + " " + t("yo"),
   },
   {
      title: t("phone"),
      value: {
         text: "+33 745 640961",
         href: "tel:+33745640961",
      },
   },
   {
      title: t("email"),
      value: {
         text: "zelkhayder@gmail.com",
         href: "mailto:zelkhayder@gmail.com",
      },
   },
   {
      title: t("location"),
      value: t("city"),
   },
];
</script>

<style lang="scss" scoped>
dl {
   dd {
      @apply ltr:pl-36 rtl:pr-48 my-4;
   }

   dt {
      @apply rtl:float-right ltr:float-left  uppercase text-gray-700  bg-white px-1 font-semibold;

      &::after {
         content: ":";
      }
   }
}

.charta::after {
   content: "_";
}
</style>
