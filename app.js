let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function change(letter) {
  switch (letter) {
    case "r": return "Rock";
      break;
    case "p": return "Paper";
      break;
    case "s": return "Scissors";
      break;
  }
}

function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = ` ${change(userChoice)} beats ${change(compChoice)}. You won 🍻`;
}

function lose(userChoice, compChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${change(compChoice)} beats ${change(userChoice)}. You lost 💩`;
}

function draw(userChoice, compChoice) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${change(userChoice)} equals ${change(compChoice)}. It's time for super over 🤝`
}

function game(userChoice) {
  let compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  return choices[Math.floor(Math.random() * 3)];
}
function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}
main();
