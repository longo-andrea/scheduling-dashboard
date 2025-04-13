import type { Range } from "./Common"

export type Booking = {
  id: string
  customer: string
  dateRange: Range<Date>
}
