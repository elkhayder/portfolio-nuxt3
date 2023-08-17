<template>
   <header
      class="w-full h-20 fixed top-0 left-0 right-0 z-50 transition max-md:!bg-transparent max-md:!shadow-none print:hidden"
      :class="{ 'bg-transparent': !isFolded, 'bg-white shadow-md': isFolded }"
   >
      <!-- Desktop Navbar -->
      <nav
         class="w-full h-full max-w-6xl mx-auto px-10 flex items-center justify-start md:gap-x-6 lg:gap-x-11 flex-wrap max-md:hidden"
      >
         <NuxtLink
            class="text-xs lg:text-base h-auto uppercase font-mono font-semibold transition"
            :class="{
               'text-gray-600 hover:text-gray-800': isFolded,
               'text-white hover:text-gray-200': !isFolded,
            }"
            v-for="entry of NavEntries"
            :to="entry.href"
         >
            {{ t(entry.title) }}
         </NuxtLink>
         <div class="flex-1" />
         <NuxtLink
            v-for="x of SocialMediaEntries"
            target="_blank"
            :href="x.href"
            :title="x.title"
            class="text-base"
            :class="{
               'text-gray-600 hover:text-gray-800': isFolded,
               'text-white hover:text-gray-200': !isFolded,
            }"
         >
            <i v-if="!x.custom" :class="x.icon" />
            <div v-else class="h-[16px] w-[16px]" v-html="x.icon" />
         </NuxtLink>
         <span class="block w-0.5 h-8 bg-gray-400 opacity-50" />

         <LanguageSwitcher />
      </nav>
      <!-- Mobile Navbar -->
      <button
         href="#"
         class="md:hidden absolute z-[100] top-8 right-8 h-10 w-10 rounded-md bg-white flex items-center justify-center"
         @click="() => (isMobileNavOpen = !isMobileNavOpen)"
      >
         <i
            class="fas text-lg"
            :class="{
               'fa-times': isMobileNavOpen,
               'fa-bars': !isMobileNavOpen,
            }"
         />
      </button>
      <nav
         class="md:hidden fixed inset-0 w-screen h-screen bg-white z-[75] flex flex-col justify-center items-center gap-4 transition"
         :class="{
            'translate-x-full': !isMobileNavOpen,
         }"
      >
         <NuxtLink
            class="h-auto font-mono font-semibold transition text-gray-600 hover:text-gray-800"
            v-for="entry of NavEntries"
            :href="entry.href"
            @click="closeMobileNav"
         >
            <i class="fas fa-chevron-right text-xs" />
            {{ t(entry.title) }}
            <i class="fas fa-chevron-left text-xs" />
         </NuxtLink>
         <div class="my-4">
            <NuxtLink
               v-for="x of SocialMediaEntries"
               target="_blank"
               :href="x.href"
               :title="x.title"
               class="text-lg text-gray-600 hover:text-gray-800"
               :class="{
                  'ml-8': SocialMediaEntries.indexOf(x),
               }"
            >
               <i v-if="!x.custom" :class="x.icon" />
               <div
                  v-else
                  v-html="x.icon"
                  class="inline-block h-[18px] w-[18px]"
               />
            </NuxtLink>
         </div>
         <LanguageSwitcher />
      </nav>
   </header>
</template>

<script setup lang="ts">
import { SocialMediaEntries } from "~~/include/misc";

const { t } = useI18n();
const localePath = useLocalePath();

type NavEntry = {
   title: string;
   href: string;
};

const NavEntries: NavEntry[] = [
   {
      title: "titles.home",
      href: localePath("/") + "#me",
   },
   {
      title: "titles.resume",
      href: localePath("/") + "#resume",
   },
   {
      title: "titles.projects",
      href: localePath("/") + "#projects",
   },
   {
      title: "titles.testimonials",
      href: localePath("/") + "#testimonials",
   },
   {
      title: "titles.contact",
      href: localePath("/") + "#contact",
   },
];

const isFolded = ref<boolean>(false);

const isMobileNavOpen = ref<boolean>(false);

const closeMobileNav = () => {
   isMobileNavOpen.value = false;
};

const onScroll = (e: Event) => {
   const threshold = 30;
   const currentScroll = window.pageYOffset;

   isFolded.value = currentScroll > threshold;
};

onMounted(() => {
   window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
   window.removeEventListener("scroll", onScroll);
});
</script>

<style lang="scss"></style>
