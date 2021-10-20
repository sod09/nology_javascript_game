import { countryFlags } from "./data.js";

// UI variables
const btnGO = document.querySelector(".intro__button");
const introContainer = document.querySelector(".intro__container");
const instructionsContainer = document.querySelector(
  ".instructions__container"
);
const flagPage = document.querySelector(".flag__container");
const flagTimer = document.querySelector(".flag__timer");
const flagScore = document.querySelector(".flag__score");
const flagContainer = document.querySelector(".flag__grid");
const goButton = document.querySelector(".flag__gobutton");

let nameInput;
let userChoices = [];
let clickedImages = [];
let interval;

// FIRST PAGE

// input name and store in a variable
// on click of button show next screen
// hide container, display next container
// store name in input field

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

goButton.addEventListener("click", () => {
  startTimer(60);
  goButton.style.display = "none";
  gameStart = true;
  setInterval(() => {
    gameFinished();
  }, 1000);
});

// SECOND PAGE

// activation of flags as buttons - looping through
// when user clicks flag, display
// when user clicks 2nd flag, display
// if flags match, keep as shown & add to score and show winning message with fact / flag image  - animate flags so they pulse
// if flags do not match, revert back to solids & do not add to score - animate flags so they shake

countryFlags.sort(() => 0.5 - Math.random());

function checkImages() {
  if ((clickedImages.length = 2)) {
    clickedImages[0].style.display = "none";
    clickedImages.length = 0;
  }
}

function startTimer(time) {
  let timer = time;
  flagTimer.innerHTML = timer;
  interval = setInterval(() => {
    timer -= 1;
    flagTimer.innerHTML = timer;
    if (timer <= 0) {
      stopTimer();
    }
  }, 1000);
  // console.log(flagTimer);
}

function stopTimer() {
  clearInterval(interval);
}

const matchMessage = document.querySelector(".match__message");
const winningMessage = document.querySelector(".winning__message");
const endOfGameMessage = document.querySelector(".gameover__message");

matchMessage.addEventListener("click", () => {
  matchMessage.style.display = "none";
});

function itsAMatchMessage() {
  let nameInput = document.querySelector(".intro__nameinput").value;
  matchMessage.style.display = "flex";
  matchMessage.style.borderStyle = "solid";
  matchMessage.style.borderColor = "$color-white";
  matchMessage.style.borderWidth = "10px";
  matchMessage.style.borderRadius = "10px";
  matchMessage.innerHTML = `
  <img class="match__image" src= ${userChoices[0].imgSrc} />
  <h2 class="match__country__header">${userChoices[0].country}</h2>
  <h3 class= "match__header" > Well done ${nameInput} you've found the matching flag! </h2>
  <p class = "match__subheader" > Did you know? </p>
  <blockquote class= "match__fact">${userChoices[0].fact}</blockquote>
  `;
}

function getWinningMessage() {
  let nameInput = document.querySelector(".intro__nameinput").value;
  winningMessage.style.display = "flex";
  winningMessage.style.borderStyle = "solid";
  winningMessage.style.borderColor = "$color-white";
  winningMessage.style.borderWidth = "10px";
  winningMessage.style.borderRadius = "10px";
  winningMessage.innerHTML = `
  <h1 class="winning__header">WINNER WINNER CHICKEN DINNER</h1>
  <h2 class="winning__subheader">SUPER WELL DONE ${nameInput}!</h2>
  <h2 class="winning__subheader">You found the pairs in ${flagTimer.innerHTML} seconds</h2>
  <p class="winning__text">It's official you've got the memory of an elephant.</p>`;
}

/* <div style="width:100%;height:0;padding-bottom:65%;position:relative;"><iframe src="https://giphy.com/embed/3o7bu57lYhUEFiYDSM" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/alroker-al-roker-3o7bu57lYhUEFiYDSM">via GIPHY</a></p> */

function getEndOfGameMessage() {
  let nameInput = document.querySelector(".intro__nameinput").value;
  endOfGameMessage.style.display = "flex";
  endOfGameMessage.style.borderStyle = "solid";
  endOfGameMessage.style.borderColor = "$color-white";
  endOfGameMessage.style.borderWidth = "10px";
  endOfGameMessage.style.borderRadius = "10px";
  endOfGameMessage.innerHTML = `
  <h1 class="gameover__header">YOU SNOOZE YOU LOSE</h1></h1>
 
  <h2 class="gameover__subheader">Better luck next time ${nameInput}.</h2>
  <button class="gameover__button"><a href=${introContainer}>Restart</a></button>`;
}

// <p class="gameover__subheader">You did not beat the timer.</p>
// <iframe src="https://giphy.com/embed/MwIvOD6KuAdMiE9P5Z" width="312" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/amandaceemedia-teasing-amanda-cee-media-MwIvOD6KuAdMiE9P5Z">via GIPHY</a></p>

function gameFinished() {
  if (flagScore.innerHTML == 12 && flagTimer.innerHTML > 0) {
    setInterval(() => {
      matchMessage.style.display = "none";
    }, 5000);
    setInterval(() => {
      getWinningMessage();
    }, 5000);
  } else if (flagTimer.innerHTML == 0) {
    getEndOfGameMessage();
  }
}

//  get 30 second timer in correct place so that it runs once
//  if score = 12 and time > 0 then show winningScoreMessage - render in JavaScript?
// if time = 30 and score < 12 then show game over HTML  - render in JavaScript?
// restart button ? 0 everything out and reset timer

function checkMatch(image) {
  console.log(userChoices);
  if (userChoices.length == 2) {
    if (userChoices[0].country === userChoices[1].country) {
      alert("hey they match!");
      itsAMatchMessage();
      clickedImages.length = 0;
      userChoices.length = 0;
      flagScore.innerHTML++;
    } else {
      alert("oh no! they dont match");
      setTimeout(() => {
        image.style.display = "none";
        checkImages();
      }, 1000);
      userChoices.length = 0;
    }
  }
  setTimeout(() => {
    stopTimer();
  }, 60000);
}

let gameStart = false;

countryFlags.forEach((country) => {
  const flagHTML = document.createElement("div");
  const flagImage = document.createElement("img");
  flagHTML.appendChild(flagImage);
  flagImage.classList.add("flag__image");
  flagHTML.classList.add(`${country.className}`);
  flagImage.src = `${country.imgSrc}`;
  // console.log(flagHTML);
  flagContainer.appendChild(flagHTML);
  flagHTML.addEventListener("click", () => {
    if (gameStart) {
      clickedImages.push(flagImage);
      flagImage.style.display = "block";
      userChoices.push(country);
      checkMatch(flagImage);
    }
  });
});

const flags = document.querySelectorAll(".flag__image");

instructionsContainer.addEventListener("click", flagScreen);

function hideFlags() {
  flags.forEach((flag) => {
    // console.log(flag);
    flag.style.display = "none";
  });
  console.log("hide the flags function is working");
}

function flagScreen() {
  console.log("clicked");
  flagPage.style.display = "block";
  instructionsContainer.style.display = "none";
  startTimer(10);
  setTimeout(() => {
    hideFlags();
    stopTimer();
  }, 10000);
}

// // end of game

// // if player finds all flags before timer ends, display WIN message
// // if player fails to find all flags before timer ends, display GAME OVER message and try again button

// restart button

// game over section
