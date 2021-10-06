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

const countryFlags = [
  {
    country = "Mauritius",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\001-mauritius.png",
    fact =  "Mauritius was the only known habitat of the Dodo",
    id =  1, 
    className = "mauritius",
  },

  {
    country = "Mauritius",
    imgSrc =  "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\001-mauritius.png",
    fact = "Mauritius was the only known habitat of the Dodo",
    id = 1, 
    className = "mauritius2",
  },

  {
    country = "Ireland", 
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\179-ireland.png",
    fact = "St Patrick wasn't Irish! Contrary to popular belief, and despite being the Patron Saint of Ireland, St. Patrick was not actually from Ireland. Born in Wales around 386 AD.",
    id = 2,
    className: "ireland",
  },

  {
    country = "Ireland", 
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\179-ireland.png",
    fact = "St Patrick wasn't Irish! Contrary to popular belief, and despite being the Patron Saint of Ireland, St. Patrick was not actually from Ireland. Born in Wales around 386 AD.",
    id = 2,
    className= "ireland2",

  }, 

  {
    country ="Italy",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\013-italy.png",
    fact = "The average Italian consumes 25kg of pasta per year. To put that into perspective, that’s even heavier than your carry-on luggage for an economy airline flight.",
    id = 3,
    className = "italy"
  },

  {
    country ="Italy",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\013-italy.png",
    fact = "The average Italian consumes 25kg of pasta per year. To put that into perspective, that’s even heavier than your carry-on luggage for an economy airline flight.",
    id = 3,
    className = "italy2"
  },

  {
    country ="Puerto-Rico",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\028-puerto-rico.png",
    fact = "Puerto-Rico is in fact not a country. It is a commonwealth governed by the United States and is therefore not a sovereign state. It's residents are considered US Citizens but they cannot vote in the US elections.",
    id = 4,
    className = "puerto-rico"

  },

  {
    country ="Puerto-Rico",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\028-puerto-rico.png",
    fact = "Puerto-Rico is in fact not a country. It is a commonwealth governed by the United States and is therefore not a sovereign state. It's residents are considered US Citizens but they cannot vote in the US elections.",
    id = 4,
    className = "puerto-rico2"
  }, 

  {
    country = "Paraguay",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\041-paraguay.png",
    fact = "The longest hot dog measured 203.80 m was made in Paraguay.",
    id = 5,
    className = "paraguay"
  },

  {
    country = "Paraguay",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\041-paraguay.png",
    fact = "The longest hot dog measured 203.80 m was made in Paraguay.",
    id = 5,
    className = "paraguay2"
  },

  {
    country = "Hungary",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\115-hungary.png",
    fact = "There is a Hungarian equivalent of the boogeyman known as “Rézfaszú bagoly”, a giant owl with a copper penis",
    id = 6,
    className = "hungary"
  },

  {
    country = "Hungary",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\115-hungary.png",
    fact = "There is a Hungarian equivalent of the boogeyman known as “Rézfaszú bagoly”, a giant owl with a copper penis",
    id = 6,
    className = "hungary2"
  },

  {
    country ="Norway",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\143-norway.png",
    fact = "Norway supplies London with a Christmas tree every year. To say thank you for their help during World War II, the city of Oslo sends Britain a tree every Christmas. The tall Norwegian spruce from the Oslo forest is placed prominently in Trafalgar Square."
    id = 7,
    className = "norway"
  },

  {
    country ="Norway",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\143-norway.png",
    fact = "Norway supplies London with a Christmas tree every year. To say thank you for their help during World War II, the city of Oslo sends Britain a tree every Christmas. The tall Norwegian spruce is placed in Trafalgar Square."
    id = 7,
    className = "norway2"
  },

  {  
    country = "Croatia",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\164-croatia.png",
    fact = "The Dalmatian dog is from Croatia originating from Dalmatia in Croatia. There are illustractions depicting the dalmatian in the 17th Century.",
    id = 8,
    className = "croatia"
    },

  {  
    country = "Croatia",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\164-croatia.png",
    fact = "The Dalmatian dog is from Croatia originating from Dalmatia in Croatia. There are illustractions depicting the dalmatian in the 17th Century.",
    id = 8,
    className = "croatia2"
    },

  {
    country = "Colombia",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\177-colombia.png",
    fact = "It is mandatory for radio and public television in Colombia to play the national anthem every day at 6am and 6pm.",
    id = 9,
    className = "colombia"
  },

  {
    country = "Colombia",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\177-colombia.png",
    fact = "It is mandatory for radio and public television in Colombia to play the national anthem every day at 6am and 6pm.",
    id = 9,
    className = "colombia2"
  },

  {
    country = "Netherlands",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\237-netherlands.png",
    fact = "There are more bicycles in the Netherlands than people. There are over 22 million bicycles in the country and only 17 million residents. ",
    id = 10,
    className = "netherlands"
  },

  {
    country = "Netherlands",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\237-netherlands.png",
    fact = "There are more bicycles in the Netherlands than people. There are over 22 million bicycles in the country and only 17 million residents. ",
    id = 10,
    className = "netherlands2"
  },

  {
    country = "Mexico",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\252-mexico.png",
    fact = "You Can’t Shave and Drive in Mexico. In 2008 the Mexican city of Torreon imposed fines for putting on make-up or shaving with an electric razor while driving.",
    id = 11,
    className = "mexico"

  },

  {
    country = "Mexico",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\252-mexico.png",
    fact = "You Can’t Shave and Drive in Mexico. In 2008 the Mexican city of Torreon imposed fines for putting on make-up or shaving with an electric razor while driving.",
    id = 11,
    className = "mexico2"

  },

  {
  country = "United Kingdom",
    imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\260-united-kingdom.png",
    fact = "Among Queen Elizabeth II’s more bizarre titles is ‘Seigneur of the Swans’. Officially, the reigning monarch owns any unmarked mute swan in open water in both England and Wales… so most of the swans in Britain.",
    id = 12,
    className = "united-kingdom"
  },

  {
    country = "United Kingdom",
      imgSrc = "C:\Users\Sasha O'Donovan\Documents\nology\projects\memory_game\nology_javascript_game\flag_images\260-united-kingdom.png",
      fact = "Among Queen Elizabeth II’s more bizarre titles is ‘Seigneur of the Swans’. Officially, the reigning monarch owns any unmarked mute swan in open water in both England and Wales… so most of the swans in Britain.",
      id = 12,
      className = "united-kingdom2"
  }

]


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


// // end of game

// // if player finds all flags before timer ends, display WIN message
// // if player fails to find all flags before timer ends, display GAME OVER message and try again button
