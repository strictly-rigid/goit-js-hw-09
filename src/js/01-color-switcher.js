const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
}

let intervalId = null;

refs.btnStart.addEventListener('click', onColorStart);
refs.btnStop.addEventListener('click', onColorStop);

// getting random color for body by condition

function onColorStart(event) {
    if (intervalId) {
        refs.btnStart.removeEventListener('click', onColorStart);
    }
    intervalId = setInterval(setBodyColor, 1000);
 
    function setBodyColor() {
        refs.body.style.backgroundColor = getRandomHexColor();
    }
    
}

// halting the color function 

function onColorStop(event) {
    clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


