<script setup lang="ts">
import { differenceInDays, format } from "date-fns"
import { useBooking } from "~/queries/booking"
import type { Range } from "~/types/Common"

const { params } = useRoute()
const { id } = params as { id: string }

const { setFacility, setBooking, data } = useBooking()
const { facility } = useFacility()
watch(facility, (newValue) => {
  if (newValue && id) {
    setFacility(newValue)
    setBooking(id)
  }
})

const booking = computed(() => data.value)

function daysDifference(dateRange: Range<Date>) {
  return differenceInDays(dateRange.to, dateRange.from)
}
</script>

<template>
  <div class="flex h-full flex-col gap-4 rounded-md bg-white p-4" v-if="booking">
    <UCollapsible class="flex cursor-pointer flex-col gap-1 rounded-md bg-violet-100 p-2 hover:bg-violet-200">
      <div class="group flex items-center justify-between">
        <p class="text-lg font-medium text-violet-700">Customer Information</p>

        <Icon name="i-carbon:chevron-down" class="transition group-data-[state=open]:rotate-180" />
      </div>
      <template #content>
        <p class="flex items-center gap-2 rounded-md bg-white p-2 text-sm font-medium text-gray-700">
          <UAvatar :alt="booking.customer" size="sm" as="span" />

          <span>{{ booking.customer }}</span>
        </p>
      </template>
    </UCollapsible>

    <hr class="border-slate-200" />

    <UCollapsible class="flex cursor-pointer flex-col gap-1 rounded-md bg-violet-100 p-2 hover:bg-violet-200">
      <div class="group flex items-center justify-between">
        <p class="text-lg font-medium text-violet-700">Rental Information</p>

        <Icon name="i-carbon:chevron-down" class="transition group-data-[state=open]:rotate-180" />
      </div>

      <template #content>
        <div class="flex flex-col gap-2 rounded-md bg-white p-2">
          <p class="flex flex-col gap-1 text-sm font-medium text-gray-700">
            <span class="font-bold">Pickup/Return Station </span>

            <span> {{ facility?.name }} </span>
          </p>

          <p class="flex flex-col gap-1 text-sm font-medium text-gray-700">
            <span class="font-bold">Rental duration </span>

            <span>{{ daysDifference(booking.dateRange) }} days</span>
          </p>

          <p class="flex flex-col gap-1 text-sm font-medium text-gray-700">
            <span class="font-bold">Start date </span>

            <span>{{ format(booking.dateRange.from, "EEEE dd MMMM yyyy") }} </span>
          </p>

          <p class="flex flex-col gap-1 text-sm font-medium text-gray-700">
            <span class="font-bold">End date </span>

            <span>{{ format(booking.dateRange.to, "EEEE dd MMMM yyyy") }} </span>
          </p>
        </div>
      </template>
    </UCollapsible>
  </div>
</template>
