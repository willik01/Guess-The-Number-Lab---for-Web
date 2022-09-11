const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    //Get guess from user
    game.getGuess();
    // console.log(guess);
  },
  getGuess: function() {
    let guess = 0;

    //guess must be numeric and between big/small number

    while (guess !== this.secretNum) {
      // while (guess !== this.secretNum && guess > game.smallestNum && guess < game.biggestNum) {
      guess = parseInt(prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}:`));
      game.prevGuesses.push(guess);
      console.log(game.secretNum);

      // return guess;
      if (guess >= game.smallestNum && guess <= game.biggestNum) {
        if (guess < game.secretNum) {
          console.log(`your guess is too low.
Your previous guesses: ${game.prevGuesses}`)

        } else if (guess > game.secretNum) {
          console.log(`your guess is too high.
Your previous guesses: ${game.prevGuesses}`)

        } else if (guess == game.secretNum) {
          console.log(`winner, winner, Chicken Dinner! You picked ${guess} and the secret number is ${game.secretNum}. You used ${game.prevGuesses.length} guesses.`)
        }

      } else {
        console.log(`That's out of bounds. Please pick a number between ${game.smallestNum} and ${game.biggestNum}`)
      }
    }
    // return guess;
  }
};

function recordGuess(playerGuess) {
  const displayGuess = document.createElement("p");
  displayGuess.className = "winnerDeclaration";
  displayGuess.innerText = "You guessed " + playerGuess + ".";
  // displayGuess.style.backgroundColor = "rgba(100, 100, 100)";
  displayGuess.style.width = "250px";
  document.getElementById('announcement').appendChild(displayGuess);

  const gameStatus = document.createElement("p");
  gameStatus.className = "winnerDeclaration";
  gameStatus.innerText = playerGuess;
  // gameStatus.style.backgroundColor = "rgba(130, 156, 170)";
  gameStatus.style.width = "250px";
  
  document.getElementById('announcement').appendChild(gameStatus);

}
// using onload because it wasn't finding the ID previously
window.onload = function(){
  
let submitGuess = document.getElementById("submitGuessBtn");
let inputGuess ="";
  
submitGuess.addEventListener('click', event => {
  inputGuess = document.getElementById("usersGuess").value;
  recordGuess(inputGuess);
  })          
}


// if (game.smallestNum <= guess <= game.biggestNum) { **WHY DOES THIS NOT WORK**  
// if (guess >= game.smallestNum && guess <= game.biggestNum) { ** HAVE TO USE THIS INSTEAD


// let sku = "";
// while (sku !== "quit") {
//   sku = prompt('Enter SKU or "quit" to exit: ');
//   if (sku in catalog) {
//     let price = catalog[sku];
//     if (sku !== "quit") alert(`The price of ${sku} is ${price}`);
//   } else if (sku !== "quit") {
//     console.log("out of stock");
//   }
// }