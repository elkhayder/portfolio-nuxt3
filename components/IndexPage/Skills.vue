<template>
   <section>
      <h2 class="subtitle">Skills</h2>
      <div
         class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-sm:gap-x-8"
      >
         <div v-for="skill of SkillEntries" class="flex-[0_1_30%]">
            <div class="text-sm font-mono text-gray-700 flex justify-between">
               <span class="font-medium">{{ skill.title }}:</span>
               <span class="font-bold italic text-accent-600">
                  {{ skill.level }}
               </span>
            </div>
            <div class="mt-3 flex flex-wrap gap-4">
               <a
                  v-for="tech of skill.technologies"
                  :href="tech.href"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img
                     :src="tech.image"
                     :alt="`${tech.name}'s Logo`"
                     :title="tech.name"
                     class="max-h-10 max-w-10 w-full h-full hover:grayscale-0 transition rounded-md"
                  />
               </a>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
type Skill = {
   title: string;
   level: "Expert" | "Advanced" | "Intermediate" | "Beginner";
   technologies: readonly Technology[];
};

type Technology = {
   name: string;
   image: string;
   href: string;
};

const linux: Technology = {
   name: "Linux",
   image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
   href: "https://en.wikipedia.org/wiki/Linux",
};

const SkillEntries: readonly Skill[] = [
   {
      title: "Frontend development",
      level: "Advanced",
      technologies: [
         {
            name: "HTML",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            href: "https://en.wikipedia.org/wiki/HTML",
         },
         {
            name: "CSS",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            href: "https://en.wikipedia.org/wiki/CSS",
         },
         {
            name: "Sass",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
            href: "https://sass-lang.com/",
         },
         {
            name: "TailwindCss",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            href: "https://tailwindcss.com/",
         },
         {
            name: "JavaScript",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            href: "https://en.wikipedia.org/wiki/JavaScript",
         },
         {
            name: "TypeScript",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            href: "https://www.typescriptlang.org/",
         },
         {
            name: "VueJS",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            href: "https://vuejs.org/",
         },
         {
            name: "NuxtJS",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
            href: "https://nuxt.com/",
         },
         {
            name: "ReactJS",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            href: "https://reactjs.org/",
         },
         {
            name: "NextJS",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            href: "https://nextjs.org/",
         },
      ],
   },
   {
      title: "Backend development",
      level: "Advanced",
      technologies: [
         {
            name: "PHP",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            href: "https://www.php.net/",
         },
         {
            name: "Laravel",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
            href: "https://laravel.com/",
         },
         {
            name: "MySQL",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            href: "https://www.mysql.com/",
         },
         {
            name: "Firebase",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            href: "https://firebase.google.com/",
         },
         {
            name: "NodeJS",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            href: "https://nodejs.org/",
         },
         {
            name: "Express.js",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            href: "https://expressjs.com/",
         },
         {
            name: "Apache",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
            href: "https://httpd.apache.org/",
         },
         linux,
      ],
   },
   {
      title: "Embedded Systems",
      level: "Intermediate",
      technologies: [
         {
            name: "C",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
            href: "https://en.wikipedia.org/wiki/C_(programming_language)",
         },
         {
            name: "C++",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
            href: "https://en.wikipedia.org/wiki/C%2B%2B",
         },
         {
            name: "Embedded C",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg",
            href: "https://en.wikipedia.org/wiki/Embedded_C",
         },
         linux,
         {
            name: "Arduino",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
            href: "https://www.arduino.cc/",
         },
         {
            name: "RaspberryPi",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
            href: "https://www.raspberrypi.com/",
         },
         {
            name: "Fritzing",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Fritzing_icon_%28new%29.png",
            href: "https://fritzing.org/",
         },
         {
            name: "Matlab",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
            href: "https://www.mathworks.com/products/matlab.html",
         },
      ],
   },
   {
      title: "Mobile development",
      level: "Intermediate",
      technologies: [
         {
            name: "Dart",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
            href: "https://dart.dev/",
         },
         {
            name: "Flutter",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
            href: "https://flutter.dev/",
         },
         {
            name: "Android",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
            href: "https://www.android.com/",
         },
      ],
   },
   {
      title: "UI/UX design",
      level: "Beginner",
      technologies: [
         {
            name: "Figma",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            href: "https://www.figma.com/",
         },
         {
            name: "Adobe Xd",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
            href: "https://en.wikipedia.org/wiki/Adobe_XD",
         },
         {
            name: "Adobe Illustrator",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
            href: "https://www.adobe.com/products/illustrator.html",
         },
      ],
   },
] as const;
</script>

<style lang="scss"></style>
