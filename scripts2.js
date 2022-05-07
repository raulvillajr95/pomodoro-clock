const mainTimer2 = document.getElementById('main-timer2');
const btnStartStop2 = document.getElementById('btn-startstop2');
const btnReset2 = document.getElementById('btn-reset2');
const increment2 = document.getElementById('increment2');
const decrement2 = document.getElementById('decrement2');

let startMin2 = 25;
let minutes2 = 25;
let seconds2 = 0;
let intervalID2;

// Removing 00:00 format from top 2 timers
mainTimer2.textContent = `${minutes2}`;

// Outer function declaration
let timer2 = () => {};

let running2 = false;
btnStartStop2.addEventListener('click', timer2 = () => {
  if (running2 == false) {
    intervalID2 = setInterval(function() {
      running2 = true;
      if (seconds2 == 0) {
        seconds2 = 60
        minutes2 -= 1
      };
      seconds2 -= 1;
      // When timer runs out
      if (seconds2 == 0 && minutes2 == 0) {
        running2 = false;
        clearInterval(intervalID2);
        minutes2 = startMin2;
        seconds2 = 0;
        // Removing 00:00 format from top 2 timers
        if (minutes2 < 10) {
          mainTimer2.textContent = `${minutes2}`
        } else {
          mainTimer2.textContent = `${minutes2}`
        };
        timer();
      } else {
        // When actually running
        if (minutes2 < 10 && seconds2 < 10) {
          mainTimer2.textContent = `0${minutes2}:0${seconds2}`;
        } else if (minutes2 >= 10 && seconds2 < 10) {
          mainTimer2.textContent = `${minutes2}:0${seconds2}`;
        } else if (minutes2 < 10 && seconds2 >= 10) {
          mainTimer2.textContent = `0${minutes2}:${seconds2}`;
        } else {
          mainTimer2.textContent = `${minutes2}:${seconds2}`;
        };
      }
      console.log(seconds2);
      console.log(running2);
      console.log(minutes2);
    }, 100);
  } else {
    // Add a stop to 1st timer
    running2 = false;
    clearInterval(intervalID2);
  };
})
// Naming the reset function
let reset2 = () => {};
btnReset2.addEventListener('click', reset2 = () => {
  running2 = false;
  clearInterval(intervalID2);
  minutes2 = 25; startMin2 = 25;// do not change cause default is 5 minutes
  seconds2 = 0;
  // Removing 00:00 format from top 2 timers
  mainTimer2.textContent = `${minutes2}`;
  mainTimer3.textContent = `${minutes2}:0${seconds2}`
})
increment2.addEventListener('click', function() {
  if (minutes2 < 60 && startMin2 < 60) {
    minutes2 += 1;
    startMin2 += 1;
  }
  // Adding increments to also appear on 3rd display
  // Removing 00:00 format from top 2 timers
  if (minutes2 < 10) {
    mainTimer2.textContent = `${minutes2}`;
    mainTimer3.textContent = `0${minutes2}:0${seconds2}`;
  } else {
    mainTimer2.textContent = `${minutes2}`;
    mainTimer3.textContent = `${minutes2}:0${seconds2}`;
  };
});
decrement2.addEventListener('click', function() {
  if (startMin2 > 1 && minutes2 > 1) {
    minutes2 -= 1;
    startMin2 -= 1;
  }
  // Adding decrements to also appear on 3rd display
  // Removing 00:00 format from top 2 timers
  if (minutes2 < 10) {
    mainTimer2.textContent = `${minutes2}`;
    mainTimer3.textContent = `0${minutes2}:0${seconds2}`;
  } else {
    mainTimer2.textContent = `${minutes2}`;
    mainTimer3.textContent = `${minutes2}:0${seconds2}`;
  };
});