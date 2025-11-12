"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // DOM-elementer
  const havfrue = document.getElementById("havfrue");
  const havfrueLukket = document.querySelector(".havfrue-lukket");
  const havfrueAaben = document.querySelector(".havfrue-åben");
  const boble = document.querySelector(".taleboble");
  const bobleBillede = document.getElementById("taleboble-billede");

  // Funktion: Skift havfruens mund
  function havfrueSnak(start) {
    if (start === true) {
      havfrue.style.display = "none";
      havfrueAaben.style.display = "block";
    } else {
      havfrue.style.display = "block";
      havfrueAaben.style.display = "none";
    }
  }

  // Fiske-array
  const fisk = [
    { klasse: "starfish", billede: "img/infoseastar.png" },
    { klasse: "fish1", billede: "img/infonemo.png" },
    { klasse: "fish2", billede: "img/infodory.png" },
    { klasse: "fish3", billede: "img/infokugle.png" },
    { klasse: "fish4", billede: "img/infogulkirug.png" },
    { klasse: "fish5", billede: "img/infomoorish.png" },
    { klasse: "fish6", billede: "img/infobluestriped.png" },
  ];

  // Click-event for hver fisk
  fisk.forEach(function (fiskObjekt) {
    const element = document.getElementsByClassName(fiskObjekt.klasse)[0];
    if (element) {
      element.addEventListener("click", function (event) {
        event.stopPropagation();
        if (
          boble.style.display === "block" &&
          bobleBillede.src.includes(fiskObjekt.billede)
        ) {
          boble.style.display = "none";
          havfrueSnak(false);
        } else {
          bobleBillede.src = fiskObjekt.billede;
          boble.style.display = "block";
          havfrueSnak(true);
        }
      });
    }
  });

  // Klik udenfor = luk taleboble
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".fish") && !event.target.closest(".taleboble")) {
      boble.style.display = "none";
      havfrueSnak(false);
    }
  });

  // Start med lukket mund
  havfrueSnak(false);
});





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

// få lydene til at fungere når man trykker på fisk
if (getNemo) {
  getNemo.addEventListener("click", () => {
    soundBlob.play();
    soundBlob.currentTime = 0;
  });
}

if (getDory) {
  getDory.addEventListener("click", () => {
    soundBlob.play();
    soundBlob.currentTime = 0;
  });
}

if (getKuglefisk) {
  getKuglefisk.addEventListener("click", () => {
    soundBlob.play();
    soundBlob.currentTime = 0;
  });
}

if (getYellowFish) {
  getYellowFish.addEventListener("click", () => {
    soundBlob.play();
    soundBlob.currentTime = 0;
  });
}

if (getMoorishl) {
  getMoorishl.addEventListener("click", () => {
    soundBlob.play();
    soundBlob.currentTime = 0;
  });
}

if (getRensefisk) {
  getRensefisk.addEventListener("click", () => {
    soundBlob.play();
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
const mermaid = document.querySelector(".mermaid");

function randomMove() {
  const randomY = Math.random() * 40 + 30; // procent af højden
  mermaid.style.bottom = `${randomY}%`;
}

setInterval(randomMove, 3000); // flytter lidt op/ned hvert 3. sekund
