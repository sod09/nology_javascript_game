"use strict";

// UI variables

// const nameInput = document.querySelector(".intro__nameinput").value;
const flagImage = document.querySelector(".flag__image");
const btnGO = document.querySelector(".intro__button");
const introContainer = document.querySelector(".intro__container");
const instructionsContainer = document.querySelector(
  ".instructions__container"
);

// first page

// input name and store in a variable
// on click of button show next screen
// hide container, display next container
// store name in input field

btnGO.addEventListener("click", () => {
  let nameInput = document.querySelector(".intro__nameinput").value;
  console.log(nameInput);
  if (nameInput.length > 1) {
    introContainer.style.display = "none";
    instructionsContainer.style.display = "block";
  } else if (nameInput.length < 1) {
    introContainer.style.display = " ";
    alert("Please add your name");
  }
});

// second page

// display instructions and onClick show flags

// third page/flag page

// show flags for X seconds
// flip flags to solid

// when user clicks flag, display
// when user clicks 2nd flag, display

// if flags match, keep as shown & add to score and show winning message with fact / flag image  - animate flags so they pulse

// if flags do not match, revert back to solids & do not add to score - animate flags so they shake

// display timer

// end of game

// if player finds all flags before timer ends, display WIN message
// if player fails to find all flags before timer ends, display GAME OVER message and try again button
