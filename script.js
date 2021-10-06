"use strict";

// UI variables

// const nameInput = document.querySelector(".intro__nameinput").value;
const flagImage = document.querySelector(".flag__image");
const btnGO = document.querySelector(".intro__button");
const introContainer = document.querySelector(".intro__container");
const instructionsContainer = document.querySelector(
  ".instructions__container"
);
const flagPage = document.querySelector(".flag__container");
const firstFlagBtn = document.querySelectorAll(".flag");
const secondFlagBtn = document.querySelectorAll(".flag__pair");
const flagGrid = document.querySelector(".flag__grid");
const flagTimer = document.querySelector(".flag__timer");
const flagScore = document.querySelector(".flag__score");

// FIRST PAGE

// input name and store in a variable
// on click of button show next screen
// hide container, display next container
// store name in input field

let nameInput;

btnGO.addEventListener("click", () => {
  nameInput = document.querySelector(".intro__nameinput").value;
  console.log(nameInput);
  if (nameInput.length > 1) {
    introContainer.style.display = "none";
    instructionsContainer.style.display = "block";
  } else if (nameInput.length < 1) {
    introContainer.style.display = " ";
    alert("Please add your name");
  }
});

// btnGO.addEventListener("keyup", () => {
//   let nameInput = document.querySelector(".intro__nameinput").value;
//   console.log(nameInput);
//   if (event.keyCode === 13 + nameInput.length > 1) {
//     introContainer.style.display = "none";
//     instructionsContainer.style.display = "block";
//   } else if (event.keyCode === 13 + nameinput.length < 1) {
//     introContainer.style.display = " ";
//     alert("Please add your name");
//   }
// });

// SECOND PAGE

// display instructions and onClick show flags

instructionsContainer.addEventListener("click", flagScreen);

function hideFlags() {
  firstFlagBtn.forEach((firstBtn) => {
    firstBtn.style.backgroundImage = "none";
    firstBtn.style.backgroundColor = "#17b978";
  });
  secondFlagBtn.forEach((secondBtn) => {
    secondBtn.style.backgroundImage = "none";
    secondBtn.style.backgroundColor = "#a7ff83";
  });
}

let interval;

function flagScreen() {
  console.log("clicked");
  flagPage.style.display = "block";
  instructionsContainer.style.display = "none";
  setTimeout(() => {
    hideFlags();
    function start() {
      let time = 10;
      flagTimer.innerHTML = time;
      interval = setInterval(() => {
        time -= 1;
        flagTimer.innerHTML = time;
        if (time <= 0) {
          stop();
        }
      }, 1000);
      console.log(flagTimer);
    }

    function stop() {
      clearInterval(interval);
    }
    start();
  }, 1000);

  // setTimeout(() => {
  //   console.log("hello- time out works!");
  //   hideFlags();
  //   let time = 3;
  //   function gameTimer() {
  //     time = time - 1;
  //     if (time < 3) {
  //       flagTimer.innerHTML = time;
  //     }

  //     if (time < 1) {
  //       clearInterval(gameTimer);
  //     }
  //   }
  //   setInterval(gameTimer, 1000);
  // }, 3000);
}

// THIRD PAGE (FLAG PAGE)

// activation of flags as buttons - looping through
firstFlagBtn.forEach(function (i) {
  i.addEventListener("click", function () {
    console.log("clicked-first flag");
    firstBtn.style.backgroundImage = flag.imgSRC;
  });
});

secondFlagBtn.forEach(function (i) {
  i.addEventListener("click", function () {
    console.log("clicked- second flag");
    secondBtn.style.backgroundImage = `${flag.imgSRC}`;
  });
});

// when user clicks flag, display
// when user clicks 2nd flag, display

// if flags match, keep as shown & add to score and show winning message with fact / flag image  - animate flags so they pulse

// if flags do not match, revert back to solids & do not add to score - animate flags so they shake


function findTheFlags() {
  if ("country" === "country2") {

    let score = score + 1;
    flagScore.innerHTML = score;

    flagPage.innerHTML += CountryFact();

    // keep both flags on display
    // flagPage.innerHTML += mauritius.CountryFact();
    // add to score display
   // hold timer
  } else {
    firstBtn.style.backgroundImage = "none";
    secondBtn.style.backgroundImage = "none";
    // hide flags - revert back to solid colour
    // run timer again
    // score stays the same
  }
}

// Array.includes() ?

// countries object

// let countriesFacts = {
//   countryName: "Mauritius",
//   fact: "Mauritius was the only known habitat of the dodo",
//   imgSrc:
//     "C:UsersSasha O'Donovandocuments\nologyprojectsmemory_game\nology_javascript_game\flag_images",
// };

class CountryFact {
  constructor(country, fact, imgSRC, id, className) {
    this.country = country;
    this.fact = fact;
    this.imgSRC = imgSRC;
    this.id = id;
    this.className = className;
  }

  get CountryFactMessage() {
    const countryHTML = `
    <section class="winning-card">
    <img src=${this.imgSRC} />
    // <h2>"Well done ${this.getNameInput()} you've found the matching flag"</h2> create name function
    <h3>Did you know?</h3>
    <blockquote>${this.fact}</blockquote>
    </section>`;
  }
}

const mauritius = new CountryFactMessage (
  "Mauritius",
  "Mauritius was the only known habitat of the Dodo",
  url("C:UsersSasha O'Donovandocuments\nologyprojectsmemory_game\nology_javascript_game\flag_images");
  id = 1;
  className = match html classname
);

// // end of game

// // if player finds all flags before timer ends, display WIN message
// // if player fails to find all flags before timer ends, display GAME OVER message and try again button
