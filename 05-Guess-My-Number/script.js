"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🥴 Correct Number!";
// console.log(document.querySelector(".message").textContent);
document.querySelector(".number").textContent = 13;
console.log(document.querySelector(".number").textContent);
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

/*
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
// console.log(secretNumber);

let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🔥 Correct Number! 🏆 🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🧟‍♂️ You loose the GAME!";
      document.querySelector(".score").textContent = 0;
    }
    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🧟‍♂️ You loose the GAME!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
//PART REUSABLE FUNCTIONS
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayWidth = function (width) {
  document.querySelector(".number").style.width = width;
};
const backgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const displayScore = function (numberOfTry) {
  document.querySelector(".score").textContent = numberOfTry;
};
//PART CHECK BUTTON
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    displayMessage("No Number!"); //When player wins
  } else if (guess === secretNumber) {
    displayMessage("🔥 Correct Number! 🏆 🎉");
    displayNumber(secretNumber);
    backgroundColor("#607043");
    displayWidth("30rem");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("🧟‍♂️ You loose the GAME!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
//PART AGAIN BUTTON
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayNumber("?");
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  displayScore(score);
  backgroundColor("#333");
  displayWidth("15rem");
});
