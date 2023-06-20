function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const INTERVAL_TIME = 1000;
let intervalID = 'null';

  
const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]')
}
console.log(refs.stop);

refs.start.addEventListener("click", onClick);
refs.stop.addEventListener("click",onStopBtnClick)


function onClick() {
  refs.start.setAttribute('disabled', true);
  intervalID= setInterval(() => {
      colorChanger();
      
  }, INTERVAL_TIME) 
    console.log(intervalID)
}

function onStopBtnClick() {
    console.log(intervalID)
    clearInterval(intervalID);
    refs.start.removeAttribute('disabled')
}

function colorChanger() {
    let randomColor = getRandomHexColor()
   
        refs.body.style.backgroundColor = randomColor
}