const computerThrows = ["rock", "paper", "scissors"];
let playerInput = "";
let playerInputLowerCase = playerInput.toLowerCase();

const computerPlay = () => {
  const roll = Math.floor(Math.random() * computerThrows.length);
  //this returns the computerThrow array position based on the roll value
  return computerThrows[roll];
};

let computerSelection = computerPlay();
const compareTwoItemsAndDecideWhoWins = (pinput, cinput) => {
  if (pinput === "rock") {
    if (cinput === "paper") {
      return "Computer wins";
    } else if (cinput === "scissors") {
      return "Player wins";
    } else {
      throw Error("Items are the same");
    }
  } else if (pinput === "paper") {
    if (cinput === "rock") {
      return "Player wins";
    } else if (cinput === "scissors") {
      return "Computer wins";
    } else {
      throw Error("Items are the same");
    }
  } else if (pinput === "scissors") {
    if (cinput === "rock") {
      return "Computer wins";
    } else if (cinput === "paper") {
      return "Player wins";
    } else {
      throw Error("Items are the same");
    }
  } else {
    throw Error("something's up");
  }
};

const playRound = () => {
  if (playerInputLowerCase === computerSelection) {
    return "It's a Tie!";
  } else {
    return compareTwoItemsAndDecideWhoWins(
      playerInputLowerCase,
      computerSelection
    );
  }
};

const game = () => {
  for (let singleRound = 0; singleRound < 5; singleRound++) {
    playerInput = prompt("Rock, Paper or Scissors - which do you choose?");
    playerInputLowerCase = playerInput.toLowerCase();
    computerSelection = computerPlay();
    console.log("The player throws" + " " + playerInputLowerCase + "!!" + " " + "The computer throws" + " " + computerSelection + "!!" + " " + playRound());
  } 
   console.log("GOOD GAME!");
};

game();

// Next time, need to keeps score and reports a winner or loser at the end. 
// change throwing an error, re-prompt for better value