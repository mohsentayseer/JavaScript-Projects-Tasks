var start = document.querySelectorAll("button")[0];
var interval;
start.addEventListener("click", function () {
  alert("Clock will Start");
  interval = setInterval(updateClock, 1000);
});

function updateClock() {
  var date = new Date();
  var time = date.toLocaleTimeString();
  var clock = document.querySelector("h1");
  clock.innerText = time;
}

document.querySelector("body").addEventListener("keydown", function (e) {
  if (e.altKey && e.key === "w") clearInterval(interval);
});
