// "use strict";

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

// instructionsContainer.addEventListener("click", flagScreen);

// function hideFlags() {
//   firstFlagBtn.forEach((firstBtn) => {
//     firstBtn.style.backgroundImage = "none";
//     firstBtn.style.backgroundColor = "#17b978";
//   });
//   secondFlagBtn.forEach((secondBtn) => {
//     secondBtn.style.backgroundImage = "none";
//     secondBtn.style.backgroundColor = "#a7ff83";
//   });
// }

// let interval;

// function flagScreen() {
//   console.log("clicked");
//   flagPage.style.display = "block";
//   instructionsContainer.style.display = "none";
//   setTimeout(() => {
//     hideFlags();
//     function start() {
//       let time = 10;
//       flagTimer.innerHTML = time;
//       interval = setInterval(() => {
//         time -= 1;
//         flagTimer.innerHTML = time;
//         if (time <= 0) {
//           stop();
//         }
//       }, 1000);
//       console.log(flagTimer);
//     }

//     function stop() {
//       clearInterval(interval);
//     }
//     start();
//   }, 1000);

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
// }

// THIRD PAGE (FLAG PAGE)

// activation of flags as buttons - looping through

// when user clicks flag, display
// when user clicks 2nd flag, display

// if flags match, keep as shown & add to score and show winning message with fact / flag image  - animate flags so they pulse

// if flags do not match, revert back to solids & do not add to score - animate flags so they shake

const countryFlags = [
  {
    country: "Mauritius",
    imgSrc: "./flag_images/001-mauritius.png",
    fact: "Mauritius was the only known habitat of the Dodo",
    id: 1,
    idName: "mauritius",
    className: "flag",
  },

  {
    country: "Mauritius",
    imgSrc: "./flag_images/001-mauritius.png",
    fact: "Mauritius was the only known habitat of the Dodo",
    id: 1,
    idName: "mauritius2",
    className: "flag__pair",
  },

  {
    country: "Ireland",
    imgSrc: "./flag_images/179-ireland.png",
    fact: "St Patrick wasn't Irish! Contrary to popular belief, and despite being the Patron Saint of Ireland, St. Patrick was not actually from Ireland. Born in Wales around 386 AD.",
    id: 2,
    idName: "ireland",
    className: "flag",
  },

  {
    count: "Ireland",
    imgSrc: "./flag_images/179-ireland.png",
    fact: "St Patrick wasn't Irish! Contrary to popular belief, and despite being the Patron Saint of Ireland, St. Patrick was not actually from Ireland. Born in Wales around 386 AD.",
    id: 2,
    idName: "ireland2",
    className: "flag__pair",
  },

  {
    country: "Italy",
    imgSrc: "./flag_images/013-italy.png",
    fact: "The average Italian consumes 25kg of pasta per year. To put that into perspective, that’s even heavier than your carry-on luggage for an economy airline flight.",
    id: 3,
    idName: "italy",
    className: "flag",
  },

  {
    country: "Italy",
    imgSrc: "./flag_images/013-italy.png",
    fact: "The average Italian consumes 25kg of pasta per year. To put that into perspective, that’s even heavier than your carry-on luggage for an economy airline flight.",
    id: 3,
    idName: "italy2",
    className: "flag__pair",
  },

  {
    country: "Puerto-Rico",
    imgSrc: "./flag_images/028-puerto-rico.png",
    fact: "Puerto-Rico is in fact not a country. It is a commonwealth governed by the United States and is therefore not a sovereign state. It's residents are considered US Citizens but they cannot vote in the US elections.",
    id: 4,
    idName: "puerto-rico",
    className: "flag",
  },

  {
    country: "Puerto-Rico",
    imgSrc: "./flag_images/028-puerto-rico.png",
    fact: "Puerto-Rico is in fact not a country. It is a commonwealth governed by the United States and is therefore not a sovereign state. It's residents are considered US Citizens but they cannot vote in the US elections.",
    id: 4,
    idName: "puerto-rico2",
    className: "flag__pair",
  },

  {
    country: "Paraguay",
    imgSrc: "./flag_images/041-paraguay.png",
    fact: "The longest hot dog measured 203.80 m was made in Paraguay.",
    id: 5,
    idName: "paraguay",
    className: "flag",
  },

  {
    country: "Paraguay",
    imgSrc: "./flag_images/041-paraguay.png",
    fact: "The longest hot dog measured 203.80 m was made in Paraguay.",
    id: 5,
    idName: "paraguay2",
    className: "flag__pair",
  },

  {
    country: "Hungary",
    imgSrc: "./flag_images/115-hungary.png",
    fact: "There is a Hungarian equivalent of the boogeyman known as “Rézfaszú bagoly”, a giant owl with a copper penis",
    id: 6,
    idName: "hungary",
    className: "flag",
  },

  {
    country: "Hungary",
    imgSrc: "./flag_images/115-hungary.png",
    fact: "There is a Hungarian equivalent of the boogeyman known as “Rézfaszú bagoly”, a giant owl with a copper penis",
    id: 6,
    idName: "hungary2",
    className: "flag__pair",
  },

  {
    country: "Norway",
    imgSrc: "./flag_images/143-norway.png",
    fact: "Norway supplies London with a Christmas tree every year. To say thank you for their help during World War II, the city of Oslo sends Britain a tree every Christmas. The tall Norwegian spruce from the Oslo forest is placed prominently in Trafalgar Square.",
    id: 7,
    idName: "norway",
    className: "flag",
  },

  {
    country: "Norway",
    imgSrc: "./flag_images/143-norway.png",
    fact: "Norway supplies London with a Christmas tree every year. To say thank you for their help during World War II, the city of Oslo sends Britain a tree every Christmas. The tall Norwegian spruce is placed in Trafalgar Square.",
    id: 7,
    idName: "norway2",
    className: "flag__pair",
  },

  {
    country: "Croatia",
    imgSrc: "./flag_images/164-croatia.png",
    fact: "The Dalmatian dog is from Croatia originating from Dalmatia in Croatia. There are illustractions depicting the dalmatian in the 17th Century.",
    id: 8,
    idName: "croatia",
    className: "flag",
  },

  {
    country: "Croatia",
    imgSrc: "./flag_images/164-croatia.png",
    fact: "The Dalmatian dog is from Croatia originating from Dalmatia in Croatia. There are illustractions depicting the dalmatian in the 17th Century.",
    id: 8,
    idName: "croatia2",
    className: "flag__pair",
  },

  {
    country: "Colombia",
    imgSrc: "./flag_images/177-colombia.png",
    fact: "It is mandatory for radio and public television in Colombia to play the national anthem every day at 6am and 6pm.",
    id: 9,
    idName: "colombia",
    className: "flag",
  },

  {
    country: "Colombia",
    imgSrc: "./flag_images/177-colombia.png",
    fact: "It is mandatory for radio and public television in Colombia to play the national anthem every day at 6am and 6pm.",
    id: 9,
    idName: "colombia2",
    className: "flag__pair",
  },

  {
    country: "Netherlands",
    imgSrc: "./flag_images/237-netherlands.png",
    fact: "There are more bicycles in the Netherlands than people. There are over 22 million bicycles in the country and only 17 million residents. ",
    id: 10,
    idName: "netherlands",
    className: "flag",
  },

  {
    country: "Netherlands",
    imgSrc: "./flag_images/237-netherlands.png",
    fact: "There are more bicycles in the Netherlands than people. There are over 22 million bicycles in the country and only 17 million residents. ",
    id: 10,
    idName: "netherlands2",
    className: "flag__pair",
  },

  {
    country: "Mexico",
    imgSrc: "./flag_images/252-mexico.png",
    fact: "You Can’t Shave and Drive in Mexico. In 2008 the Mexican city of Torreon imposed fines for putting on make-up or shaving with an electric razor while driving.",
    id: 11,
    idName: "mexico",
    className: "flag",
  },

  {
    country: "Mexico",
    imgSrc: "./flag_images/252-mexico.png",
    fact: "You Can’t Shave and Drive in Mexico. In 2008 the Mexican city of Torreon imposed fines for putting on make-up or shaving with an electric razor while driving.",
    id: 11,
    idName: "mexico2",
    className: "flag__pair",
  },

  {
    country: "United Kingdom",
    imgSrc: "./flag_images/260-united-kingdom.png",
    fact: "Among Queen Elizabeth II’s more bizarre titles is ‘Seigneur of the Swans’. Officially, the reigning monarch owns any unmarked mute swan in open water in both England and Wales… so most of the swans in Britain.",
    id: 12,
    idName: "united-kingdom",
    className: "flag",
  },

  {
    country: "United Kingdom",
    imgSrc: "./flag_images/260-united-kingdom.png",
    fact: "Among Queen Elizabeth II’s more bizarre titles is ‘Seigneur of the Swans’. Officially, the reigning monarch owns any unmarked mute swan in open water in both England and Wales… so most of the swans in Britain.",
    id: 12,
    idName: "united-kingdom2",
    className: "flag__pair",
  },
];

countryFlags.forEach((country) => {
  // const flagHTML = document.createElement("div");
  // flagHTML.classList.add("flag");
  // const flagButton = document.createElement("button");
  // flagButton.classList.add("flag__image");
  // flagButton.classList.add(`${country.className}`);
  // flagButton.style.backgroundImage = `url(${country.imgSrc})`;

  const flagHTML = document.createElement("button");
  const flagImage = document.createElement("span");
  flagHTML.appendChild(flagImage);
  flagHTML.classList.add("flag__image");
  flagHTML.classList.add(`${country.className}`);
  flagHTML.style.backgroundImage = `url(${country.imgSrc})`;
  console.log(flagHTML);
  flagContainer.appendChild(flagHTML);
  flagHTML.addEventListener("click", () => {
    console.log("flag has been clicked");
  });
});

instructionsContainer.addEventListener("click", flagScreen);

const flagHTML = document.querySelectorAll("button");

console.log(flagHTML);

const flags = document.querySelectorAll(".flag__image");

console.log(flags);

function hideFlags() {
  flags.forEach((flag) => {
    flag.style.visibility = "hidden";
    flag.style.backgroundColor = "#a7ff83";
  });
  console.log("hiding");
}

let interval;

function flagScreen() {
  console.log("clicked");
  flagPage.style.display = "block";
  instructionsContainer.style.display = "none";

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
    findTheFlags();
  }, 10000);
}

// START GAME TIMER

function findTheFlags() {
  flags.forEach((flag) => {
    flag.addEventListener("click", () => {
      flag.style.visibility = "visible";
      console.log("find the flag working");
      console.log(flag);
    });
  });

  //   if (id === id {
  // /     // add to score display/
  //     let score = score + 1;
  //     flagScore.innerHTML = score;
  //     // keep both flags on display
  //     // hold timer
  //   } else {
  //     // hide flags - revert back to solid colour
  //     // run timer again
  //     // score stays the same
  //   }
}

// // end of game

// // if player finds all flags before timer ends, display WIN message
// // if player fails to find all flags before timer ends, display GAME OVER message and try again button

//   get CountryFactMessage() {
//     const countryHTML = `
//     <section class="winning-card">
//     <img src=${this.imgSRC} />
//     // <h2>"Well done ${this.getNameInput()} you've found the matching flag"</h2> create name function
//     <h3>Did you know?</h3>
//     <blockquote>${this.fact}</blockquote>
//     </section>`;
//   }
