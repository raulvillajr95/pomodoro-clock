const mainTimer = document.getElementById('main-timer');
const btnStartStop = document.getElementById('btn-startstop');
const btnReset = document.getElementById('btn-reset');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

let startMin = 5;
let minutes = 5;
let seconds = 0;
let intervalID;

// Removing 00:00 format from top 2 timers
mainTimer.textContent = `${minutes}`;

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
      // Removing 00:00 format from top 2 timers
      if (seconds == 0 && minutes == 0) {
        // Play audio when it reaches 0
        playAudio.play();
        running = false;
        clearInterval(intervalID);
        minutes = startMin;
        seconds = 0;
        if (minutes < 10) {
          mainTimer.textContent = `${minutes}`;
        } else {
          mainTimer.textContent = `${minutes}`;
        };
        // Momentarily switched it to timer3() to try it with scripts3.js
        //timer2()
        timer3()
      } else {
        // When actually running
        // Added MainTimer3, to potentially display the running timers on 3rd display
        // Removing MainTimer parts to only show the 3rd display running
        timerLabel.textContent = 'Break';
        if (minutes < 10 && seconds < 10) {
          mainTimer3.textContent = `0${minutes}:0${seconds}`;
        } else if (minutes >= 10 && seconds < 10) {
          mainTimer3.textContent = `${minutes}:0${seconds}`;
        } else if (minutes < 10 && seconds >= 10) {
          mainTimer3.textContent = `0${minutes}:${seconds}`;
        } else {
          mainTimer3.textContent = `${minutes}:${seconds}`;
        };
      };
      console.log(seconds);
      console.log(running);
      console.log(minutes);
    }, 1000);
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
  // Removing 00:00 format from top 2 timers
  mainTimer.textContent = `${minutes}`;
})
// To inc/dec, adding constraint to only inc/dec if seconds are at 0
increment.addEventListener('click', function() {
  if (seconds == 0) {
    if (minutes < 60 && startMin < 60) {
      minutes += 1;
      startMin += 1;
    }
    // Removing 00:00 format from top 2 timers
    if (minutes < 10) {
      mainTimer.textContent = `${minutes}`;
    } else {
      mainTimer.textContent = `${minutes}`;
    };
  }
})
decrement.addEventListener('click', function() {
  if (seconds == 0) {
    if (startMin > 1 && minutes > 1) {
      minutes -= 1;
      startMin -= 1;
    };
    // Removing 00:00 format from top 2 timers
    if (minutes < 10) {
      mainTimer.textContent = `${minutes}`;
    } else {
      mainTimer.textContent = `${minutes}`;
    };
  }
});





/*
Creating a super super basic timer

ideas
-add the css
  this might get a lil messy cause of the id/class name changing
  tweak css a lil bit more
  dark mode
  change id names
  make it look good
-change interval to 1000(for real seconds)
-double check user stories, maybe run it with test
-add it back to a single file?
-idk tbh, smallass steps
-combine them????
*/