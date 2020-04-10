// Initialize ALL global variables here

let allMyInputs=[]
let gameOver;
let tries = 0;

// woordenlijst
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];


//Selecteert random woord
const selectRandomWord = function(wordArray) {
  let randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
};

//Haalt al geraden letters van het woord af

const wordGuessed = function(randomWord, inputArray) {

  let remainingLetters = randomWord.filter(function(letter) {
    return !inputArray.includes(letter);
  });
  return remainingLetters.length === 0;
};

//verwijdert value van input
const cleanInputValue = function() {
  document.querySelector("input").value = "";
};

//win gif komt tevoorschijn

const winTheGame = function() {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};

//loss gif komt tevoorschijn

const loseTheGame = function() {
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

//Laat woord zien wat geraden moest worden op display

const showTheRandomWord = function(randomWord) {
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
};

//Laat beurten zien op display
const updateTriesDisplay = function(tries) {
  tries++;
  document.querySelector(".lives span").innerHTML = 5 - tries;
};

//Laat verkeerd geraden letters zien

const myWronglyGuessedLetters = function(randomWord, inputArray) {
  let wrongLetters = inputArray.filter(function(letter) {
    return !randomWord.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

//Laat goed geraden letters zien

const myCorrectlyGuessedLetters= function(randomWord, inputArray) {
  let wordDisplay = word.map(function(letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = wordDisplay.join(" ");
};

//FUNCTIE VOOR HET RADEN VAN HET WOORD

const putInLetters = function() {
  if (gameOver) {
    return;
  }
  const input1 = document.querySelector("input").value;
  clearInputValue();

  if (inputs.includes(input1) || input1 === "") {
    return;
  }

  if (!word.includes(input1)) {
    updateTriesDisplay();
  }

  inputs.push(input1);
  myCorrectlyGuessedLetters(word, inputs);
  myWronglyGuessedLetters(word, inputs);

  if (wordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= 5) {
    loseTheGame();
  }
};


function beginTheGame() {
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  word = pickAWordFromList(wordList).split("");
  showTheRandomWord(word);
  word;

  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  inputs = [];
  theWord(word, inputs);
  letters(word, inputs);
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".guess").addEventListener("click", putInLetters);
  document
    .querySelector(".restart")
    .addEventListener("click", beginTheGame);
  beginTheGame();
});
