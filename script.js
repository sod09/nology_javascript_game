import { countryFlags } from "./data.js";

// UI variables

// const nameInput = document.querySelector(".intro__nameinput").value;
const flagBtn = document.querySelectorAll(".flag__image");
const btnGO = document.querySelector(".intro__button");
const introContainer = document.querySelector(".intro__container");
const instructionsContainer = document.querySelector(
  ".instructions__container"
);
const flagPage = document.querySelector(".flag__container");
// const firstFlagBtn = document.querySelectorAll(".flag");
// const secondFlagBtn = document.querySelectorAll(".flag__pair");
// const flagGrid = document.querySelector(".flag__grid");
const flagTimer = document.querySelector(".flag__timer");
const flagScore = document.querySelector(".flag__score");
const flagContainer = document.querySelector(".flag__grid");
const gameoverContainer = document.querySelector(".gameover__container");

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
// SECOND PAGE

// activation of flags as buttons - looping through

// when user clicks flag, display
// when user clicks 2nd flag, display

// if flags match, keep as shown & add to score and show winning message with fact / flag image  - animate flags so they pulse

// if flags do not match, revert back to solids & do not add to score - animate flags so they shake

countryFlags.sort(() => 0.5 - Math.random());

let userChoices = [];
let clickedImages = [];

function checkImages() {
  if ((clickedImages.length = 2)) {
    clickedImages[0].style.display = "none";
    clickedImages.length = 0;
  }
}

function checkMatch(image) {
  console.log(userChoices);
  if (userChoices.length == 2) {
    if (userChoices[0].country === userChoices[1].country) {
      alert("hey they match!");
      clickedImages.length = 0;
      userChoices.length = 0;
    } else {
      alert("oh no! they dont match");
      setTimeout(() => {
        image.style.display = "none";
        checkImages();
      }, 1000);
      // clickedImages.length = 0;
      userChoices.length = 0;
    }
  }
}

countryFlags.forEach((country) => {
  const flagHTML = document.createElement("div");
  const flagImage = document.createElement("img");
  console.log(country);
  flagHTML.appendChild(flagImage);
  flagImage.classList.add("flag__image");
  flagHTML.classList.add(`${country.className}`);
  flagImage.src = `${country.imgSrc}`;
  console.log(flagHTML);
  flagContainer.appendChild(flagHTML);
  flagHTML.addEventListener("click", () => {
    clickedImages.push(flagImage);
    console.log(clickedImages);
    flagImage.style.display = "block";
    userChoices.push(country);
    console.log(userChoices);
    checkMatch(flagImage);
  });
});

const flags = document.querySelectorAll(".flag__image");
console.log(flags);

// // function createFlags() {
// //   countryFlags.forEach((flag) => {
// //     const flagNode = document.createElement("div");
// //     flagNode.classList.add(flag.className);
// //     const flagImage = document.createElement("img");
// //     flagImage.classList.add("flag__image");
// //     flagImage.setAttribute("data-id", flag.id);
// //     flagImage.setAttribute("src", flag.imgSrc);
// //     flagNode.appendChild(flagImage);
// //     flagContainer.appendChild(flagNode);

// //     flagImage.addEventListener("click", displayFlags);
// //   });
// // }

// function displayFlags() {
//   let flagID = this.getAttribute("data-id");
//   userChoices.push(countryFlags[flagID]);
//   console.log(flagID);
//   console.log(this);
//   console.log(userChoices);
// }

instructionsContainer.addEventListener("click", flagScreen);

function hideFlags() {
  flags.forEach((flag) => {
    console.log(flag);
    flag.style.display = "none";
  });
  console.log("hide the flags function is working");
}

let interval;

function flagScreen() {
  console.log("clicked");
  flagPage.style.display = "block";
  instructionsContainer.style.display = "none";

  // createFlags();

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
  start();
  setTimeout(() => {
    hideFlags();
    function stop() {
      clearInterval(interval);
    }
    stop();
  }, 10000);
  // findTheFlags();
}

// // end of game

// // if player finds all flags before timer ends, display WIN message
// // if player fails to find all flags before timer ends, display GAME OVER message and try again button

// function winningMessage() {
//   //
//   //     <section class="winning-card">
//   //     <img src=${countryFlags.imgSRC} />
//   //     // <h2>"Well done ${nameInput} you've found the matching flag"</h2>
//   //     <h3>Did you know?</h3>
//   //     <blockquote>${countryFlags.fact}</blockquote>
//   //     </section>`;
//   //   }
