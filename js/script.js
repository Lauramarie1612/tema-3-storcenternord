"use strict";

// hent DOM elementer / fiskene
const getNemo = document.getElementById("nemo"); // intet . grundet det er et id i html
const getDory = document.getElementById("dory");
const getKuglefisk = document.getElementById("kuglefisk");
const getYellowFish = document.getElementById("yellowFish");
const getMoorishl = document.getElementById("moorishl");
const getRensefisk = document.getElementById("rensefisk");

// henter lydfiler
const soundBlob = new Audio();
soundBlob.src = "sound/blob.wav";

//havfrue tale
const kuglelyd = new Audio();
kuglelyd.src = "sound/kuglefisk.mp3";
const nemolyd = new Audio();
nemolyd.src = "sound/klovnefisk.mp3";
const dorylyd = new Audio();
dorylyd.src = "sound/paletkirurg.mp3";
const gullyd = new Audio();
gullyd.src = "sound/gulfisk.mp3";
const moolyd = new Audio();
moolyd.src = "sound/mooriskidol.mp3";
const stribelyd = new Audio();
stribelyd.src = "sound/rensefisk.mp3";
const sostjernelyd = new Audio();
sostjernelyd.src = "sound/sostjerne.mp3";

// få lydene til at fungere når man trykker på fisk
if (getNemo) {
  getNemo.addEventListener("click", () => {
    soundBlob.play();
    nemolyd.play();
    soundBlob.currentTime = 0;
  });
}

if (getDory) {
  getDory.addEventListener("click", () => {
    soundBlob.play();
    dorylyd.play();
    soundBlob.currentTime = 0;
  });
}

if (getKuglefisk) {
  getKuglefisk.addEventListener("click", () => {
    soundBlob.play();
    kuglelyd.play();
    soundBlob.currentTime = 0;
  });
}

if (getYellowFish) {
  getYellowFish.addEventListener("click", () => {
    soundBlob.play();
    gullyd.play();
    soundBlob.currentTime = 0;
  });
}

if (getMoorishl) {
  getMoorishl.addEventListener("click", () => {
    soundBlob.play();
    moolyd.play();
    soundBlob.currentTime = 0;
  });
}

if (getRensefisk) {
  getRensefisk.addEventListener("click", () => {
    soundBlob.play();
    stribelyd.play();
    soundBlob.currentTime = 0;
  });
}

// document.addEventListener("DOMContentLoaded", function () {
// DOM-elementer
// const havfrueLukket = document.querySelector(".havfrue-lukket");
// const havfrueAaben = document.querySelector(".havfrue-åben");
// const boble = document.querySelector(".taleboble");
// const bobleBillede = document.getElementById("taleboble-billede");

// Funktion der skifter havfruens mund
// function havfrueSnak(start) {
//   if (start === true) {
//     havfrueLukket.style.display = "none";
//     havfrueAaben.style.display = "block";
//   } else {
//     havfrueLukket.style.display = "block";
//     havfrueAaben.style.display = "none";
//   }
// }

// Tilføjer click-listener på hver fisk
// fisk.forEach(function (fiskObjekt) {
//   const elem = document.getElementsByClassName(fiskObjekt.klasse)[0];
//   if (elem) {
//     elem.addEventListener("click", function () {
//       if (
//         boble.style.display === "block" &&
//         bobleBillede.src &&
//         bobleBillede.src.includes(fiskObjekt.billede)
//       ) {
//         boble.style.display = "none";
//         havfrueSnak(false);
//       } else {
//         bobleBillede.src = fiskObjekt.billede;
//         boble.style.display = "block";
//         havfrueSnak(true);
//       }
//     });
//   }
// });

// Klik udenfor fisk + taleboble = skjul boble og luk mund
// document.addEventListener("click", function (event) {
//   if (event.target.closest(".fish") || event.target.closest(".taleboble")) {
//     return;
//   } else {
//     boble.style.display = "none";
//     havfrueSnak(false);
//   }
// });

// Sørg for at havfrue er lukket ved start
//   havfrueSnak(false);
// });

// Hent DOM Elementer

const getRedCar = document.getElementById("redCar");
const getPoliceCar = document.getElementById("policeCar");
const getBlueCar = document.getElementById("blueCar");
const sun = document.querySelector(".sun");
const scene = document.querySelector(".scene");

// Opretter lydObjekter
const soundRedCar = new Audio();
soundRedCar.src = "../sound/red-car-horn.wav";
const soundPoliceCar = new Audio();
soundPoliceCar.src = "../sound/police-car-sound.wav";
const soundBlueCar = new Audio();
soundBlueCar.src = "../sound/blue-car-sound.wav";

if (getRedCar) {
  getRedCar.addEventListener("click", () => {
    soundRedCar.play();
  });
}

if (getBlueCar) {
  getBlueCar.addEventListener("click", () => {
    soundBlueCar.play();
  });
}

if (getPoliceCar) {
  getPoliceCar.addEventListener("click", () => {
    soundPoliceCar.play();
  });
}

if (sun && scene) {
  sun.addEventListener("click", () => {
    scene.classList.toggle("night");
  });
}

// lille bevægelse af havfrue
const mermaid = document.getElementById("mermaid");

function randomMove() {
  const randomY = Math.random() * 40 + 30; // procent af højden
  mermaid.style.bottom = `${randomY}%`;
}

setInterval(randomMove, 3000); // flytter lidt op/ned hvert 3. sekund
