import en from "./locales/en";
import fr from "./locales/fr";

export default defineI18nConfig(() => {
   return {
      legacy: false,
      locale: "en",
      messages: {
         en,
         fr,
      },
   };
});
