<script setup lang="ts">
import type { GenericAutocompletItem } from "~/types/Common"

const model = defineModel<string>()
const { items } = defineProps<{
  items: GenericAutocompletItem[]
}>()

const isPopoverOpen = ref(false)

const facilityName = computed(() => {
  const item = items.find((item) => item.id === model.value)
  return item ? item.label : "Select a facility"
})

const searchLemma = ref("")
const filteredItems = computed(() => {
  if (!searchLemma.value) return items
  return items.filter((item) => item.label.toLowerCase().includes(searchLemma.value.toLowerCase()))
})
function selectItem(item: GenericAutocompletItem) {
  model.value = item.id
  isPopoverOpen.value = false
}
</script>

<template>
  <UPopover
    v-model:open="isPopoverOpen"
    :content="{
      align: 'start',
      side: 'bottom',
    }"
  >
    <UButton>{{ facilityName }}</UButton>

    <template #content>
      <div class="flex flex-col gap-3 rounded-md bg-white p-2 shadow-lg">
        <UInput v-model="searchLemma" icon="i-lucide-search" class="w-full" />

        <div class="flex max-h-60 w-full flex-col gap-2 overflow-y-auto">
          <ul v-for="item in filteredItems" :key="item.id">
            <li
              @click="selectItem(item)"
              class="w-full rounded-md p-1 text-sm"
              :class="{ 'bg-violet-200 text-violet-900': model === item.id }"
            >
              {{ item.label }}
            </li>
          </ul>
        </div>
      </div>
    </template>
  </UPopover>
</template>
