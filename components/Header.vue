<template>
   <header
      class="w-full h-20 fixed top-0 left-0 right-0 z-50 transition max-md:!bg-transparent max-md:!shadow-none"
      :class="{ 'bg-transparent': !isFolded, 'bg-white shadow-md': isFolded }"
   >
      <!-- Desktop Navbar -->
      <nav
         class="w-full h-full max-w-6xl mx-auto px-6 flex items-center justify-start gap-x-12 max-lg:gap-x-8 flex-wrap max-md:hidden"
      >
         <a
            class="h-auto uppercase font-mono font-semibold transition"
            :class="{
               'text-gray-600 hover:text-gray-800': isFolded,
               'text-white hover:text-gray-200': !isFolded,
            }"
            v-for="entry of NavEntries"
            :href="entry.href"
         >
            {{ entry.title }}
         </a>
         <div class="flex-1" />
         <a
            v-for="x of SocialMediaEntries"
            target="_blank"
            :href="x.href"
            :title="x.title"
            class="text-lg max-lg:text-base"
            :class="{
               'text-gray-600 hover:text-gray-800': isFolded,
               'text-white hover:text-gray-200': !isFolded,
            }"
         >
            <i :class="x.icon" />
         </a>
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
         <a
            class="h-auto font-mono font-semibold transition text-gray-600 hover:text-gray-800"
            v-for="entry of NavEntries"
            :href="entry.href"
            @click="closeMobileNav"
         >
            <i class="fas fa-chevron-right text-xs" />
            {{ entry.title }}
            <i class="fas fa-chevron-left text-xs" />
         </a>
         <div class="mt-4">
            <a
               v-for="x of SocialMediaEntries"
               target="_blank"
               :href="x.href"
               :title="x.title"
               class="text-lg text-gray-600 hover:text-gray-800"
               :class="{
                  'ml-8': SocialMediaEntries.indexOf(x),
               }"
            >
               <i :class="x.icon" />
            </a>
         </div>
      </nav>
   </header>
</template>

<script setup lang="ts">
type NavEntry = {
   title: string;
   href: string;
};

const NavEntries: readonly NavEntry[] = [
   {
      title: "Home",
      href: "/#me",
   },
   {
      title: "Education",
      href: "/#education",
   },
   {
      title: "Experience",
      href: "/#experience",
   },
   {
      title: "Testimonials",
      href: "/#testimonials",
   },
   {
      title: "Contact",
      href: "/#contact",
   },
] as const;

type SocialMediaEntry = {
   icon: string;
   title: string;
   href: string;
};

const SocialMediaEntries: readonly SocialMediaEntry[] = [
   {
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/elkhayder.zakaria",
      title: "Instagram",
   },
   {
      icon: "fab fa-github",
      href: "https://www.github.com/elkhayder",
      title: "Github",
   },
   {
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/in/elkhayderzakaria",
      title: "LinkedIn",
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
