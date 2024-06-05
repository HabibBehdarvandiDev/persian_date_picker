"use client";

import { DatePicker, CalendarProvider } from "zaman";

const Calendar = () => {
  return (
    <div className="bg-green-500">
      <CalendarProvider>
        <DatePicker onChange={(e) => console.log(e)} />
      </CalendarProvider>
    </div>
  );
};

export default Calendar;
