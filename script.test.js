const functions= require("/script.js");
const selectRandomWord= functions.selectRandomWord;
const myCorrectlyGuessedLetters= functions.myCorrectlyGuessedLetters;
const myWronglyGuessedLetters=functions.myWronglyGuessedLetters;



test("Komt deze letter voor in het woord?", function(){

  const myRandomWord="hoelahoep";
  const myRandomSplittedWord= myRandomWord.split("");
  const myInputArray=["a", "h", "g"];

  const output=myCorrectlyGuessedLetters(myRandomSplittedWord, myInputArray);

  expect(output).toBe("h");

})
