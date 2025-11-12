"use strict";

// Fanger elementerne fra HTML
const game = document.getElementById("game"); // hele spilområdet (baggrunden)
const dodger = document.getElementById("dodger"); // selve fisken/pacman-figuren

// Sæt fisken i midten af skærmen når siden loader
window.addEventListener("load", () => {
  const game = document.getElementById("game");
  const centerX = (game.clientWidth - dodger.offsetWidth) / 2;
  const centerY = (game.clientHeight - dodger.offsetHeight) / 2;
  dodger.style.left = centerX + "px";
  dodger.style.bottom = centerY + "px";
});

// Hvor mange pixels fisken flytter sig hver gang man trykker
const step = 10;

// Regner ud hvor langt man må bevæge sig i hver retning
function maxX() {
  // bredden på spillet - bredden på fisken = højre grænse
  return game.clientWidth - dodger.offsetWidth;
}
function maxY() {
  // højden på spillet - højden på fisken = øvre grænse
  return game.clientHeight - dodger.offsetHeight;
}

/* ------------------------------------------
   Alle bevægelsesfunktioner
--------------------------------------------- */

function moveDodgerLeft() {
  // Finder ud af hvor langt til venstre fisken er
  const left = parseInt(dodger.style.left) || 0;

  // Hvis der stadig er plads, flyt til venstre
  if (left > 0) {
    dodger.style.left = left - step + "px";
  } else {
    // Ellers, hvis man rammer kanten → spil game over-lyd
    playGameoverSound();
  }
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left) || 0;

  // Må ikke bevæge sig længere end højre kant
  if (left < maxX()) {
    dodger.style.left = left + step + "px";
  } else {
    playGameoverSound();
  }
}

function moveDodgerUp() {
  const bottom = parseInt(dodger.style.bottom) || 0;

  // Må ikke gå højere end toppen af skærmen
  if (bottom < maxY()) {
    dodger.style.bottom = bottom + step + "px";
  } else {
    playGameoverSound();
  }
}

function moveDodgerDown() {
  const bottom = parseInt(dodger.style.bottom) || 0;

  // Må ikke gå længere ned end bunden
  if (bottom > 0) {
    dodger.style.bottom = bottom - step + "px";
  } else {
    playGameoverSound();
  }
}

/* ------------------------------------------
   Når man trykker på piletasterne
--------------------------------------------- */
document.addEventListener("keydown", function (e) {
  // Venstre pil
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
    playSoundOnMovement();
    dodger.style.transform = "scaleX(1)"; // spejlvend mod venstre
  }

  // Højre pil
  if (e.key === "ArrowRight") {
    moveDodgerRight();
    playSoundOnMovement();
    dodger.style.transform = "scaleX(-1)"; // spejlvend mod højre
  }

  // Op
  if (e.key === "ArrowUp") {
    moveDodgerUp();
    playSoundOnMovement();
  }

  // Ned
  if (e.key === "ArrowDown") {
    moveDodgerDown();
    playSoundOnMovement();
  }
});

/* ------------------------------------------
   Lyd
--------------------------------------------- */
const movementSound = document.getElementById("movementSound");
function playSoundOnMovement() {
  // Nulstil lyden og spil den igen, så man hører et lille “klik” hver gang man flytter sig
  movementSound.currentTime = 0;
  movementSound.play();
}

const gameoverSound = document.getElementById("gameoverSound");
function playGameoverSound() {
  // Stop bevægelseslyd og spil game over-lyd
  movementSound.currentTime = 0;
  gameoverSound.play();
}

/* ------------------------------------------
   Knapper på skærmen (mobil/tablet)
--------------------------------------------- */
const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// Klik-handlinger for knapperne
if (btnLeft)
  btnLeft.addEventListener("click", () => {
    moveDodgerLeft();
    dodger.style.transform = "scaleX(1)";
    playSoundOnMovement();
  });
if (btnRight)
  btnRight.addEventListener("click", () => {
    moveDodgerRight();
    dodger.style.transform = "scaleX(-1)";
    playSoundOnMovement();
  });
if (btnUp)
  btnUp.addEventListener("click", () => {
    moveDodgerUp();
    playSoundOnMovement();
  });
if (btnDown)
  btnDown.addEventListener("click", () => {
    moveDodgerDown();
    playSoundOnMovement();
  });
