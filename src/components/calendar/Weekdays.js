function Weekday({ day }) {
  return <div>{day}</div>;
}

function Weekdays() {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      {weekdays.map((day) => (
        <Weekday key={day} day={day} />
      ))}
    </div>
  );
}

export default Weekdays;
