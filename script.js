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

// second page

// display instructions and onClick show flags

instructionsContainer.addEventListener("click", () => {
  flagPage.style.display = "block";
  instructionsContainer.style.display = "none";
  // setTimeout(function () {
  //   flagSolid.style.backgroundColor = "red";
  // }, 10000);
});

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

// countries object

// let countriesFacts = {
//   countryName: "Mauritius",
//   fact: "Mauritius was the only known habitat of the dodo",
//   imgSrc:
//     "C:UsersSasha O'Donovandocuments\nologyprojectsmemory_game\nology_javascript_game\flag_images",
// };

// class CountryFact {
//   constructor(country, fact, imgSRC) {
//     this.country = country;
//     this.fact = fact;
//     this.imgSRC = imgSRC;
//   }

//   get CountryFactMessage() {
//     const profileHTML = `
//     <section class="winning-card">
//     <img src=${this.imgSRC} />
//     // <h2>"Well done ${this.getNameInput()} you've found the matching flag"</h2> create name function
//     <h3>Did you know?</h3>
//     <blockquote>${this.fact}</blockquote>
//     </section>`;
//   }
// }

// const mauritius = new CountryFact(
//   "Mauritius",
//   "Mauritius was the only known habitat of the Dodo",
//   "C:UsersSasha O'Donovandocuments\nologyprojectsmemory_game\nology_javascript_game\flag_images"
// );

// flagPage.innerHTML += sasha.CountryFact();

// // <h2>"Well done ${this.getNameInput()} you've found the matching flag"</h2> create name function
// <h3>Did you know?</h3>
