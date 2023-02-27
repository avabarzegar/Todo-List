import React from "react";
import { Link } from "react-router-dom";

function DaysOfMonth({ year, month, days }) {
  const dateString = `${year}-${month.toString().padStart(2, "0")}`;

  return (
    <div>
      {days.map((day, i) => (
        <Link key={i} to={`/TodoList/${dateString}-${day}`}>
          {day}
        </Link>
      ))}
    </div>
  );
}

export default DaysOfMonth;
