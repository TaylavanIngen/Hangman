const functions= require("./script.js");
const selectRandomWord= functions.selectRandomWord;
const loseTheGame=functions.loseTheGame;
const winTheGame=functions.winTheGame;
const updateTriesDisplay=functions.updateTriesDisplay;
const updateInputArray=functions.updateInputArray;
const myCorrectlyGuessedLetters= functions.myCorrectlyGuessedLetters;
const myWronglyGuessedLetters=functions.myWronglyGuessedLetters;



test("Komt deze letter voor in het woord?", function(){

  document.body.innerHTML= "<div class='the_word'>"+"_ _ _ _ _</div>";

  const myRandomWord="hoelahoep";
  const myRandomSplittedWord= myRandomWord.split("");
  const myInputArray=["a", "h", "g"];
  myCorrectlyGuessedLetters(myRandomSplittedWord, myInputArray);
  let myDivText=document.querySelector(".the_word").innerHTML;

  expect(myDivText).toEqual("h _ _ _ a h _ _ _");

})


test("Als ik verlies komt de loseDiv tevoorschijn", function(){

  document.body.innerHTML= `<div class= "lose" style="display: none;" >`+`<h2>You lost...</h2>`+ `<p>The chosen word was: <span></span></p></div>`;
  let loseDiv= document.querySelector(".lose");
  loseTheGame();

    expect(loseDiv.style.display).toBe("block");

})

test("Mijn lijst van letters die geraden zijn wordt geupdated", function(){

const input="b";
let inputArray=["c", "f"];
const output=updateInputArray(input, inputArray);

  expect(output).toEqual(expect.arrayContaining(["b"]))
})

test("Mijn tries worden geupdated", function(){
document.body.innerHTML= "<p class='lives'>Lives remaining:<br><span></span></p>"
let tries=2;

const output=updateTriesDisplay(tries);
let spanHTML= document.querySelector(".lives span").innerHTML;

expect(output).toBe(3);
expect(spanHTML).toBe("2");

})

// 1. starten van de game d.m.v. het kiezen van het woord
// 2. checken of een letter voorkomt in het woord
// 3. updaten van het aantal pogingen van de gebruiker
// 4. updaten van de lijst met letters die al geraden zijn door de gebruiker
// 5. verliezen van de game wanneer er geen pogingen meer over zijn
// 6. winnen van de game
