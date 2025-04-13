import { useQuery } from "@pinia/colada"
import { isSameDay } from "date-fns"
import type { Booking } from "~/types/Bookings"
import type { Facility } from "~/types/Facilities"

export function useBookings() {
  const facilityId = ref<string>("")
  function setFacility(newFacility: Facility) {
    facilityId.value = newFacility.id
  }

  const query = useQuery<Booking[]>({
    key: () => ["bookings", facilityId.value],
    query: () =>
      fetch(`https://605c94c36d85de00170da8b4.mockapi.io/stations`).then(async (res) => {
        const result = await res.json()
        const filteredResult = result.find((res: any) => res.id === facilityId.value)?.bookings ?? []
        return filteredResult
          .map((fr: any) => ({
            id: fr.id,
            customer: fr.customerName,
            dateRange: {
              from: new Date(fr.startDate),
              to: new Date(fr.endDate),
            },
          }))
          .sort((booking1: any, booking2: any) => {
            return booking1.dateRange.from.getTime() - booking2.dateRange.from.getTime()
          }) as Booking[]
      }),
  })

  const bookingsByDate = computed(() => (date: Date) => {
    const { data } = query

    if (!data.value) {
      return []
    }

    return data.value.filter((booking) => {
      return isSameDay(booking.dateRange.from, date) || isSameDay(booking.dateRange.to, date)
    })
  })

  function getBooking(id: string) {
    if (!query.data.value) {
      return null
    }

    const booking = query.data.value.find((booking) => booking.id === id)
    return booking
  }

  return {
    setFacility,
    ...query,

    bookingsByDate,

    getBooking,
  }
}
