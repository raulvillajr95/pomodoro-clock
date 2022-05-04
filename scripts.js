const mainTimer = document.getElementById('main-timer');
const btnStart = document.getElementById('btn-start');
const btnPause = document.getElementById('btn-pause');
const btnReset = document.getElementById('btn-reset');

let seconds = 0;
let intervalID;

let running = false;
btnStart.addEventListener('click', function() {
  if (running == false) {
    intervalID = setInterval(function() {
      running = true;
      seconds += 1;
      mainTimer.textContent = seconds;
      console.log(seconds);
      console.log(running);
    }, 1000);
  };
});

btnPause.addEventListener('click', function() {
  running = false;
  clearInterval(intervalID);
});

btnReset.addEventListener('click', function() {
  running = false;
  clearInterval(intervalID);
  seconds = 0;
  mainTimer.textContent = seconds;
})



/*
Creating a super super basic timer

ideas
-join start/pause into 1 button
-make sure everything is aligned well
-mins and seconds
-countdown?? manually inputed on js
-instead of manual input, use session
-restart after each session
-duplicate timer, 2 timers on each page
-idk tbh, smallass steps
-combine them????
-official 00:00 timing
*/