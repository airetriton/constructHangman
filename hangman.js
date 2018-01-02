var inquirer = require("inquirer");
var prompt = require("prompt");
var fs = require("fs");
var validator = require("validatorjs");

//create a JSON that holds words
var gameWords = require("./wordsGame.js")

console.log("Welcome to Hangman using Node");

// receive user input *works*
var userInput = process.argv[2];

var letterGuessed = [];

// word selected from gameWords
var secretWord = gameWords[Math.floor(Math.random() * gameWords.length)];
// console.log(secretWord) *works*

//breakup the secretWord into letters
var lettersInSecretWord = [];

//blanks_
var numBlanks = 0;

//holds letters and blanks

var blanksAndLetters = [];

//number of guesses per game
var guessesTotal = 8;

//counters
var winsCounter = 0;
var lossCounter = 0;

// var schema = {
// 	properties: {
// 		pattern: /^[a-zA-Z\-]+$/,
// 		message: "Selection must be only letters or spaces",
// 		required: true
// 	}
// };

var questions = [
  {
    type: "input",
    name: "letter",
    message: "Please guess a letter",
    validate: function(value){
      var pass = value.match (/^[a-zA-Z\-]+$/);
      if (pass) {
        return true;
      }
      return "Selection must only be letters or spaces"
    }
  },
  {
    type: "confirm",
    name: "askAgain",
    message: "Do you want to guess another letter(just hit enter for Yes)?",
    default: true
  }

  ];

function playGame() {
  wordSelected();
  inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, ' '));
    checkLetters();
    letterGuessed.push(answers.letter);

  })
};

playGame();

//select a word from the secretWords array
function wordSelected() {
	// console.log(secretWord);
	letters = secretWord.split("");
	lettersInSecretWord.push(letters);
	numBlanks = lettersInSecretWord.length;
	for(var i = 0; i < numBlanks; i++) {
		blanksAndLetters.push("_");
		console.log(blanksAndLetters);
	}
};



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

  // If the letter exists somewhere in the word, figure out where
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

    // Log the current blanks and letters.
    console.log(blanksAndLetters);
  }

  // If the letter doesn't exist at all...
  else {

    // We subtract one of the guesses.
    guessesTotal--;

  }

}

function roundComplete() {

  // If our hangman string equals the solution.
  // (meaning that we guessed all the letters to match the solution)...
  if (lettersInChosenWord.toString() === blanksAndLetters.toString()) {

    // Add to the win counter
    winCounter++;

    // Give the user an alert
    console.log("You win!");
    inquirer.prompt({	
    		type:"confirm",
    		name: "play again",
    		message: "Would you like to play again?",
    		default: true
    	}).then(function(answers){
    	if(answers.confirm){
    		console.log("Games One: " + winCounter + " | Games Lost: " + lossCounter + " | guessesTotal: " + guessesTotal);
    		startGame();
    	}
    	else{
    		console.log("Come back another day to play")
    		process.exit();
    	}
    })

   }

  // If we've run out of guesses
  else if (guessesTotal === 0) {

    // Add to the loss counter
    lossCounter++;

    // Give the user an alert
    console.log("You lose");

    inquirer.prompt({	
    		type:"confirm",
    		name: "play again",
    		message: "Would you like to play again?",
    		default: true
    	}).then(function(answers2){
    	if(answers2.confirm){
    		console.log("Games One: " + winCounter + " | Games Lost: " + lossCounter + " | guessesTotal: " + guessesTotal);
    		startGame();
    	}
    	else{
    		console.log("Come back another day to play");
    		console.log("Games One: " + winCounter + " | Games Lost: " + lossCounter + " | guessesTotal: " + guessesTotal);
    		process.exit();
    	}
    })

   }

 };

 roundComplete();





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


//look to see if the letter guessed has already been guessed

//does the letter input match any letters in the secretWord

// compare letters in the word to the letter guessed

//create letter specific logic

//keep track 0f uders remaining guesses

//prompt user if they want to end the game

//each constructor in its own file