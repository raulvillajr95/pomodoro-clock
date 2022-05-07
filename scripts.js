const mainTimer = document.getElementById('main-timer');
const btnStartStop = document.getElementById('btn-startstop');
const btnReset = document.getElementById('btn-reset');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

let startMin = 5;
let minutes = 5;
let seconds = 0;
let intervalID;

mainTimer.textContent = `0${minutes}:0${seconds}`;

// Outer function declaration
let timer = () => {};

let running = false;
btnStartStop.addEventListener('click', timer = () => {
  if (running == false) {
    intervalID = setInterval(function() {
      running = true;
      if (seconds == 0) {
        seconds = 60;
        minutes -= 1;
      };
      seconds -= 1;
      // When timer runs out(TRO)
      if (seconds == 0 && minutes == 0) {
        running = false;
        clearInterval(intervalID);
        minutes = startMin;
        seconds = 0;
        if (minutes < 10) {
          mainTimer.textContent = `0${minutes}:0${seconds}`;
        } else {
          mainTimer.textContent = `${minutes}:0${seconds}`;
        };
        // Momentarily switched it to timer3() to try it with scripts3.js
        //timer2()
        timer3()
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
        };
      };
      console.log(seconds);
      console.log(running);
      console.log(minutes);
    }, 100);
  } else {
    // Add a stop to 2nd timer
    running = false;
    clearInterval(intervalID);
  };
});
// Naming the reset function
let reset = () => {};
btnReset.addEventListener('click', reset = () => {
  running = false;
  clearInterval(intervalID);
  minutes = 5; startMin = 5;// do not change cause default is 5 minutes
  seconds = 0;
  mainTimer.textContent = `0${minutes}:0${seconds}`;
})
increment.addEventListener('click', function() {
  if (minutes < 60 && startMin < 60) {
    minutes += 1;
    startMin += 1;
  }
  if (minutes < 10) {
    mainTimer.textContent = `0${minutes}:0${seconds}`
  } else {
    mainTimer.textContent = `${minutes}:0${seconds}`
  };
})
decrement.addEventListener('click', function() {
  if (startMin > 1 && minutes > 1) {
    minutes -= 1;
    startMin -= 1;
  };
  if (minutes < 10) {
    mainTimer.textContent = `0${minutes}:0${seconds}`
  } else {
    mainTimer.textContent = `${minutes}:0${seconds}`
  };
});





/*
Creating a super super basic timer

ideas
-remove unused reset buttons
-within third display, show the pomodoros simultaneously
  display only the clocks that are running
  pretty much just start putting the pieces together
-one the first 2 timers, only show the minute goal
  the timers will only run on the third one
-combine, one display but 2 separate timers??
  each reset button resets for both
  constraint it to not let it start if it's running
  only 1 start/stop button
  only 1 reset button
  multiple inc/dec buttons(2 of each)
-add it back to a single file?
-idk tbh, smallass steps
-combine them????
*/