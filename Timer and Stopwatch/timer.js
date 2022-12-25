let number = document.getElementById("number");
let watch = document.getElementById("watch");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let timer,
  ss = 0,
  mm = 0,
  hh = 0,
  checker = [true, true];

number.addEventListener("change", () => {
  checker[1] = true;
});

function calcTimer(totalTime) {
  hh = Math.floor(totalTime / 60);
  if (hh > 0) mm = Math.floor(totalTime % (hh * 60));
  else mm = totalTime;
  ss = 0;
}

function backTime() {
  if (ss == 0 && mm >= 0) {
    ss = (mm / mm) * 60;
    mm -= 1;
  }
  if (ss >= 0) ss -= 1;
  if (mm == 0 && hh > 0) hh -= 1;
}

function timerHand() {
  if (Number(hh) + Number(mm) + Number(ss) > 0) backTime();
  watch.innerHTML = `${hh} : ${mm} : ${ss}`;
  timer = setTimeout(timerHand, 1000);
}

startBtn.addEventListener("click", () => {
  if (checker[0] && Number(number.value) > 0) {
    if (checker[1]) calcTimer(Number(number.value));
    timer = setTimeout(timerHand, 1000);
    console.log(checker[0]);
    checker[1] = false;
    checker[0] = false;
  }
});
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  checker[0] = true;
  checker[1] = true;
});
resetBtn.addEventListener("click", () => {
  clearTimeout(timer);
  (ss = 0), (mm = 0), (hh = 0);
  watch.innerHTML = `00 : 00 : 00`;
  checker[0] = true;
  checker[1] = true;
});