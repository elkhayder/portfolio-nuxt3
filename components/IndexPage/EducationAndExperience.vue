<i18n lang="yaml">
en:
   since: Since
   starting: Starting from
   until: until
   stage: Internship
   alternance: Apprenticeship
   education: Education
   experience: Experience
   selfEmployed: Self-Employed
   international: International
   schools:
      - Centrale Nantes
      - Faculty of Physics and Engineering
      - Superior School of Technology
      - Ibn Mandour High School
   degrees:
      - Engineering Degree in Embedded Systems
      - Bachelor in Electronic Systems
      - University diploma of technology (DUT) in Electronics and Industrial IT
      - High School Diploma in Electrical Science and Technology
   experiences:
      - Real-Time Software Engineer, IA/ML
      - Automation Engineer
      - Full Stack WEB Developer
      - Computer Repair Specialist

fr:
   since: Depuis
   starting: De
   until: à
   stage: Stage
   alternance: Alternance
   education: Parcours Scolaire
   schools:
      - Centrale Nantes
      - Faculté de physique et ingenierie
      - Ecole supérieure de Technologie
      - Lycée Qualifiant Ibn Mandour
   degrees:
      - Ingénierie des Systèmes Embarqués Communicants
      - Licence en Systèmes Electroniques
      - Diplôme Universitaire Technique (DUT) en Electronique et Informatique Industrielle
      - Baccalauréat en Science Technique Electrique
   experiences:
      - Ingénieur logiciel, Informatique temps réel, IA/ML
      - Automaticien
      - Développeur WEB Full-Stack
      - Spécialiste des réparations informatiques

ar:
   ma: المغرب
   since: منذ
   starting: ابتداءً من
   until: حتى
   stage: متدرب
   alternance: تدريب مزدوج (تعاقد تدريبي)
   education: المسار الدراسي
   experience: الخبرة العملية
   selfEmployed: العمل الحر
   international: دولي
   schools:
      - Ecole Centrale de Nantes
      - كلية الفيزياء والهندسة
      - المدرسة العليا للتكنولوجيا
      - ثانوية ابن منظور
   degrees:
      - درجة الهندسة في الأنظمة المضمنة
      - بكالوريوس في الأنظمة الإلكترونية
      - دبلوم جامعي تكنولوجي (DUT) في الإلكترونيات وتقنية المعلومات الصناعية
      - شهادة البكالوريا في العلوم والتكنولوجيا الكهربائية
   experiences:
      - مهندس برمجيات في الوقت الحقيقي، الذكاء الاصطناعي/تعلم الآلة
      - مهندس التشغيل الآلي
      - مطور ويب
      - متخصص في إصلاح الحواسيب
</i18n>
<template>
   <span class="anchor" id="education" />
   <section>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div>
            <h3 class="subtitle">{{ t("education") }}</h3>
            <Timeline :items="Education" />
         </div>
         <div>
            <h3 class="subtitle">{{ t("experience") }}</h3>
            <Timeline :items="Experience" />
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
import Timeline, { TimelineItem } from "../Timeline.vue";

const { t } = useI18n();

const Education: TimelineItem[] = [
   {
      date: {
         start: { month: "sep", year: 2023 },
         end: { month: "sep", year: 2026 },
      },
      location: city_country("nantes", "fr"),
      institution: {
         link: "https://www.ec-nantes.fr/",
         text: t("schools.0"),
      },
      title: {
         link: "https://www.ec-nantes.fr/formation/ingenieur-de-specialite/systemes-embarques-communicants",
         text: t("degrees.0"),
      },
   },
   {
      date: {
         start: { month: "sep", year: 2022 },
         end: { month: "jun", year: 2023 },
      },
      location: city_country("strasbourg", "fr"),
      institution: {
         link: "https://physique-ingenierie.unistra.fr/",
         text: t("schools.1"),
      },
      title: {
         link: "https://physique-ingenierie.unistra.fr/formations/licences/licence-sciences-pour-lingenieur/systemes-electroniques-se",
         text: t("degrees.1"),
      },
   },
   {
      date: {
         start: { month: "sep", year: 2020 },
         end: { month: "jul", year: 2022 },
      },
      location: city_country("casablanca", "ma"),
      institution: {
         link: "http://www.est-uh2c.ac.ma/",
         text: t("schools.2"),
      },
      title: {
         link: "http://www.est-uh2c.ac.ma/formation/formation-initiale/g%C3%A9nie-%C3%A9lectrique-2",
         text: t("degrees.2"),
      },
   },
   {
      date: {
         start: { month: "sep", year: 2017 },
         end: { month: "jul", year: 2020 },
      },
      location: city_country("casablanca", "ma"),
      institution: t("schools.3"),
      title: t("degrees.3"),
   },
];

const Experience: TimelineItem[] = [
   {
      date: {
         start: { month: "sep", year: 2023 },
         end: { month: "sep", year: 2026 },
      },
      location: "Brest, France",
      institution: {
         text: "Alcatel-Lucent Enterprise",
         link: "https://www.al-enterprise.com/",
      },
      title: t("experiences.0") + " - " + t("alternance"),
   },
   {
      date: {
         start: { month: "apr", year: 2022 },
         end: { month: "jun", year: 2022 },
      },
      location: t("cities.ma.casablanca") + ", " + t("ma"),
      institution: {
         text: "Competence Center On Automation",
         link: "https://competence-automation.ma/",
      },
      title: t("experiences.1") + " - " + t("stage"),
   },
   // {
   //    date: {
   //       start: { month: "mai", year: 2021 },
   //       end: { month: "jan", year: 2022 },
   //    },
   //    location: t("international"),
   //    institution: t("selfEmployed"),
   //    title: t("experiences.2"), //+ " - Freelance",
   // },
   {
      date: {
         start: { month: "jul", year: 2017 },
      },
      location: t("cities.ma.casablanca") + ", " + t("ma"),
      institution: "Technomark Maroc",
      title: t("experiences.3") + " - " + t("stage"),
   },
];
</script>

<style lang="scss"></style>
