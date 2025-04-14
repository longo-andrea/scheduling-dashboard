<script setup lang="ts">
import { DashboardSchedules } from "#components"
import { CalendarDate } from "@internationalized/date"
import { addDays, format, isSameDay } from "date-fns"
import { useBookings } from "~/queries/bookings"
import DatePicker from "../common/DatePicker.vue"
import type { Facility } from "~/types/Facilities"

const { facility } = defineProps<{
  facility?: Facility
}>()

// Calendar handling
const selectedDay = ref(new Date())
function onSelectDay(day: Date) {
  selectedDay.value = day
}

const { targetDay, slideWeek } = useCalendar()
watch(
  targetDay,
  (newValue) => {
    selectedDay.value = new Date(newValue.toString())
  },
  { immediate: true },
)

const daysToShow = computed(() =>
  Array.from({ length: 7 }).map((_, index) => addDays(new Date(targetDay.value.toString()), index)),
)

// Bookings handling
const { bookingsByDate, setFacility } = useBookings()
watch(
  () => facility,
  (newValue) => {
    if (newValue) {
      setFacility(newValue)
    }
  },
  { immediate: true },
)

// Styles & Formatting
const computedDayClasses = computed(() => (day: Date) => {
  const isDaySelected = isSameDay(day, selectedDay.value)

  if (isDaySelected) {
    return {
      container: "bg-violet-200 bg-opacity-50 text-violet-900",
      day: "text-violet-900",
      date: "text-violet-400",
    }
  } else {
    return {
      container: "bg-transparent hover:bg-violet-50",
      day: "text-slate-900",
      date: "text-slate-400",
    }
  }
})
</script>

<template>
  <div
    class="grid h-full grid-cols-7 grid-rows-[auto_auto_1fr] gap-2 rounded-md bg-white p-2 lg:grid-cols-11"
    v-if="facility"
  >
    <div class="col-span-7 grid grid-cols-[auto_1fr_auto] gap-2 lg:hidden">
      <UButton icon="i-carbon:arrow-left" size="md" variant="ghost" @click="slideWeek('previous')" />

      <DatePicker v-model="targetDay" />

      <UButton icon="i-carbon:arrow-right" size="md" variant="ghost" @click="slideWeek('next')" />
    </div>

    <DatePicker v-model="targetDay" class="col-span-2 hidden lg:block" />

    <UButton
      icon="i-carbon:arrow-left"
      class="hidden lg:block"
      size="md"
      variant="ghost"
      @click="slideWeek('previous')"
    />

    <div
      v-for="(day, index) in daysToShow"
      :key="index"
      class="flex cursor-pointer flex-col items-center justify-center rounded-md py-3 transition-colors duration-250"
      :class="computedDayClasses(day).container"
      @click="onSelectDay(day)"
    >
      <p class="text-lg font-semibold" :class="computedDayClasses(day).day">
        {{ format(day, "dd") }}
      </p>

      <p class="text-sm font-light" :class="computedDayClasses(day).date">
        {{ format(day, "EE") }}
      </p>
    </div>

    <UButton icon="i-carbon:arrow-right" class="hidden lg:block" size="md" variant="ghost" @click="slideWeek('next')" />

    <section class="col-span-7 mt-2 grid grid-rows-[auto_1fr] gap-2 overflow-hidden lg:col-span-11 lg:row-span-2">
      <h2 class="text-lg font-medium text-slate-900">Schedule of the day</h2>

      <DashboardSchedules :bookings="bookingsByDate(selectedDay)" :day="selectedDay" />
    </section>
  </div>
  <div v-else class="flex h-full flex-col items-center justify-center rounded-md bg-white font-semibold text-slate-400">
    Select a facility to see the schedule
  </div>
</template>
