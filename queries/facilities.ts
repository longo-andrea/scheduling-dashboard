import { useQuery } from "@pinia/colada"
import type { Facility } from "~/types/Facilities"

export function useFacilities() {
  const query = useQuery<Facility[]>({
    key: () => ["facilities"],
    query: () =>
      fetch(`https://605c94c36d85de00170da8b4.mockapi.io/stations`).then(async (res) => {
        const result = await res.json()
        return result
          .filter((res: any) => res.bookings.length > 0)
          .map((res: any) => ({ id: res.id, name: res.name })) as Facility[]
      }),
  })

  return {
    ...query,
  }
}
