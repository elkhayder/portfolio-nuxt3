<i18n lang="yaml">
en:
   firstname: Firstname
   lastname: Lastname
   subject: Subject
   email: Email
   message: Message
   message_placeholder: Your message! express yourself however you please, There is no limit
   success:
      - Your message has been sent successfully.
      - I will get back at you as soon as possible!
   send_another: Send another message
   submit: Submit

fr:
   firstname: Prénom
   lastname: Nom de famille
   subject: Sujet
   email: Adresse e-mail
   message: Message
   message_placeholder: Votre message! Exprimez-vous comme bon vous semble, il n'y a pas de limite
   success:
      - Votre message a été envoyé avec succès.
      - Je vous répondrai dès que possible !
   send_another: Envoyer un autre message
   submit: Envoyer

ar:
   firstname: الاسم الشخصي
   lastname: اسم العائلة
   subject: الموضوع
   email: البريد الإلكتروني
   message: الرسالة
   message_placeholder: رسالتك! عبِر عن نفسك كما تشاء، ليس هناك حدود
   success:
      - تم إرسال رسالتك بنجاح
      - سأقوم بالرد عليك في أقرب وقت ممكن!
   send_another: إرسال رسالة أخرى
   submit: إرسال
</i18n>

<script setup lang="ts">
const isSubmitted = ref(false);

const isSubmitting = ref(false);

const { t } = useI18n();

const SubmitForm = async (e: Event) => {
   isSubmitting.value = true;

   const data = new FormData(e.target as HTMLFormElement);
   data.append("_template", "table");
   data.append(
      "_subject",
      "New Message from Portfolio: " + data.get("Subject")
   );

   await fetch("https://formsubmit.co/ajax/4f4fa3342b32e37b07647f13e82f00fa", {
      method: "POST",
      body: data,
   })
      .then((res) => res.json())
      .then((res) => {
         if (res.success) {
            isSubmitted.value = true;
            (e.target as HTMLFormElement).reset();
         }
      })
      .catch((err) => {
         console.log("Form submission error: ", err);
         alert("Something went wrong, please try again later.");
      });

   isSubmitting.value = false;
};
</script>

<template>
   <section>
      <div v-if="isSubmitted" class="mx-auto">
         <p class="text-center font-mono text-sm">
            {{ t("success.0") }}
         </p>
         <p class="text-center font-mono text-sm mt-2">
            {{ t("success.1") }}
         </p>

         <nuxt-img
            src="/svg/undraw_mail_sent.svg"
            class="w-full max-w-[200px] mx-auto my-8"
            alt="Mail sent successfully"
         />
         <button
            @click="isSubmitted = false"
            class="max-w-sm mx-auto block"
            :disabled="isSubmitting"
         >
            {{ t("send_another") }}
         </button>
      </div>
      <div v-else class="flex flex-col md:flex-row gap-8 items-center">
         <div class="w-full md:w-1/2">
            <nuxt-img
               src="/svg/undraw_mailbox.svg"
               class="w-full max-w-[200px] md:max-w-xs mx-auto"
            />
         </div>
         <div class="w-full md:w-1/2">
            <form
               method="POST"
               action="https://formsubmit.co/4f4fa3342b32e37b07647f13e82f00fa"
               @submit.prevent="SubmitForm"
            >
               <!-- Form submission config -->
               <div class="input-group">
                  <div>
                     <label for="firstname">{{ t("firstname") }}</label>
                     <input
                        type="text"
                        id="firstname"
                        name="First name"
                        placeholder="Zakaria"
                        required
                        :disabled="isSubmitting"
                     />
                  </div>
                  <div>
                     <label for="lastname">{{ t("lastname") }}</label>
                     <input
                        type="text"
                        id="lastname"
                        name="Last name"
                        placeholder="EL KHAYDER"
                        :disabled="isSubmitting"
                     />
                  </div>
               </div>
               <div class="input-group">
                  <div>
                     <label for="subject">{{ t("subject") }}</label>
                     <input
                        type="text"
                        id="subject"
                        name="Subject"
                        placeholder="Project Quote: Music Player"
                        required
                        :disabled="isSubmitting"
                     />
                  </div>
                  <div>
                     <label for="email">{{ t("email") }}</label>
                     <input
                        type="email"
                        id="email"
                        name="Email"
                        placeholder="zelkhayder@gmail.com"
                        required
                        :disabled="isSubmitting"
                     />
                  </div>
               </div>
               <div class="mb-6">
                  <label for="message">{{ t("message") }}</label>
                  <textarea
                     name="Message"
                     id="message"
                     class="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 block w-full py-3 px-4 min-"
                     required
                     :placeholder="t('message_placeholder')"
                     :disabled="isSubmitting"
                  ></textarea>
               </div>
               <button type="submit" :disabled="isSubmitting">
                  {{ t("submit") }}
                  <i v-if="isSubmitting" class="fas fa-spinner fa-spin mr-2" />
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
   @apply bg-zinc-50 border border-gray-50 text-gray-900 text-sm rounded-md outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 block w-full py-3 px-4 disabled:cursor-not-allowed disabled:grayscale disabled:bg-gray-200;
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

button {
   @apply font-mono text-white bg-accent-500 hover:bg-accent-600 outline-none focus:ring-4 font-medium rounded-md text-sm w-full px-5 py-3 text-center transition-all duration-300 disabled:cursor-not-allowed disabled:grayscale;
}
</style>
