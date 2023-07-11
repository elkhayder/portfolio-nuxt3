export const isRTL = () => {
   //    const i18n = useI18n();
   //    return ["ar"].includes(i18n.locale.value);
   return useI18n().localeProperties.value.dir === "rtl";
};
