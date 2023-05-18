const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
}

console.log(refs.btnStart);

refs.btnStart.addEventListener('click', onColorChange);

function onColorChange(event) {
    const intervalId = setInterval(setBodyColor, 1000);
    function setBodyColor() {
        refs.body.style.backgroundColor = getRandomHexColor();
    }
    
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
