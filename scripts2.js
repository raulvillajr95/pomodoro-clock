const mainTimer2 = document.getElementById('main-timer2');
const btnStartStop2 = document.getElementById('btn-startstop2')
const btnReset2 = document.getElementById('btn-reset2');
const increment2 = document.getElementById('increment2')
const decrement2 = document.getElementById('decrement2')

let startMin2 = 25;
let minutes2 = 25;
let seconds2 = 0;
let intervalID2;

mainTimer2.textContent = `${minutes2}:0${seconds2}`

let running2 = false;
btnStartStop2.addEventListener('click', function() {
  if (running2 == false) {
    intervalID2 = setInterval(function() {
      running2 = true;
      if (seconds2 == 0) {
        seconds2 = 60
        minutes2 -= 1
      }
      seconds2 -= 1;
      if (seconds2 == 0 && minutes2 == 0) {
        running2 = false;
        clearInterval(intervalID2);
        minutes2 = startMin2;//this needs to be modifyied. when reach zero, start where i had it, whether incremented or decremented
        seconds2 = 0;
        mainTimer2.textContent = seconds2;
      }
      mainTimer2.textContent = `${minutes2}:${seconds2}`;
      console.log(seconds2);
      console.log(running2);
      console.log(minutes2)
    }, 100);
  } else {
    running2 = false;
    clearInterval(intervalID2);
  };
})
btnReset2.addEventListener('click', function() {
  running2 = false;
  clearInterval(intervalID2);
  minutes2 = 25; startMin2 = 25;// do not change cause default is 5 minutes
  seconds2 = 0;
  mainTimer2.textContent = `${minutes2}:${seconds2}`;
})
increment2.addEventListener('click', function() {
  if (minutes2 < 60 && startMin2 < 60) {
    minutes2 += 1
    startMin2 += 1
  }
  mainTimer2.textContent = `${minutes2}:${seconds2}`
})
decrement2.addEventListener('click', function() {
  if (startMin2 > 1 && minutes2 > 1) {
    minutes2 -= 1
    startMin2 -= 1
  }
  mainTimer2.textContent = `${minutes2}:${seconds2}`
})