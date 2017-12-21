/*
GAME FUNCTION :
- Player must guess a number between a min and a max
- Player gets a certain amount of guesses
- Notify the player of the correct answer if he looses
- Let player choose to play again at the end
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI element
const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

//Assign UI Min and Max
minNum.textContent = min;
minNum.texContent = max;

//Play Again Event Listener
game.addEventListener("mousedown", function(e){
  if(e.target.className === "play-again"){
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener("click", function(){
  let guess = parseInt(guessInput.value);

  //Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }


//Check if won
if(guess === winningNum) {
  //Game over - won
  gameOver(true, `${winningNum} is correct, YOU WIN!`);
  

} else {
  // wrong number
  guessesLeft -= 1;

  if(guessesLeft === 0) {
    //Game Over - Lost
    gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);    
  } else {
    //Game Continues - answer wrong

    //Change Color Border
    guessInput.style.borderColor = "red";

    //Clear input
    guessInput.value = "";

    // Telling user its the wrong number
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
  }
    


  }
});

// Game Over function

function gameOver(won,msg){
  let color;
  won === true ? color = "green" : color = "red";
  //disable Input
  guessInput.disabled = true;
  // change boder color
  guessInput.style.color = color;
  //set text color
  message.style.color = color;
  //Set Game Over Message
  setMessage(msg);
  // Play Again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

//Get winning Number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
//Set a message
function setMessage(msg,color){
  message.textContent = msg;
  message.style.color = color;
}


