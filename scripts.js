const mainTimer = document.getElementById('main-timer')
const btnStart = document.getElementById('btn-start')

let count = 0

btnStart.addEventListener('click', function() {
  setInterval(function() {
    count += 1
    mainTimer.textContent = count
  }, 1000)
})




/*
Creating a super super basic timer

ideas
-just seconds forever
-start
-pause
-reset
-mins and seconds
-countdown?? manually inputed on js
-instead of manual input, use session
-restart after each session
-duplicate timer, 2 timers on each page
-idk tbh, smallass steps
-combine them????
-official 00:00 timing
*/