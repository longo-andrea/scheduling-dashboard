import { format, type FormatDateOptions } from "date-fns"
import type { Range } from "~/types/Common"

export function formatDateRange(dateRange: Range<Date>, formatString: string = "MMM dd EEE yyyy") {
  const { from, to } = dateRange

  return `${format(from, formatString)} → ${format(to, formatString)}`
}

export function formatHour(date: Date, formatString: string = "HH:mm") {
  return format(date, formatString)
}
