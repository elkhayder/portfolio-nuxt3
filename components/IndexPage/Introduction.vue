<template>
   <a id="me" class="anchor" />
   <main class="pt-20">
      <div
         class="w-full max-w-6xl mx-auto p-6 max-sm:pb-0 flex max-sm:flex-col-reverse gap-12 max-sm:gap-6 text-white font-mono"
      >
         <div class="w-full max-w-xs relative max-sm:mx-auto max-sm:-mb-10">
            <img
               src="@/assets/images/faceshot.jpg"
               alt="EL KHAYDER's Image"
               class="sm:absolute rounded-lg w-full object-cover"
            />
         </div>
         <div>
            <h1 class="charta text-4xl font-bold">EL KHAYDER ZAKARIA</h1>
            <h3 class="mt-2 mb-10">
               Web developer, Electronics engineering student
            </h3>
            <dl>
               <dt>Age</dt>
               <dd>
                  {{ diff_years(new Date(), new Date("2002-12-27")) }}
                  years old
               </dd>
               <dt>Phone</dt>
               <dd><a href="tel:+33745640961">+33 745 640961</a></dd>
               <dt>Email</dt>
               <dd>
                  <a href="mailto:zelkhayder@gmail.com">zelkhayder@gmail.com</a>
               </dd>
               <dt>Location</dt>
               <dd>Strasbourg, France</dd>
            </dl>
         </div>
      </div>
   </main>
</template>

<script setup lang="ts">
type Info = {
   entry: string;
   data: string;
};

function diff_years(dt2: Date, dt1: Date) {
   var diff = (dt2.getTime() - dt1.getTime()) / 1000;
   diff /= 60 * 60 * 24;
   return Math.abs(Math.round(diff / 365.25));
}
</script>

<style lang="scss" scoped>
main {
   $bgOpacity: 0.8;
   position: relative;
   background-image: linear-gradient(
         rgba(45, 45, 45, $bgOpacity),
         rgba(45, 45, 45, $bgOpacity)
      ),
      url(@/assets/images/background-bw.jpg);
   background-position: center;
   background-size: cover;
}

dl {
   dd {
      @apply pl-32 my-4;
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
