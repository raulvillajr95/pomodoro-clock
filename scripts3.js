const mainTimer3 = document.getElementById('main-timer3');
const btnStartStop3 = document.getElementById('btn-startstop3');
const btnReset3 = document.getElementById('btn-reset3');
const timerLabel = document.getElementById('timer-label')

let startMin3 = 25;
let minutes3 = 25;
let seconds3 = 0;

timerLabel.textContent = 'Session';

mainTimer3.textContent = `${minutes3}:0${seconds3}`;

// Function that plays audio https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-41945/zapsplat_vehicles_aircraft_call_bell_dual_tone_44562.mp3
let playAudio = new Audio('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-41945/zapsplat_vehicles_aircraft_call_bell_dual_tone_44562.mp3');

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
        // Play audio when it reaches 0
        playAudio.play();
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
        // Added MainTimer3, to potentially display the running timers on 3rd display
        // Removing MainTimer2 parts to only show the 3rd display running
        timerLabel.textContent = 'Session';
        if (minutes2 < 10 && seconds2 < 10) {
          mainTimer3.textContent = `0${minutes2}:0${seconds2}`;
        } else if (minutes2 >= 10 && seconds2 < 10) {
          mainTimer3.textContent = `${minutes2}:0${seconds2}`;
        } else if (minutes2 < 10 && seconds2 >= 10) {
          mainTimer3.textContent = `0${minutes2}:${seconds2}`;
        } else {
          mainTimer3.textContent = `${minutes2}:${seconds2}`;
        };
      };
      console.log(seconds2);
      console.log(running2);
      console.log(minutes2);
    }, 1000);
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