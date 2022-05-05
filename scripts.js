const mainTimer = document.getElementById('main-timer');
const btnStartStop = document.getElementById('btn-startstop')
const btnReset = document.getElementById('btn-reset');

let minutes = 5;
let seconds = 0;
let intervalID;

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

        minutes = 5;

        seconds = 0;
        mainTimer.textContent = seconds;
      }

      mainTimer.textContent = `${minutes}:${seconds}`;
      console.log(seconds);
      console.log(running);
      console.log(minutes)
    }, 1000);
  } else {
    running = false;
    clearInterval(intervalID);
  };
})

btnReset.addEventListener('click', function() {
  running = false;
  clearInterval(intervalID);

  minutes = 5;

  seconds = 0;
  mainTimer.textContent = seconds;
})



/*
Creating a super super basic timer

ideas
-instead of manual input, use session
-restart after each session
-duplicate timer, 2 timers on each page
-idk tbh, smallass steps
-combine them????
-official 00:00 timing
*/