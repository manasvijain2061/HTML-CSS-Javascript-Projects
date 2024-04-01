let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  // console.log("game started");
  if (started == false) {
    console.log("game started");
    started = true;
    console.log(started);

    levelup();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 1000);
}

function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  //random btn choose
  let randomIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randomIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randomIdx);
  // console.log(randColor);
  // console.log(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  console.log("current level", level);
  //let idx = level - 1;

  if (userSeq[idx] === gameSeq[idx]) {
    console.log("same value");
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 1000);
    reset();
  }
}

function btnPress() {
  console.log(this);
  let btn = this; // check which button html code pressed
  userFlash(btn);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
