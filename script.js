let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const roundResult = document.querySelector("#round-result");
const scoreDisplay = document.querySelector("#score");
const winnerDisplay = document.querySelector("#winner");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function updateScore() {
  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkWinner() {
  if (humanScore === 5) {
    winnerDisplay.textContent = "You won the game!";
    gameOver = true;
  } else if (computerScore === 5) {
    winnerDisplay.textContent = "The computer won the game!";
    gameOver = true;
  }
}

function playRound(humanChoice, computerChoice) {
  if (gameOver) return;

  if (humanChoice === computerChoice) {
    roundResult.textContent = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  updateScore();
  checkWinner();
}

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});