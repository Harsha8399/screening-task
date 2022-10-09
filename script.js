let counter = document.getElementById("counter");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

var count = 0;
var pause = false;
console.log(count);
var timer;
startBtn.addEventListener("click", () => {
  pause = false;
  clearInterval(timer);
  timer = setInterval(() => {
    {
      if (pause === false) {
        count = count + 1;
        console.log(count);
        counter.innerHTML = count;
      }
    }
  }, 1000);
});

resetBtn.addEventListener("click", () => {
  pause = true;
  count = 0;
  counter.innerHTML = " ";
});
stopBtn.addEventListener("click", () => {
  pause = true;
});
