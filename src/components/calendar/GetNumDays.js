function getNumDaysInMonth(year, month) {
  // Create a new Date object for the first day of the given month
  const firstDayOfMonth = new Date(year, month - 1, 1);

  // Create a new Date object for the first day of the next month
  const firstDayOfNextMonth = new Date(year, month, 1);

  // Calculate the difference between the two dates in milliseconds
  const diffInMilliseconds = firstDayOfNextMonth - firstDayOfMonth;

  // Convert the difference to days
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  // Return the number of days in the month
  return diffInDays;
}

export default getNumDaysInMonth;
