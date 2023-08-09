<i18n lang="yaml">
en:
   quotes:
      # Hunor Kerekes
      - ...Zakaria has played a key role in the development of several robust and scalable applications that have exceeded our client's expectations... He is pleasure to work with, easy going, proactive in identifying and solving problems...
      # SpanishAudioDrills.com
      - ...Zakaria is your guy. We had a vague vision of a rather unique audio player project, and not only did Zakaria knock it out of the park ... he had the backend knowledge to overcome a rather impossible bottleneck ... he was super communicative and collaborative the whole way...
      # Upwork JOB
      - Zakaria was super helpful. Quick to respond and get the job done. He fixed the issue i've been obsessing for a while about. Thank you!!!
   founder_of: Founder of
</i18n>

<script setup lang="ts">
const { t } = useI18n();

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
   };
};

const Testimonials: Testimonial[] = [
   {
      quote: t("quotes.0"),
      by: {
         name: "Hunor Kerekes",
         linkedin: "https://www.linkedin.com/in/hunorkerekes",
         image: "hunor_kerekes.jpg",
         company: {
            position: t("founder_of"),
            name: "kuko.studio",
            link: "https://www.linkedin.com/company/kuko-studio/",
         },
      },
   },
   {
      quote: t("quotes.1"),
      by: {
         name: "Jake Vanags",
         image: "jake_vanags.jpeg",
         company: {
            position: t("founder_of"),
            name: "Spanish Audio Drills",
            link: "https://spanishaudiodrills.com/",
         },
      },
   },
   {
      quote: t("quotes.2"),
      by: {
         name: "Maya Kano",
      },
   },
];

const SelectedTestimonialIndex = ref(0);

const PrevTestimonial = () => {
   SelectedTestimonialIndex.value =
      (SelectedTestimonialIndex.value - 1 + Testimonials.length) %
      Testimonials.length;
};
const NextTestimonial = () => {
   SelectedTestimonialIndex.value =
      (SelectedTestimonialIndex.value + 1) % Testimonials.length;
};
</script>

<template>
   <span id="testimonials" class="anchor" />
   <div id="testimonials" class="bg bg-[length:60px_60px] bg-repeat py-8">
      <section class="flex items-center justify-between text-center">
         <button @click="PrevTestimonial" title="Previous">
            <i class="fas fa-chevron-left text-4xl text-white" />
         </button>
         <figure
            v-for="(testimonial, i) of Testimonials"
            class="max-w-screen-md mx-auto"
            :class="{
               hidden: i !== SelectedTestimonialIndex,
            }"
         >
            <nuxt-img
               src="/svg/quote.svg"
               class="text-gray-400 h-14 mx-auto mb-3 bg-white p-3 pb-0"
               alt="Quote' Icon"
               :height="64"
            />
            <blockquote>
               <p
                  class="text-lg font-medium after:text-2xl before:text-2xl after:text-gray-100 before:text-gray-100 before:content-['“'] after:content-['”']"
               >
                  <span
                     class="inline py-[0.25] px-2 bg-white text-black font-mono mx-2"
                  >
                     {{ testimonial.quote }}
                  </span>
               </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
               <nuxt-img
                  v-if="testimonial.by.image"
                  class="w-8 h-8 rounded-full object-cover"
                  :src="'/images/people/' + testimonial.by.image"
                  :alt="testimonial.by.name + '\'s profile picture'"
                  :width="40"
                  :height="40"
               />
               <nuxt-img
                  v-else
                  class="w-8 h-8 rounded-full object-cover"
                  :src="
                     'https://api.dicebear.com/6.x/adventurer-neutral/svg?size=40&seed=' +
                     testimonial.by.name
                  "
                  alt="Randomly generated profile picture"
                  :width="40"
                  :height="40"
               />
               <div class="flex items-center text-sm">
                  <div
                     class="mr-3 px-1 font-medium text-gray-800 bg-white font-mono"
                  >
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
                  <!-- Company Info -->
                  <template v-if="testimonial.by.company">
                     <div class="mx-4 h-4 w-[1px] bg-white" />
                     <div class="pl-3 text-sm font-light text-gray-100">
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
                  </template>
               </div>
            </figcaption>
         </figure>
         <button @click="NextTestimonial" title="Next">
            <i class="fas fa-chevron-right text-4xl text-white" />
         </button>
      </section>
   </div>
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
   @apply rtl:rotate-180;
}
</style>
