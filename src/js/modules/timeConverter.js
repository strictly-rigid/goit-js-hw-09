function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const daysMS = Math.floor(ms / day);
  // Remaining hours
  const hoursMS = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutesMS = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const secondsMS = Math.floor((((ms % day) % hour) % minute) / second);

  return { daysMS, hoursMS, minutesMS, secondsMS };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

export default convertMs;