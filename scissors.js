let userScore = 0;
let compScore = 0;

const userMoveImg = document.getElementById("user-move");
const compMoveImg = document.getElementById("computer-move");
const msg = document.getElementById("msg");
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("computer-score");
const resetbtn = document.getElementById("resetbtn");

const choices = document.querySelectorAll(".choice");

const compChoice = () => {
  const options = ["stone", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    const computerChoice = compChoice();

    userMoveImg.innerHTML = `<source src="${userChoice}.mp4" type="video/mp4">`;
    compMoveImg.innerHTML = `<source src="${computerChoice}.mp4" type="video/mp4">`;

    userMoveImg.load();
    compMoveImg.load();

    if (userChoice === computerChoice) {
      msg.textContent = `It's a draw! Both chose ${userChoice}`;
    } 
    else if (
      (userChoice === "stone" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "stone") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      userScore++;
      msg.textContent = `You win! ${userChoice} beats ${computerChoice}`;
    } else {
      compScore++;
      msg.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
    }

    userScoreSpan.textContent = userScore;
    compScoreSpan.textContent = compScore;
  });
});

resetbtn.addEventListener("click", function() {
    userScoreSpan.textContent = "0";
    compScoreSpan.textContent = "0";
})