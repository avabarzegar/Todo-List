import { useState } from 'react';
import Weekdays from './Weekdays';
import DaysOfMonth from './DaysOfMonth';
import getNumDaysInMonth from './GetNumDays';

function Calendar() {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const handlePrevMonth = () => {
    setDate(new Date(year, month - 2, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(year, month, 1));
  };

  const handlePrevYear = () => {
    setDate(new Date(year - 1, month - 1, 1));
  };

  const handleNextYear = () => {
    setDate(new Date(year + 1, month - 1, 1));
  };

  const numDays = getNumDaysInMonth(year, month);
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  const days = Array.from({ length: firstDayOfMonth }, (_, i) => null)
    .concat(Array.from({ length: numDays }, (_, i) => i + 1));

  return (
    <div>
      <h1>{`${year}-${month.toString().padStart(2, '0')}`}</h1>
      <div>
        <button onClick={handlePrevYear}>Prev Year</button>
        <button onClick={handlePrevMonth}>Prev Month</button>
        <button onClick={handleNextMonth}>Next Month</button>
        <button onClick={handleNextYear}>Next Year</button>
      </div>
      <Weekdays />
      <DaysOfMonth year={year} month={month} days={days} />
    </div>
  );
}

export default Calendar;