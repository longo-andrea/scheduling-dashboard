import { CalendarDate } from "@internationalized/date"
import { addDays, subDays } from "date-fns"

export function useCalendar() {
  const targetDay = ref<CalendarDate>(new CalendarDate(2021, 3, 13))

  function slideWeek(direction: "previous" | "next") {
    let newTargetDay
    if (direction === "previous") {
      newTargetDay = subDays(new Date(targetDay.value.toString()), 7)
    } else {
      newTargetDay = addDays(new Date(targetDay.value.toString()), 7)
    }

    const year = newTargetDay.getFullYear()
    const month = newTargetDay.getMonth() + 1
    const day = newTargetDay.getDate()
    targetDay.value = new CalendarDate(year, month, day)
  }

  return {
    targetDay,
    slideWeek,
  }
}
