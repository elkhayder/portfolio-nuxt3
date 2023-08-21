<i18n lang="yaml">
en:
   quotes:
      # Hunor Kerekes
      - ...Zakaria has played a key role in the development of several robust and scalable applications that have exceeded our client's expectations... He is pleasure to work with, easy going, proactive in identifying and solving problems...
      # SpanishAudioDrills.com
      - ...Zakaria is your guy. We had a vague vision of a rather unique audio player project, and not only did Zakaria knock it out of the park ... he had the backend knowledge to overcome a rather impossible bottleneck ... he was super communicative and collaborative the whole way...
      # Upwork JOB
      - Zakaria was super helpful. Quick to respond and get the job done. He fixed the issue i've been obsessing for a while about. Thank you!!!
      # Fiverr: Nadiro97
      - Best Guy ever he did all the work i asked for perfectly and he also helped me out on many stufgfs even without getting paid for them i hardly reconmmend him !!
      # Fiverr: bizlaance
      - On time work and clarifies the works in detail in writing and gives valuable suggestions.
   founder_of: Founder of
   source: Source

ar:
   quotes:
      # Hunor Kerekes
      - ...لعب زكرياء دورًا رئيسيًا في تطوير العديد من التطبيقات القوية والقابلة للتوسع التي تجاوزت توقعات عملائنا... إنه شخص ممتع العمل معه، سهل التعامل، مبادر في التعرف على المشكلات وحلها...
      # SpanishAudioDrills.com
      - ...زكرياء هو الشخص المناسب لك. كان لدينا رؤية غامضة لمشروع مشغل صوتي فريد نوعًا ما، ولم يكتف زكرياء فقط بتحقيق نجاح كبير ... بل كان لديه المعرفة الخلفية للتغلب على مصدر اختناق تقني تقريبًا مستحيل... كان تواصله ممتازًا وتعاونيًا طوال الطريق...
      # Upwork JOB
      - زكرياء كان مفيدًا للغاية. يستجيب بسرعة وينجز العمل. قام بإصلاح المشكلة التي كنت مهتمًا بها لفترة طويلة. شكرًا لك!
      # Fiverr: Nadiro97
      - أفضل شخص قام بجميع الأعمال التي طلبتها بكمال وقد ساعدني أيضًا في العديد من الأمور حتى دون الحصول على مقابل مالي، أوصي به بشدة!!
      # Fiverr: bizlaance
      - عمل في الوقت المحدد و وضح التفاصيل بالكتابة ويقدم اقتراحات قيمة.
   founder_of: مؤسس لـ
   source: المصدر

fr:
   quotes:
      # Hunor Kerekes
      - ...Zakaria a joué un rôle clé dans le développement de plusieurs applications robustes et évolutives qui ont dépassé les attentes de nos clients... C'est un plaisir de travailler avec lui, il est facile à vivre, proactif dans l'identification et la résolution de problèmes...
      # SpanishAudioDrills.com
      - ...Zakaria est l'homme qu'il vous faut. Nous avions une vision vague d'un projet de lecteur audio plutôt unique, et non seulement Zakaria l'a brillamment réalisé ... il avait la connaissance de la partie backend pour surmonter un goulot d'étranglement plutôt impossible... il était très communicatif et collaboratif tout au long du processus...
      # Upwork JOB
      - Zakaria a été d'une grande aide. Rapide à répondre et à accomplir le travail. Il a résolu le problème qui me préoccupait depuis un certain temps. Merci !!!
      # Fiverr: Nadiro97
      - Le meilleur gars de tous, il a fait tout le travail que j'ai demandé parfaitement et il m'a également beaucoup aidé sans être payé pour cela, je le recommande vivement !!
      # Fiverr: bizlaance
      - Travail effectué à temps et explication détaillée par écrit, avec des suggestions précieuses.
   founder_of: Fondateur de
   source: Source
</i18n>

<script setup lang="ts">
import { getRelativeTimeString } from "@/utils/time";

const { t, locale } = useI18n();

const ScreenWidth = ref(0);

const TestimonialsContainer = ref<HTMLElement | null>(null);

var touchStartX = 0;

onMounted(() => {
   ScreenWidth.value = window.innerWidth;

   window.addEventListener("resize", () => {
      ScreenWidth.value = window.innerWidth;
   });

   window.addEventListener("orientationchange", () => {
      ScreenWidth.value = window.innerWidth;
   });

   window.addEventListener("load", () => {
      ScreenWidth.value = window.innerWidth;
   });

   TestimonialsContainer.value?.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].clientX;
   });

   TestimonialsContainer.value?.addEventListener("touchend", (e) => {
      let touchEndX = e.changedTouches[0].clientX;

      if (touchStartX > touchEndX) GoNext();
      else if (touchStartX < touchEndX) GoPrev();

      touchStartX = 0;
   });
});

const ItemsPerRow = computed(() => {
   if (ScreenWidth.value >= 768) return 2; // md

   return 1;
});

const Sources = {
   linkedin: ["Linkedin", "https://www.linkedin.com/in/elkhayderzakaria/"],
   upwork: ["Upwork", "https://www.upwork.com/freelancers/~01c002a1361a1c9ab4"],
   fiverr: ["Fiverr", "https://www.fiverr.com/codinggarden"],
};

type Testimonial = {
   quote: string;
   by: {
      name: string;
      linkedin?: string;
      image?: string;
      company?: {
         position: string;
         name: string;
         link: string;
      };
      country: string;
   };
   date?: Date;
   source: keyof typeof Sources;
};

const Testimonials: Testimonial[] = [
   {
      quote: t("quotes.0"),
      // Jan 20, 2023
      date: new Date("2023-01-20"),
      by: {
         name: "Hunor Kerekes",
         linkedin: "https://www.linkedin.com/in/hunorkerekes",
         image: "hunor_kerekes.jpg",
         company: {
            position: t("founder_of"),
            name: "kuko.studio",
            link: "https://www.linkedin.com/company/kuko-studio/",
         },
         country: "hu",
      },
      source: "linkedin",
   },
   {
      quote: t("quotes.1"),
      // Jul 18, 2023
      date: new Date("2023-07-18"),
      by: {
         name: "Jake Vanags",
         image: "jake_vanags.jpeg",
         company: {
            position: t("founder_of"),
            name: "Spanish Audio Drills",
            link: "https://spanishaudiodrills.com/",
         },
         country: "us",
      },
      source: "upwork",
   },
   {
      quote: t("quotes.2"),
      // Jul 23, 2023
      date: new Date("2023-07-23"),
      by: {
         name: "Maya Kano",
         country: "us",
      },
      source: "upwork",
   },
   {
      quote: t("quotes.3"),
      // Jul 23, 2023
      date: new Date("2021-08-27T14:41:26"),
      by: {
         name: "Nadiro97",
         country: "tn",
      },
      source: "fiverr",
   },
   {
      quote: t("quotes.4"),
      // Jul 23, 2023
      date: new Date("2021-07-28T11:33:40"),
      by: {
         name: "bizlaance",
         country: "in",
      },
      source: "fiverr",
   },
];

const SelectedTestimonialIndex = ref(0);

const GoPrev = () => {
   if (SelectedTestimonialIndex.value === 0) return;

   SelectedTestimonialIndex.value--;
};

const GoNext = () => {
   if (
      SelectedTestimonialIndex.value ===
      Testimonials.length - ItemsPerRow.value
   )
      return;

   SelectedTestimonialIndex.value++;
};
</script>

<template>
   <section id="testimonials" class="pb-0">
      <span id="testimonials" class="anchor" />
      <h2 class="title">
         <HackerTitle :title="$t('titles.testimonials')" />
      </h2>
   </section>
   <section class="flex items-center rtl:flex-row-reverse gap-4 relative">
      <div
         class="absolute border border-gray-300 px-1 left-1/2 -translate-x-1/2 -bottom-7 h-[16px] w-40 rounded-md bg-zinc-100"
      >
         <div class="w-full h-full relative">
            <div
               class="h-[8px] bg-zinc-400 absolute top-[3.5px] left-0 rounded-md transition-all duration-300 ease-in-out"
               :style="{
                  width: (ItemsPerRow / Testimonials.length) * 100 + '%',
                  left: `${
                     (SelectedTestimonialIndex / Testimonials.length) * 100
                  }%`,
               }"
            />
         </div>
      </div>

      <button
         @click="GoPrev"
         title="Prev"
         :disabled="SelectedTestimonialIndex == 0"
      >
         <i class="fas fa-chevron-left" />
      </button>
      <div
         class="overflow-hidden flex items-stretch rtl:flex-row-reverse"
         ref="TestimonialsContainer"
      >
         <div
            v-for="(testimonial, i) of Testimonials"
            class="w-full lg:w-1/2 px-2 flex-grow-0 flex-shrink-0 transition-all duration-300 ease-in-out"
            :style="{
               transform: `translateX(-${
                  100 * SelectedTestimonialIndex
               }%) scale(${
                  i >= SelectedTestimonialIndex &&
                  i <= SelectedTestimonialIndex + ItemsPerRow - 1
                     ? 1
                     : 0.5
               })`,
            }"
         >
            <figure
               class="h-full border-2 border-gray-400 rounded-md p-8 flex flex-col"
            >
               <figcaption>
                  <div class="flex items-start justify-between">
                     <nuxt-img
                        class="w-14 h-14 md:w-16 md:h-16 rounded-md object-cover"
                        :src="
                           testimonial.by.image
                              ? `/images/people/${testimonial.by.image}`
                              : `https://api.dicebear.com/6.x/adventurer-neutral/svg?size=40&seed=${testimonial.by.name}`
                        "
                        :alt="
                           testimonial.by.image
                              ? `${testimonial.by.name}'s profile picture`
                              : 'Randomly generated profile picture'
                        "
                        :width="64"
                        :height="64"
                     />
                     <div
                        class="flex flex-col justify-end text-xs text-gray-500"
                     >
                        <div class="inline-block ltr:ml-auto rtl:mr-auto mb-2">
                           <nuxt-img
                              class="inline w-4 ltr:mr-2 rtl:ml-2"
                              :src="`https://flagicons.lipis.dev/flags/4x3/${testimonial.by.country}.svg`"
                              :alt="t(`countries.${testimonial.by.country}`)"
                              :width="16"
                           />
                           <span>
                              {{ t(`countries.${testimonial.by.country}`) }}
                           </span>
                        </div>
                        <div class="flex items-center justify-end gap-1 mb-1">
                           <i
                              v-for="i of 5"
                              class="fas fa-star text-xs text-yellow-400"
                           />
                        </div>
                        <time
                           v-if="testimonial.date"
                           :datetime="testimonial.date.toString()"
                           class="inline-block ltr:ml-auto rtl:mr-auto first-letter:uppercase"
                        >
                           {{ getRelativeTimeString(testimonial.date, locale) }}
                        </time>
                     </div>
                  </div>
                  <div
                     class="flex flex-col md:flex-row md:items-center justify-between md:text-sm mt-4"
                  >
                     <div class="font-medium text-gray-800 font-mono">
                        <a
                           v-if="testimonial.by.linkedin"
                           :href="testimonial.by.linkedin"
                           target="_blank"
                        >
                           {{ testimonial.by.name }}
                        </a>
                        <template v-else>
                           {{ testimonial.by.name }}
                        </template>
                     </div>
                     <div
                        v-if="testimonial.by.company"
                        class="text-sm font-light"
                     >
                        {{ testimonial.by.company.position }}
                        <a
                           v-if="testimonial.by.company.link"
                           :href="testimonial.by.company.link"
                           target="_blank"
                           class="underline"
                        >
                           {{ testimonial.by.company.name }}
                        </a>
                        <template v-else>
                           {{ testimonial.by.company.name }}
                        </template>
                     </div>
                  </div>
               </figcaption>
               <blockquote
                  class="text-xs md:text-sm font-medium mt-3 text-gray-600 flex-1 flex flex-col justify-between"
               >
                  <p>
                     {{ testimonial.quote }}
                  </p>
                  <h6 class="text-right italic mt-2">
                     {{ t("source") }}:
                     <a
                        class="underline"
                        :href="Sources[testimonial.source][1]"
                        target="_blank"
                     >
                        {{ Sources[testimonial.source][0] }}
                     </a>
                  </h6>
               </blockquote>
            </figure>
         </div>
      </div>
      <button
         @click="GoNext"
         title="Next"
         :disabled="
            SelectedTestimonialIndex == Testimonials.length - ItemsPerRow
         "
      >
         <i class="fas fa-chevron-right" />
      </button>
   </section>
</template>

<style lang="scss" scoped>
.bg {
   $bgOpacity: 0.9;
   background-image: url("/images/testimonials-bg.png"),
      linear-gradient(
         rgba(45, 45, 45, $bgOpacity),
         rgba(45, 45, 45, $bgOpacity)
      );
}

button {
   @apply text-lg md:text-2xl disabled:grayscale disabled:opacity-30 disabled:cursor-not-allowed;
}
</style>
