const mainTimer3 = document.getElementById('main-timer3');
const btnStartStop3 = document.getElementById('btn-startstop3');
const btnReset3 = document.getElementById('btn-reset3');

let startMin3 = 25;
let minutes3 = 25;
let seconds3 = 0;

mainTimer3.textContent = `${minutes3}:0${seconds3}`;

let timer3 = () => {};

btnStartStop3.addEventListener('click', timer3 = () => {
  if (running == false && running2 == false && seconds == 0) {
    intervalID2 = setInterval(function() {
      running2 = true;
      if (seconds2 == 0) {
        seconds2 = 60;
        minutes2 -= 1;
      };
      seconds2 -= 1;
      // When timer runs out
      if (seconds2 == 0 && minutes2 == 0) {
        running2 = false;
        clearInterval(intervalID2);
        minutes2 = startMin2;
        seconds2 = 0;
        if (minutes2 < 10) {
          mainTimer2.textContent = `0${minutes2}:0${seconds2}`
        } else {
          mainTimer2.textContent = `${minutes2}:0${seconds2}`
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
      };
      console.log(seconds2);
      console.log(running2);
      console.log(minutes2);
    }, 100);
  } else if (running == true && running2 == false) {
    // Add a stop to 1st timer
    running = false;
    clearInterval(intervalID);
  } else if (running == false && running2 == true) {
    running2 = false;
    clearInterval(intervalID2);
  } else {
    timer();
  };
});
// Naming the reset function
let reset3 = () => {};
btnReset3.addEventListener('click', reset3 = () => {
  reset();
  reset2();
})