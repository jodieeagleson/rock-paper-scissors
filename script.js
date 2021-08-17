const computerThrows = ["rock", "paper", "scissors"];
let playerInput = "";
let playerWins = "";
let computerWins = "";
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
      computerWins = computerWins + 1;
      return "Computer wins";
    } else if (cinput === "scissors") {
      playerWins = playerWins + 1;
      return "Player wins";
    } else {
      throw Error("Items are the same");
    }
  } else if (pinput === "paper") {
    if (cinput === "rock") {
      playerWins = playerWins + 1;
      return "Player wins";
    } else if (cinput === "scissors") {
      computerWins = computerWins + 1;
      return "Computer wins";
    } else {
      throw Error("Items are the same");
    }
  } else if (pinput === "scissors") {
    if (cinput === "rock") {
      computerWins = computerWins + 1;
      return "Computer wins";
    } else if (cinput === "paper") {
      playerWins = playerWins + 1;
      return "Player wins";
    } else {
      throw Error("Items are the same");
    }
  } else {
    throw Error("Your machine gun and/or laser exploded and broke the game; try again with Rock, Paper or Scissors!");
  }
};

const playRound = () => {
  if (playerInputLowerCase === computerSelection) {
    playerWins = playerWins + 1;
    computerWins = computerWins +1;
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
    console.log(
      "The player throws" +
        " " +
        playerInputLowerCase +
        "!!" +
        " " +
        "The computer throws" +
        " " +
        computerSelection +
        "!!" +
        " " +
        playRound()
    );
  }
};

const scoreTally = (pwin, cwin) => {
  if (pwin > cwin) {
    console.log("Player wins!");
  } else if (pwin < cwin) {
    console.log("Computer wins!");
  } else {
    console.log("It's a draw! Good game!");
  }
};

game();
scoreTally(playerWins, computerWins);