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

instructionsContainer.addEventListener("click", () => {
  flagPage.style.display = "block";
  instructionsContainer.style.display = "none";
});

// third page/flag page

function solidFlags() {
  flagImage.style.backgroundColor = "red";
}

setTimeout(solidFlags, 2000); //execute greet after 2000 milliseconds (2 seconds)

// show flags for X seconds
// flip flags to solid

{
  /* <button onclick="setTimeout(myFunction, 3000);">Try it</button>

<script>
function myFunction() {
  alert('Hello');
}
</script> */
}

// when user clicks flag, display
// when user clicks 2nd flag, display

// if flags match, keep as shown & add to score and show winning message with fact / flag image  - animate flags so they pulse

// if flags do not match, revert back to solids & do not add to score - animate flags so they shake

// display timer

// end of game

// if player finds all flags before timer ends, display WIN message
// if player fails to find all flags before timer ends, display GAME OVER message and try again button
