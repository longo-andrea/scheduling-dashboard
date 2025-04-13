import { useQuery } from "@pinia/colada"
import type { Booking } from "~/types/Bookings"
import type { Facility } from "~/types/Facilities"

export function useBooking() {
  const facilityId = ref<string>("")
  function setFacility(newFacility: Facility) {
    facilityId.value = newFacility.id
  }
  const bookingId = ref<string>("")
  function setBooking(newBookingId: string) {
    bookingId.value = newBookingId
  }

  const query = useQuery<Booking>({
    key: () => ["booking", bookingId.value],
    query: async () => {
      if (!facilityId.value || !bookingId.value) {
        throw new Error("Facility ID and Booking ID are required")
      }

      return fetch(
        `https://605c94c36d85de00170da8b4.mockapi.io/stations/${facilityId.value}/bookings/${bookingId.value}`,
      ).then(async (res) => {
        const result = await res.json()

        return {
          id: result.id,
          customer: result.customerName,
          dateRange: {
            from: new Date(result.startDate),
            to: new Date(result.endDate),
          },
        } as Booking
      })
    },
  })

  return {
    setFacility,
    setBooking,
    ...query,
  }
}
