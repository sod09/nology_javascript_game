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
  startTimer(30);
  goButton.style.display = "none";
  gameStart = true;
  endOfGameMessage();
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

// function startGameTimer() {
//   if (start) {
//     start = false;
//   }
// function start30SecondsTimer() {
//   let time = 30;
//   flagTimer.innerHTML = time;
//   interval = setInterval(() => {
//     time -= 1;
//     flagTimer.innerHTML = time;
//     if (time <= 0) {
//       stop30SecondsTimer();
//     }
//   }, 500);
//   console.log(flagTimer);
// }

// function stop30SecondsTimer() {
//   clearInterval(interval);
// }

// function start10SecondsTimer() {
//   let time = 10;
//   flagTimer.innerHTML = time;
//   interval = setInterval(() => {
//     time -= 1;
//     flagTimer.innerHTML = time;
//     if (time <= 0) {
//       stop10SecondsTimer();
//     }
//   }, 1000);
//   console.log(flagTimer);
// }

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
  console.log(flagTimer);
}

function stopTimer() {
  clearInterval(interval);
}

const matchMessage = document.querySelector(".match__message");
const winningMessage = document.querySelector(".winning__message");
const gameOverMessage = document.querySelector(".gameover__message");

matchMessage.addEventListener("click", () => {
  matchMessage.style.display = "none";
});
function itsAMatchMessage() {
  let nameInput = document.querySelector(".intro__nameinput").value;
  matchMessage.style.display = "flex";
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
  winningMessage.innerHTML = `
  <div style="width:100%;height:0;padding-bottom:65%;position:relative;"><iframe src="https://giphy.com/embed/3o7bu57lYhUEFiYDSM" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/alroker-al-roker-3o7bu57lYhUEFiYDSM">via GIPHY</a></p>
  <h1>YOU'RE A WINNER!</h1>
  <h2>Super well done ${nameInput}!!</h2>
  <p>You found all the pairs!</p>
  <p>It's official you've got the memory of an elephant.</p>`;
}

function getEndOfGameMessage() {
  let nameInput = document.querySelector(".intro__nameinput").value;
  gameOverMessage.style.display = "flex";
  gameOverMessage.innerHTML = `
  <div style="width:100%;height:0;padding-bottom:65%;position:relative;"><iframe src="https://giphy.com/embed/3o7bu57lYhUEFiYDSM" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/alroker-al-roker-3o7bu57lYhUEFiYDSM">via GIPHY</a></p>
  <h1>YOU'RE A WINNER!</h1>
  <h2>Super well done ${nameInput}!!</h2>
  <p>You found all the pairs!</p>
  <p>It's official you've got the memory of an elephant.</p>`;
}

function endOfGameMessage() {
  if (flagScore.innerHTML === 12 && flagTimer.innerHTML > 0) {
    getWinningMessage();
    alert("You're a winner!");
  } else if (flagTimer.innerHTML === 0) {
    getEndOfGameMessage();
    alert("oh no try again!");
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
  }, 30000);
  console.log(userChoices);
}

let gameStart = false;

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
    if (gameStart) {
      clickedImages.push(flagImage);
      console.log(clickedImages);
      flagImage.style.display = "block";
      userChoices.push(country);
      console.log(userChoices);
      checkMatch(flagImage);
    }
  });
});

const flags = document.querySelectorAll(".flag__image");
console.log(flags);

instructionsContainer.addEventListener("click", flagScreen);

function hideFlags() {
  flags.forEach((flag) => {
    console.log(flag);
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
