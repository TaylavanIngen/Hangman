// Woordenlijst
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
  const myRandomWord = wordArray[randomIndex];
  console.log(myRandomWord);
  return myRandomWord;
};

//Haalt al geraden letters van het woord af
const wordGuessed = function(aRandomSplittedWord, inputArray) {
  let remaining = aRandomSplittedWord.filter(function(letter) {
    return !inputArray.includes(letter);
  });
  return remaining.length === 0;
};

//Verwijdert value van input
const clearInputValue = function() {
  document.querySelector("input").value = "";
};

//Wanneer je het spel gewonnen hebt
const winTheGame = function() {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};

//Wanneer je het spel verloren hebt
const loseTheGame = function() {
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

//Laat het niet geraden woord zien op de DOM
const showTheRandomWord = function(aRandomWord) {
  document.querySelector(".lose p span").innerHTML = `${aRandomWord.join("")}`;
};

//Laat resterende hoeveelheid beurten zien op de DOM
const updateTriesDisplay = function(tries) {
  tries++;
  document.querySelector(".lives span").innerHTML = 5 - tries;
  return tries;

};

//Laat verkeerd geraden letters zien
const myWronglyGuessedLetters = function(aRandomSplittedWord, inputArray) {
  let wrongLetters = inputArray.filter(function(letter) {
    return !aRandomSplittedWord.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

//Laat goed geraden letters zien
const myCorrectlyGuessedLetters = function(aRandomSplittedWord, inputArray) {
  let wordDisplay = aRandomSplittedWord.map(function(letter) {
    if (inputArray.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });

  document.querySelector(".the_word").innerHTML = wordDisplay.join(" ");
};

//Update de inputArray

const updateInputArray=function(letter, inputArray){

inputArray.push(letter);
console.log(inputArray);
return inputArray;

}

//Functie voor het raden van het woord
const putInLetters = function() {
  if (gameOver) {
    return;
  }
  const guessedLetter = document.querySelector("input").value;
  clearInputValue();

  if (inputArray.includes(guessedLetter) || guessedLetter === "") {
    return;
  }

  if (!word.includes(guessedLetter)) {

    updateTriesDisplay(tries);
  }

  updateInputArray(guessedLetter, inputArray);
  myCorrectlyGuessedLetters(word, inputArray);
  myWronglyGuessedLetters(word, inputArray);

  if (wordGuessed(word, inputArray)) {
    winTheGame();
  } else if (tries >= 5) {
    loseTheGame();
  }
};

function beginTheGame() {
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  clearInputValue();

  word = selectRandomWord(wordList).split("");
  showTheRandomWord(word);
  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  inputArray = [];
  myCorrectlyGuessedLetters(word, inputArray);
  myWronglyGuessedLetters(word, inputArray);
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".guess").addEventListener("click", putInLetters);
  document
    .querySelector(".restart")
    .addEventListener("click", beginTheGame);
  beginTheGame();
});

// module.exports={beginTheGame, loseTheGame, winTheGame, selectRandomWord, showTheRandomWord, myCorrectlyGuessedLetters, myWronglyGuessedLetters,
// putInLetters, clearInputValue, updateTriesDisplay, updateInputArray, wordGuessed}
