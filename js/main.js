const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const titleEl = document.getElementById("title");

titleEl.innerHTML = "TIMER";

// recupero la data di domani
const tomorrow = new Date("2023-02-06 09:30").getTime();

// timing function
const countdown = setInterval(timeLeft, 1000);

timeLeft();

function timeLeft() {
  // la data di oggi
  const now = new Date().getTime();

  // la sottazione dell'ora di domani all'istante del tempo di oggi
  let missingTime = tomorrow - now;

  //
  let seconds = Math.floor((missingTime % (1000 * 60)) / 1000);
  let minutes = Math.floor((missingTime % (1000 * 60 * 60)) / (1000 * 60));
  let hours = Math.floor(
    (missingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let days = Math.floor(missingTime / (1000 * 60 * 60 * 24));

  secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
  daysEl.innerHTML = days < 10 ? "0" + days : days;
}
