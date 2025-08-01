<i18n lang="yaml">
en:
   aug: August
   sep: September
   jun: June
   jul: July
   apr: April
   mai: May
   jan: January
   intermittent: Intermittent Work

fr:
   aug: Août
   sep: Septembre
   jun: Juin
   jul: Juillet
   apr: Avril
   mai: Mai
   jan: Janvier
   intermittent: Travail Intermittent

ar:
   aug: غشت
   sep: شتنبر
   jun: يونيو
   jul: يوليوز
   apr: أبريل
   mai: ماي
   jan: يناير
   intermittent: عمل متقطع
</i18n>

<script setup lang="ts">
type DateItem = {
   year: number;
   month: string;
};

type WithLink = string | { text: string; link: string };

export type TimelineItem = {
   date?: {
      start: DateItem;
      end?: DateItem;
   };
   location: string;
   institution: WithLink;
   title: WithLink;
   intermittent?: boolean;
};

defineProps<{ items: TimelineItem[] }>();

const { t } = useI18n();
</script>

<template>
   <ol class="relative ltr:border-l rtl:border-r border-accent-600">
      <li v-for="item of items" class="mb-10 ltr:ml-6 rtl:mr-6">
         <div
            class="absolute w-3 h-3 bg-accent-600 rounded-full mt-1.5 ltr:-left-1.5 rtl:-right-1.5 border border-white"
         />
         <h6
            class="mb-2 text-sm font-normal leading-none text-gray-700"
            title="Date"
         >
            <template v-if="item.date">
               <time>
                  {{ t(item.date.start.month) }} {{ item.date.start.year }}
               </time>
               <time v-if="item.date.end">
                  -
                  {{ t(item.date.end.month) }} {{ item.date.end.year }}
               </time>
            </template>
            <template v-else-if="item.intermittent">
               {{ t("intermittent") }}
            </template>
         </h6>
         <h6
            class="mb-4 text-sm font-normal leading-none text-gray-400"
            title="Location"
         >
            {{ item.location }}
         </h6>
         <h5 class="text-lg font-semibold text-gray-900">
            <template v-if="typeof item.title == 'string'">
               {{ item.title }}
            </template>
            <a v-else :href="item.title.link" target="_blank">
               {{ item.title.text }}
            </a>
         </h5>
         <p class="text-base font-normal text-gray-500">
            <template v-if="typeof item.institution == 'string'">
               {{ item.institution }}
            </template>
            <a v-else :href="item.institution.link" target="_blank">
               {{ item.institution.text }}
            </a>
         </p>
      </li>
   </ol>
</template>

<style lang="scss" scoped></style>
