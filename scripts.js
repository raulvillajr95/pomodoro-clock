const mainTimer = document.getElementById('main-timer');
const btnStartStop = document.getElementById('btn-startstop')
const btnReset = document.getElementById('btn-reset');
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')

let startMin = 5;
let minutes = 5;
let seconds = 0;
let intervalID;

mainTimer.textContent = `0${minutes}:0${seconds}`

let running = false;
btnStartStop.addEventListener('click', function() {
  if (running == false) {
    intervalID = setInterval(function() {
      running = true;
      if (seconds == 0) {
        seconds = 60
        minutes -= 1
      }
      seconds -= 1;
      if (seconds == 0 && minutes == 0) {
        running = false;
        clearInterval(intervalID);
        minutes = startMin;//this needs to be modifyied. when reach zero, start where i had it, whether incremented or decremented
        seconds = 0;
        if (minutes < 10) {
          mainTimer.textContent = `0${minutes}:0${seconds}`
        } else {
          mainTimer.textContent = `${minutes}:0${seconds}`
        }
      } else {
        // When actually running
        if (minutes < 10 && seconds < 10) {
          mainTimer.textContent = `0${minutes}:0${seconds}`;
        } else if (minutes >= 10 && seconds < 10) {
          mainTimer.textContent = `${minutes}:0${seconds}`;
        } else if (minutes < 10 && seconds >= 10) {
          mainTimer.textContent = `0${minutes}:${seconds}`;
        } else {
          mainTimer.textContent = `${minutes}:${seconds}`;
        }
      }
      console.log(seconds);
      console.log(running);
      console.log(minutes)
    }, 100);
  } else {
    running = false;
    clearInterval(intervalID);
  };
})
btnReset.addEventListener('click', function() {
  running = false;
  clearInterval(intervalID);
  minutes = 5; startMin = 5;// do not change cause default is 5 minutes
  seconds = 0;
  mainTimer.textContent = `0${minutes}:0${seconds}`;
})
increment.addEventListener('click', function() {
  if (minutes < 60 && startMin < 60) {
    minutes += 1
    startMin += 1
  }
  if (minutes < 10) {
    mainTimer.textContent = `0${minutes}:0${seconds}`
  } else {
    mainTimer.textContent = `${minutes}:0${seconds}`
  }
})
decrement.addEventListener('click', function() {
  if (startMin > 1 && minutes > 1) {
    minutes -= 1
    startMin -= 1
  }
  if (minutes < 10) {
    mainTimer.textContent = `0${minutes}:0${seconds}`
  } else {
    mainTimer.textContent = `${minutes}:0${seconds}`
  }
})





/*
Creating a super super basic timer

ideas
-combine, one display but 2 separate timers??
  only 1 start/stop button
  only 1 reset button
  multiple inc/dec buttons(2 of each)
-add it back to a single file?
-idk tbh, smallass steps
-combine them????
*/