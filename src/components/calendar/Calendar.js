import React from "react";
import CalendarDay from "./CalendarDay";
import getNumDaysInMonth from "./GetNumDays";


function Calendar({ year, month }) {
    // Calculate the number of days in the month
    const numDays = getNumDaysInMonth(year, month);
  
    // Create an array of the days in the month
    const days = Array.from({ length: numDays }, (_, i) => i + 1);
  
    return (
      <div>
        {days.map(day => (
          <CalendarDay key={day} day={day} month={month} year={year} />
        ))}
      </div>
    );
  }

  export default Calendar;