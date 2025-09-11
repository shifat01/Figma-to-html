const lastDigit = document.getElementById("last-digit");
let count = 0;

setInterval(() => {
  lastDigit.textContent = count;
  count = (count + 1) % 10;
}, 1000);
