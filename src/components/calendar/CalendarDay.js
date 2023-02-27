import React from 'react';
import { Link } from 'react-router-dom';

export default function CalendarDay({ day, month, year }) {
  // Calculate the date string in the format "YYYY-MM-DD"
  const dateString = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  return (
    <div>
      <Link to={`/pages/${dateString}`}>
        {day}
      </Link>
    </div>
  );
}
