function updateTime() {
  const currentYear = new Date().getFullYear();
  const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
  const currentDate = new Date();
  const remaining = newYear - currentDate;
  const d = Math.floor(remaining / 1000 / 60 / 60 / 24);
  const h = Math.floor(remaining / 1000 / 60 / 60) % 24;
  const m = Math.floor(remaining / 1000 / 60) % 60;
  const s = Math.floor(remaining / 1000) % 60;
  days.textContent = d < 10 ? `0${d}` : d;
  hours.textContent = h < 10 ? `0${h}` : h;
  minutes.textContent = m < 10 ? `0${m}` : m;
  seconds.textContent = s < 10 ? `0${s}` : s;
}

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

setInterval(updateTime, 1000);
