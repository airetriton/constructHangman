var inquirer = require("inquirer");
var prompt = require("prompt");
var fs = require("fs");
var validator = require("validatorjs");

//create a JSON that holds words
var gameWords = require("./wordsGame.js")

//file that holds the guessed letters
var letters = require("./letters.txt");


// receive user input
var userInput = process.argv[3];


// word selected from gameWords
var secretWord = "";

//breakup the secretWord into letters
var lettersInSecretWord = [];

//blanks_
var numBlanks = 0;

//holds letters and blanks

var blanksAndLetters = [];

// holds the letters incorrectly guessed
var lettersGuessed = "";

//number of guesses per game
var guessesTotal = 8;

//counters
var winsCounter = 0;
var lossCounter = 0;

//select a word from the secretWords array
var wordSelected = function(){
	gameWords[Math.floor(Math.random() * gameWords.length)];
	console.log(gameWords);
	lettersInSecretWord = gameWords.split("");
	numBlanks = lettersInSecretWord.length;
	for(var i = 0; i < numBlanks; i++) {
		blanksAndLetters.push("_");
		console.log(blanksAndLetters);
	}
};

var validation = new validator(userInput, alpha);


//look to see if the letter guessed has already been guessed
if (lettersGuessed === userInput) {
	console.log("You've already guessed this letter, please choose again");
}
else {
	letttersGuessed.push(userInput);//fs.appendFile(textFile, userInput)
	console.log("You guessed correct, pick another letter");
};


//does the letter input match any letters in the secretWord

// compare letters in the word to the letter guessed

//create letter specific logic

//keep track 0f uders remaining guesses

//prompt user if they want to end the game

//each constructor in its own file

function checkLetters(letter) {

  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var i = 0; i < numBlanks; i++) {

    if (secretWord[i] === letter) {

      // If the letter exists then toggle this boolean to true.
      // This will be used in the next step.
      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word,
  // then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word
    for (var j = 0; j < numBlanks; j++) {

      // Populate the blanksAndLetters with every instance of the letter.
      if (secretWord[j] === letter) {

        // Here we set specific blank spaces to equal the correct letter
        // when there is a match.
        blanksAndLetters[j] = letter;
      }
    }

    // Log the current blanks and successes for testing.
    console.log(blanksAndLetters);
  }

  // If the letter doesn't exist at all...
  else {

    // Then we add the letter to the list of wrong letters.
    lettersGuessed.push(letter);

    // We also subtract one of the guesses.
    guessesTotal--;

  }

}

function roundComplete() {

  // First, log an initial status update in the console
  // telling us how many wins, losses, and guesses are left.
  console.log("Games One: " + winCounter + " | Games Lost: " + lossCounter + " | guessesTotal: " + guessesTotal);

  
  // If our hangman string equals the solution.
  // (meaning that we guessed all the letters to match the solution)...
  if (lettersInChosenWord.toString() === blanksAndLetters.toString()) {

    // Add to the win counter
    winCounter++;

    // Give the user an alert
    console.log("You win!");

    // Restart the game
    startGame();
  }

  // If we've run out of guesses
  else if (guessesTotal === 0) {

    // Add to the loss counter
    lossCounter++;

    // Give the user an alert
    alert("You lose");

    // Update the loss counter in the HTML
    document.getElementById("loss-counter").innerHTML = lossCounter;

    // Restart the game
    startGame();

  }

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================

// Starts the Game by running the startGame() function
// startGame();

// // Then initiates the function for capturing key clicks.
// document.onkeyup = function(event) {

//   // Converts all key clicks to lowercase letters.
//   letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

//   // Runs the code to check for correct guesses.
//   checkLetters(letterGuessed);

//   // Runs the code that ends each round.
//   roundComplete();
// };
