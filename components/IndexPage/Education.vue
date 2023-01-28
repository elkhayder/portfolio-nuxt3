<i18n lang="yaml">
en:
   since: Since
   sep: September
   jun: June
   jul: July
   ma: Morocco
   schools:
      - Faculty of Physics and Engineering
      - Superior School of Technology
      - Ibn Mandour High School
   degrees:
      - Bachelor in Electronic Systems
      - University diploma of technology (DUT) in Electronics and Industrial IT
      - High School Diploma in Electrical Science and Technology
fr:
   since: Depuis
   sep: Septembre
   jun: Juin
   jul: Juillet
   ma: Maroc
   schools:
      - Faculté de physique et ingenierie
      - Lycée Qualifiant Ibn Mandour
      - Ecole supérieure de Technologie
   degrees:
      - Licence en Systèmes Electroniques
      - Diplôme Universitaire Technique (DUT) en Electronique et Informatique Industrielle
      - Baccalauréat en Science Technique Electrique
</i18n>
<template>
   <a class="anchor" id="education" />
   <section>
      <h3 class="subtitle">Education</h3>
      <ol class="relative border-l border-accent-600">
         <li class="mb-10 ml-6">
            <div
               class="absolute w-3 h-3 bg-accent-600 rounded-full mt-1.5 -left-1.5 border border-white"
            />
            <h6
               class="mb-2 text-sm font-normal leading-none text-gray-700"
               title="Date"
            >
               {{ t("since") }}
               <time>{{ t("sep") }} 2022</time>
            </h6>
            <h6
               class="mb-4 text-sm font-normal leading-none text-gray-400"
               title="Location"
            >
               Strasbourg, France
            </h6>
            <h5 class="text-lg font-semibold text-gray-900">
               <a
                  href="https://physique-ingenierie.unistra.fr/"
                  target="_blank"
               >
                  {{ t("schools.0") }}
               </a>
            </h5>
            <p class="text-base font-normal text-gray-500">
               <a
                  href="https://physique-ingenierie.unistra.fr/formations/licences/licence-sciences-pour-lingenieur/systemes-electroniques-se"
                  target="_blank"
               >
                  {{ t("degrees.0") }}
               </a>
            </p>
         </li>
         <li class="mb-10 ml-6">
            <div
               class="absolute w-3 h-3 bg-accent-600 rounded-full mt-1.5 -left-1.5 border border-white"
            />
            <h6
               class="mb-2 text-sm font-normal leading-none text-gray-700"
               title="Date"
            >
               <time>{{ t("sep") }} 2020</time>
               -
               <time>{{ t("jun") }} 2022</time>
            </h6>
            <h6
               class="mb-4 text-sm font-normal leading-none text-gray-400"
               title="Location"
            >
               Casablanca, {{ t("ma") }}
            </h6>
            <h5 class="text-lg font-semibold text-gray-900">
               <a href="http://www.est-uh2c.ac.ma/" target="_blank">
                  {{ t("schools.1") }}
               </a>
            </h5>
            <p class="text-base font-normal text-gray-500">
               <a
                  href="http://www.est-uh2c.ac.ma/formation/formation-initiale/g%C3%A9nie-%C3%A9lectrique-2/"
                  target="_blank"
               >
                  {{ t("degrees.1") }}
               </a>
            </p>
         </li>
         <li class="ml-6">
            <div
               class="absolute w-3 h-3 bg-accent-600 rounded-full mt-1.5 -left-1.5 border border-white"
            />
            <h6
               class="mb-2 text-sm font-normal leading-none text-gray-700"
               title="Date"
            >
               <time>{{ t("sep") }} 2017</time>
               -
               <time>{{ t("jul") }} 2020</time>
            </h6>
            <h6
               class="mb-4 text-sm font-normal leading-none text-gray-400"
               title="Location"
            >
               Casablanca, {{ t("ma") }}
            </h6>
            <h5 class="text-lg font-semibold text-gray-900">
               <a href="http://www.est-uh2c.ac.ma/" target="_blank">
                  {{ t("schools.2") }}
               </a>
            </h5>
            <p class="text-base font-normal text-gray-500">
               {{ t("degrees.2") }}
            </p>
         </li>
      </ol>
   </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style lang="scss"></style>
