import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import convertMs from "./modules/timeConverter";

const refs = {
    
    input: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
}
const refsTimeEl = {
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
}

refs.btnStart.disabled = true;


// options for flatpickr function
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  // function that allows to choose a date and adds eventListener to the button
  onClose(selectedDates) {
      let selectedDate = selectedDates[0];
      const currentTime = new Date();
     
        if (selectedDate < currentTime) {
      window.alert("Please choose a date in the future");
        } else {
          refs.btnStart.disabled = false;
             }
  },
};

// initializing flatpickr
const fp = flatpickr(refs.input, options);  



// adding 0 if a number is single-digit
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


// function formatting time and setting countdown

 refs.btnStart.addEventListener('click', () => {
    startCountdown(selectedDate, refsTimeEl);
    refs.btnStart.disabled = true;
    fp.clear();
        })

function startCountdown(selectedDate, refsTimeEl) {
  refs.btnStart.disabled = true;
  const {days, hours, minutes, seconds} = refsTimeEl;  
  const countdownInterval = setInterval(() => {
    const timeRemain = selectedDate.getTime() - Date.now();
    if (timeRemain <= 0) {
        clearInterval(countdownInterval);
        days.textContent = padNumber(0, 2);
        hours.textContent = padNumber(0, 2);
        minutes.textContent = padNumber(0, 2);
        seconds.textContent = padNumber(0, 2);
    } else {
      const { daysMS, hoursMS, minutesMS, secondsMS } = convertMs(timeRemain);
        days.textContent = addLeadingZero(daysMS, 2);
        hours.textContent = addLeadingZero(hoursMS, 2);
        minutes.textContent = addLeadingZero(minutesMS, 2);
        seconds.textContent = addLeadingZero(secondsMS, 2);
             }
  }, 1000);
  
}

