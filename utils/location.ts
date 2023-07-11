export const city_country = (city: string, country: string) => {
   const { t } = useI18n();
   return (
      t("cities." + country + "." + city) + ", " + t("countries." + country)
   );
};
