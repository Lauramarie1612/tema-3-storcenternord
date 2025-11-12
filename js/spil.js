"use strict";

const dodger = document.getElementById("dodger");
const coin = document.getElementById("coin");
const superCoin = document.getElementById("superCoin");
const scoreElement = document.getElementById("points");
const gameoverSound = document.getElementById("gameover");
let score = 0;
const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startknap");

startButton.addEventListener("click", function () {
  startScreen.style.display = "none"; // fjerner start skærm overlay
  playBackgroundMusic(); // Starter musikken når spillet begynder
  // undersøg dette nærmere, dog ved jeg det er til super coin og det starter en interval hver 20s
  if (!superCoinInterval) {
    // tilføjer den første efter 8s for at give spilleren tid
    setTimeout(() => spawnSuperCoin(5000), 8000);
    superCoinInterval = setInterval(() => spawnSuperCoin(5000), 20000);
  }
});

dodger.style.backgroundImage = "url('/pacman-img/pacman-åben.png')";
