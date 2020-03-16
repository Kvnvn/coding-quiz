//(psuedo code)Basic layout 
//clickable "view highscore" and counter that gives countdown from 75secs"
//Navigation bar timer
var timerElement = document.querySelector(".timer");

var secondsLeft = 75;
// Create the countdown timer.
var timerInterval = setInterval(function () {
  //update countdown
  timerElement.textContent = "Time: " + secondsLeft;
  secondsLeft--;
  if (secondsLeft === 0) {
    clearInterval(timerInterval);
}
}, 1000);
// timer has to be set with  "start quiz button" in order for game to begin
