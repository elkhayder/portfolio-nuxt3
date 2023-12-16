import en from "./locales/en";
import fr from "./locales/fr";
import ar from "./locales/ar";

export default defineI18nConfig(() => {
   return {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      fallbackRoot: true,
      messages: {
         en,
         fr,
         ar,
      },
   };
});
