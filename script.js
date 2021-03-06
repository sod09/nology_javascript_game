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

// SECOND PAGE

// activation of flags as buttons - looping through
// when user clicks flag, display
// when user clicks 2nd flag, display
// if flags match, keep as shown & add to score and show winning message with fact / flag image  - animate flags so they pulse
// if flags do not match, revert back to solids & do not add to score - animate flags so they shake

// added event listener - click go button, store input value
// if value is less than 1, alert
// if value is more than 1, move forward to next screen and display instructions
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

// go button for the game itselt, added event listener
// when you hit the go button the 60 seconds startTimer() starts and the the GO button disappears
// this click also calls the gameFinished() function, which checks for a winner/loser every second using setInterval(())
// starts at gameStart = true which is used further on in the game to start game itself
goButton.addEventListener("click", () => {
  startTimer(60);
  goButton.style.display = "none";
  gameStart = true;
  setInterval(() => {
    gameFinished();
  }, 1000);
});

// this randomly sorts the flag images every time the game is played
countryFlags.sort(() => 0.5 - Math.random());

// this function pushes 2 clicked images to an array, once it equals 2 it will clear the array and hide the flags again.
function checkImages() {
  if ((clickedImages.length = 2)) {
    clickedImages[0].style.display = "none";
    clickedImages.length = 0;
  }
}

// timer function which is used twice in the game. changing the parameter
// it includes a setInterval to increment by one second and a stopTimer() function to end it at 0 using clearInterval
function startTimer(time) {
  let timer = time;
  flagTimer.innerHTML = timer;
  interval = setInterval(() => {
    timer -= 1;
    flagTimer.innerHTML = timer;
    if (timer == 0) {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

// UI VARIABLES - game messages
const matchMessage = document.querySelector(".match__message");
const winningMessage = document.querySelector(".winning__message");
const endOfGameMessage = document.querySelector(".gameover__message");

// once clicked, the match message will not display so game can continue
matchMessage.addEventListener("click", () => {
  matchMessage.style.display = "none";
});

// this displays when two flags are matched
// dynamically creates the message using JavaScript
// it includes the nameInput valie for personalisation
// it calls down information from the data file (array of objects to display an image/country name and fact)
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

// this displays a winning message when all pairs have been found
// dynamically creates the message using JavaScript
// // it uses the nameInput value for personalisation and timer innterHTML to calculate how many seconds the player completed it in
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
  <h2 class="winning__subheader">You found the pairs with ${
    60 - flagTimer.innerHTML
  } seconds.</h2>
  <p class="winning__text">It's official you've got the memory of an elephant.</p>
  <button class="winning__button">Restart</button>`;
}

document
  .querySelector(".winning__message")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("winning__button")) {
      location.reload();
    }
  });

// this allows the player to click the JavaScript button at when they have one and restart the game but back to the start of the game

// this displays a Game over message at 0 seconds
// dynamically creates the message using JavaScript
// // it uses the nameInput value for personalisation and includes a button to restart back to the start of game
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
  <button class="gameover__button">Restart</button>`;
}

// this allows the player to click the JavaScript button at game over and restart the game but back to the start of the game
document
  .querySelector(".gameover__message")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("gameover__button")) {
      location.reload();
    }
  });

//

// this function is called when go button is clicked to check status of game
// it checks for a winner once player has all pairs or a loser at 0 seconds 7
// it switches off the match message too after a certain amoutn of time once all pairs are found

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

// creates an array of clicks in userChoices which is then stored with an index number
// that index number targers the country and once they match it displays a match message
// it also clears the array and the clicked images array and updates the flagScore innterHTML
// if they dont match, it uses setTimeout to hide the flags again and clear the array or userChoices/clicked images
// it stops the timer after 60 seconds

function checkMatch(image) {
  console.log(userChoices);
  if (userChoices.length == 2) {
    if (userChoices[0].country === userChoices[1].country) {
      // alert("hey they match!");
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

// dynamically creates all the flag images in JavaScript using the data in the array of objects

countryFlags.forEach((country) => {
  const flagHTML = document.createElement("div");
  const flagImage = document.createElement("img");
  flagHTML.appendChild(flagImage);
  flagImage.classList.add("flag__image");
  flagHTML.classList.add(`${country.className}`);
  flagImage.src = `${country.imgSrc}`;
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

// hides each flag
function hideFlags() {
  flags.forEach((flag) => {
    flag.style.display = "none";
  });
}

// once you click the istructions container it calls the flagScreen() function which hides the flags after a certain time
function flagScreen() {
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
