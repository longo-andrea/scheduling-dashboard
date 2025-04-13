import { useFacilities } from "~/queries/facilities"
import type { Facility } from "~/types/Facilities"

const STORAGE_KEY = "facility"

const facility = ref<Facility>()

export function useFacility() {
  const { data: availableFacilities } = useFacilities()
  function setFacility(facilityId: number) {
    facility.value = availableFacilities.value?.find((facility) => facility.id === facilityId)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(facility.value))
  }

  onMounted(() => {
    const storedFacility = localStorage.getItem(STORAGE_KEY)
    if (storedFacility) {
      facility.value = JSON.parse(storedFacility)
    }
  })

  return {
    availableFacilities,

    facility,
    setFacility,
  }
}
