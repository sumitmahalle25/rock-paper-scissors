let humanScore = 0;
let computerScore = 0;

const result = document.querySelector("#result");
const score = document.querySelector("#score");
score.textContent = "Player: 0  Computer: 0";

const restartBtn = document.querySelector("#restart");
restartBtn.style.display = "none";
restartBtn.addEventListener("click", restartGame);

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
  console.log("rock");
  playRound("rock");
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
  console.log("paper");
  playRound("paper");
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
  console.log("Scissors");
  playRound("scissors");
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";

  return "scissors";
}

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  restartBtn.style.display = "inline-block";
}

function checkWinner() {
  if (humanScore === 5) {
    result.textContent = "🎉 You won the game!";

    disableButtons();
  }

  if (computerScore === 5) {
    result.textContent = "💻 Computer wins the game!";

    disableButtons();
  }
}
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  if (humanChoice === computerChoice) {
    result.textContent = `Tie! Both chose ${humanChoice}`;

    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
  }

  score.textContent = `Player: ${humanScore}
Computer: ${computerScore}`;

  checkWinner();
}

function restartGame() {
  humanScore = 0;
  computerScore = 0;

  score.textContent = `Player: 0 Computer: 0`;
  result.textContent = "";

  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  restartBtn.style.display = "none";
}
