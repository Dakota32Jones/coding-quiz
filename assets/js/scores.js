// save and clear high scores and retrieve scores from local storage
var wrapperContainer = document.getElementsByClassName("wrapper");
clrBtn = document.getElementById("#clear");

function displayScore() {
  var playerScore = JSON.parse(window.localStorage.getItem("highscores")) || [];
  console.log(playerScore);

  if (!playerScore) {
    displayScore = [];
  }

  localStorage.setItem("highscores", JSON.stringify(playerScore));

  playerScore.push(displayScore);
  console.log(playerScore);
}

function showScores() {
  var liTag = document.getElementById("#highscores");
  liTag = document.createElement("li");
  liTag.textContent = initialsEl;
  wrapperContainer.appendChild(liTag);
}

function clearScore(e) {
  e.preventDefault();
  window.localStorage.removeItem("highscores");
  window.localStorage.reload();
}

displayScore();
