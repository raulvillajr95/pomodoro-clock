const mainTimer = document.getElementById('main-timer');
const btnStartStop = document.getElementById('btn-startstop')
const btnReset = document.getElementById('btn-reset');

let minutes = 0;
let seconds = 0;
let intervalID;

let running = false;
btnStartStop.addEventListener('click', function() {
  if (running == false) {
    intervalID = setInterval(function() {
      running = true;
      seconds += 1;
      mainTimer.textContent = seconds;
      console.log(seconds);
      console.log(running);
    }, 1000);
  } else {
    running = false;
    clearInterval(intervalID);
  };
})

btnReset.addEventListener('click', function() {
  running = false;
  clearInterval(intervalID);
  seconds = 0;
  mainTimer.textContent = seconds;
})



/*
Creating a super super basic timer

ideas
-mins and seconds
  just up and up
  no 00:00
  only 0:0
-countdown?? manually inputed on js
-instead of manual input, use session
-restart after each session
-duplicate timer, 2 timers on each page
-idk tbh, smallass steps
-combine them????
-official 00:00 timing
*/