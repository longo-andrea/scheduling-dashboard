<script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone } from "@internationalized/date"

const df = new DateFormatter("en-US", {
  dateStyle: "medium",
})

const modelValue = defineModel<CalendarDate>()
</script>

<template>
  <UPopover>
    <UButton
      color="neutral"
      variant="subtle"
      icon="i-lucide-calendar"
      :label="modelValue ? df.format(modelValue.toDate(getLocalTimeZone())) : 'Select a date'"
      :ui="{
        label: 'lg:block',
      }"
    >
    </UButton>

    <template #content>
      <UCalendar v-model="modelValue" class="p-2" />
    </template>
  </UPopover>
</template>
