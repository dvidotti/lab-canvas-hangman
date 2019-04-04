let hangman;

function Hangman() {
    this.words = [ 'saxofone', 'piano', 'guitarra', 'gaita'];
    this.secretWord = wordRandom ;
    this.letters = [] ;
    this.guessedLetter ='';
    this.errorsLeft = 10;
}
 let wordRandom ='';
Hangman.prototype.getWord = function () {
   wordRandom = this.words[Math.floor(this.words.length * Math.random ())];
  return wordRandom;
};


let codeKey = Hangman.prototype.checkIfLetter = function (keyCode) {
 if(keyCode >= 64 && keyCode <= 123) {
   return true;
 } else {
   return false;
 }
   
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (key === codeKey){
    return true;
  } else {
  return false;
  }

};

Hangman.prototype.addCorrectLetter = function (i) {
  for (i = 0; i < wordRandom.length; i += 1) {
    if (wordRandom[i] === guessedLetter){
      return this.guessedLetter = wordRandom[i] + guessedLetter;
    } else {
      return false
    }
  }
  

};

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
