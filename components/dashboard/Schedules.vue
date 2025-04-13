<script setup lang="ts">
import { UAvatar } from "#components"
import { isSameDay } from "date-fns"
import type { Booking } from "~/types/Bookings"

const { bookings, day } = defineProps<{
  bookings: Booking[]
  day: Date
}>()

const hasBookings = computed(() => bookings?.length)

function isAReturn(dateRange: { from: Date; to: Date }) {
  return isSameDay(day, dateRange.to)
}

function onShowScheduleDetail(id: string) {
  navigateTo(`/booking/${id}`)
}
</script>

<template>
  <ul class="flex h-full flex-col gap-4 overflow-y-auto">
    <li
      v-for="booking in bookings"
      :key="booking.id"
      class="flex cursor-pointer flex-col gap-4 rounded-md bg-violet-200 p-4 hover:bg-violet-300 lg:grid lg:grid-cols-3 lg:items-center lg:gap-14"
      @click="onShowScheduleDetail(booking.id)"
    >
      <h3
        v-if="isAReturn(booking.dateRange)"
        class="text-violet-900 lg:flex lg:h-full lg:items-center lg:gap-1 lg:border-r lg:border-violet-600 lg:px-4"
      >
        <span class="font-semibold"> Return </span>
        of a Van at
        <span class="rounded-md bg-violet-800 p-1 font-semibold text-white">{{
          formatHour(booking.dateRange.to)
        }}</span>
      </h3>
      <h3
        v-else
        class="text-violet-900 lg:flex lg:h-full lg:items-center lg:gap-1 lg:border-r lg:border-violet-600 lg:px-4"
      >
        <span class="font-semibold"> Pickup </span>
        of a Van at
        <span class="rounded-md bg-violet-800 p-1 font-semibold text-white">{{
          formatHour(booking.dateRange.from)
        }}</span>
      </h3>

      <hr class="border-violet-400 lg:hidden" />

      <section class="flex flex-col gap-1 lg:border-r lg:border-violet-600">
        <p class="text-sm font-medium text-violet-900">Customer</p>
        <p class="flex items-center gap-2 text-sm font-medium text-violet-900">
          <UAvatar :alt="booking.customer" size="sm" as="span" />

          <span>{{ booking.customer }}</span>
        </p>
      </section>

      <section class="flex flex-col gap-1">
        <p class="text-sm font-medium text-violet-900">Rental Duration</p>
        <p class="text-xs text-violet-900">{{ formatDateRange(booking.dateRange) }}</p>
      </section>
    </li>
    <li
      v-if="!hasBookings"
      class="flex h-full w-full flex-col items-center justify-center rounded-md bg-slate-50 font-semibold text-slate-400"
    >
      No Pickups/Returns scheduled for this day
    </li>
  </ul>
</template>
