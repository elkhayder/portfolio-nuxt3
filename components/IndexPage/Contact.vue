<script setup lang="ts">
const route = useRouter();

const formSubmitted = computed(() => {
   return !!route.currentRoute.value.query.form_submitted;
});
</script>

<template>
   <section>
      <div v-if="formSubmitted" class="mx-auto">
         <h2 class="text-center text-2xl mb-8">Form submitted successfully</h2>
         <nuxt-img
            src="/svg/undraw_mail_sent.svg"
            class="w-full max-w-[200px] mx-auto"
            alt="Mail sent successfully"
         />
      </div>
      <div v-else class="flex flex-col md:flex-row gap-8 items-center">
         <div class="w-full md:w-1/2">
            <nuxt-img
               src="/svg/undraw_mailbox.svg"
               class="w-full max-w-xs mx-auto"
            />
         </div>
         <div class="w-full md:w-1/2">
            <form
               method="POST"
               action="https://formsubmit.co/4f4fa3342b32e37b07647f13e82f00fa"
            >
               <!-- Form submission config -->
               <input
                  type="hidden"
                  name="_subject"
                  value="New Message from Portfolio"
               />
               <input type="hidden" name="_template" value="table" />
               <input type="text" name="_honey" class="!hidden" />
               <input
                  type="hidden"
                  name="_next"
                  value="https://zelkhayder.me/?form_submitted=true#contact"
               />

               <div class="input-group">
                  <div>
                     <label for="firstname">Firstname</label>
                     <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Zakaria"
                        required
                     />
                  </div>
                  <div>
                     <label for="lastname">Lastname</label>
                     <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="EL KHAYDER"
                     />
                  </div>
               </div>
               <div class="input-group">
                  <div>
                     <label for="subject">Subject</label>
                     <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Project Quote: Music Player"
                        required
                     />
                  </div>
                  <div>
                     <label for="email">Email</label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="zelkhayder@gmail.com"
                        required
                     />
                  </div>
               </div>
               <div class="mb-6">
                  <label for="message">Message</label>
                  <textarea
                     name="message"
                     id="message"
                     class="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 block w-full py-3 px-4 min-"
                     placeholder="Your message! express yourself however you please, There is no limit."
                     required
                  ></textarea>
               </div>
               <button
                  type="submit"
                  class="font-mono text-white bg-accent-500 hover:bg-accent-600 outline-none focus:ring-4 font-medium rounded-md text-sm w-full px-5 py-3 text-center transition-all duration-300"
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
   </section>
</template>

<style lang="scss" scoped>
.input-group {
   @apply grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6;
}

input,
textarea {
   @apply bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 block w-full py-3 px-4;
}

label {
   @apply block font-mono text-gray-500 mb-2 text-sm font-medium;

   &:has(+ *:required) {
      &::after {
         content: " *";
         @apply text-red-500 text-xs;
      }
   }
}
</style>
