<template>
   <header
      class="w-full h-20 fixed top-0 left-0 right-0 z-50 transition"
      :class="{ 'bg-transparent': !isFolded, 'bg-white shadow-md': isFolded }"
   >
      <nav
         class="w-full h-full max-w-6xl mx-auto px-6 flex items-center justify-start gap-x-12"
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
            class="text-lg"
            :class="{
               'text-gray-600 hover:text-gray-800': isFolded,
               'text-white hover:text-gray-200': !isFolded,
            }"
         >
            <i :class="x.icon" />
         </a>
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
