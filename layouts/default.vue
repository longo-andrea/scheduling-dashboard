<script setup lang="ts">
import type { GenericAutocompletItem } from "~/types/Common"

const { back } = useRouter()
const route = useRoute()
const isDetailPage = computed(() => {
  return route.path.includes("booking")
})

const { facility, setFacility, availableFacilities } = useFacility()
const remappedAvailableFacilities = computed(() => {
  return (
    (availableFacilities.value?.map((facility) => ({
      id: facility.id,
      label: facility.name,
    })) as GenericAutocompletItem[]) ?? []
  )
})
const selectedFacility = computed({
  get() {
    return facility.value?.id.toString()
  },
  set(newFacility: number) {
    setFacility(newFacility)
  },
})
</script>

<template>
  <div class="grid h-dvh w-full grid-rows-[60px_auto] gap-2 bg-slate-100 p-2">
    <header class="flex items-center gap-4 rounded-lg bg-slate-50 p-4 shadow-xl">
      <div v-if="isDetailPage" class="flex items-center gap-2">
        <UButton icon="i-carbon:arrow-left" size="md" variant="solid" @click="back" />

        <h1 class="font-semibold text-violet-900">Booking detail</h1>
      </div>

      <CommonAutocomplete
        v-else
        :items="remappedAvailableFacilities"
        v-model="selectedFacility"
        class="max-w-[640px]"
      />
    </header>

    <main class="overflow-hidden">
      <slot></slot>
    </main>
  </div>
</template>
