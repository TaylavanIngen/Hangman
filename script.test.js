const functions= require("./script.js");
const selectRandomWord= functions.selectRandomWord;
const loseTheGame=functions.loseTheGame;
const winTheGame=functions.winTheGame;
const myCorrectlyGuessedLetters= functions.myCorrectlyGuessedLetters;
const myWronglyGuessedLetters=functions.myWronglyGuessedLetters;



test("Komt deze letter voor in het woord?", function(){

  const myRandomWord="hoelahoep";
  const myRandomSplittedWord= myRandomWord.split("");
  const myInputArray=["a", "h", "g"];

  const output= myCorrectlyGuessedLetters(myRandomSplittedWord, myInputArray);

  expect(output).toEqual(expect.arrayContaining(["h", "a"]));

})


test("Als ik verlies komt de loseDiv tevoorschijn", function(){

  document.body.innerHTML= `<div class= "lose" style="display: none;" >`+`<h2>You lost...</h2>`+ `<p>The chosen word was: <span></span></p></div>`;
  const loseDiv= document.querySelector(".lose");
  loseTheGame();

    expect(loseDiv.style.display).toBe("block");


})

test("Mijn lijst van letters die geraden zijn wordt geupdated", function(){

const input="b";
functie(){
push input naar geradenletterarray
}

const output= functie("b")
  expect(output).toEqual(expect.arrayContaining(["b"]))
})

// 1. starten van de game d.m.v. het kiezen van het woord
// 2. checken of een letter voorkomt in het woord
// 3. updaten van het aantal pogingen van de gebruiker
// 4. updaten van de lijst met letters die al geraden zijn door de gebruiker
// 5. verliezen van de game wanneer er geen pogingen meer over zijn
// 6. winnen van de game
