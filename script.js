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
  const myRandomWord= wordArray[randomIndex];
  console.log(myRandomWord);
  return myRandomWord
};

//Haalt al geraden letters van het woord af

const wordGuessed = function(aRandomSplittedWord, inputArray) {

  let remainingLetters = aRandomSplittedWord.filter(function(letter) {
    return !inputArray.includes(letter);
  });
  return remainingLetters.length === 0;
};

//verwijdert value van input
const clearInputValue = function() {
  document.querySelector("input").value = "";
};

//win gif komt tevoorschijn

const winTheGame = function() {
  document.querySelector(".win").style.display = "block";

};

//loss gif komt tevoorschijn

const loseTheGame = function() {
  document.querySelector(".lose").style.display = "block";

};

//Laat woord zien wat geraden moest worden op display

const showTheRandomWord = function(aRandomWord) {
  document.querySelector(".lose p span").innerHTML = `"${aRandomWord}"`;
};

//Laat beurten zien op display
const updateTriesDisplay = function(tries) {
  tries++;
  document.querySelector(".lives span").innerHTML = 5 - tries;
};

//Laat verkeerd geraden letters zien

const myWronglyGuessedLetters = function(aRandomSplittedWord, inputArray) {
  let wrongLetters = inputArray.filter(function(letter) {
    return !aRandomSplittedWord.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

//Laat goed geraden letters zien

const myCorrectlyGuessedLetters= function(aRandomSplittedWord, inputArray) {
  let wordDisplay = aRandomSplittedWord.map(function(letter) {
    if (inputArray.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = wordDisplay.join(" ");
};

//FUNCTIE VOOR HET RADEN VAN HET WOORD

const putInLetters = function(gameOver, inputArray, aRandomSplittedWord) {

  if (gameOver) {
    return;
  }
  const guessedLetter = document.querySelector("input").value;
  inputArray.push(guessedLetter);
  myCorrectlyGuessedLetters(aRandomSplittedWord, inputArray);
  myWronglyGuessedLetters(aRandomSplittedWord, inputArray);
  clearInputValue();

  if (inputArray.includes(guessedLetter) || guessedLetter === "") {
    return;
  }

  if (!aRandomSplittedWord.includes(guessedLetter)) {
    updateTriesDisplay();
  }


  if (wordGuessed(aRandomSplittedWord, inputArray)) {
    winTheGame();
    gameOver=true;
  } else if (tries >= 5) {
    loseTheGame();
    gameOver=true;
  }
};


function beginTheGame() {

  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";
  document.querySelector(".lives span").innerHTML = 5 - 0;
  let allMyGuessedLetters=[];
  let aRandomWord=selectRandomWord(wordList);
  let splitMyWord= aRandomWord.split("");
  showTheRandomWord(aRandomWord);
  myCorrectlyGuessedLetters(splitMyWord, allMyGuessedLetters);
  myWronglyGuessedLetters(splitMyWord, allMyGuessedLetters);


}

document.addEventListener("DOMContentLoaded", function() {
  beginTheGame();
  document.querySelector(".restart").addEventListener("click", beginTheGame)
  document.querySelector(".guess").addEventListener("click", putInLetters)
});


module.exports={beginTheGame, putInLetters, myCorrectlyGuessedLetters, myWronglyGuessedLetters, selectRandomWord, updateTriesDisplay, showTheRandomWord, winTheGame, loseTheGame, wordList, clearInputValue, wordGuessed};
