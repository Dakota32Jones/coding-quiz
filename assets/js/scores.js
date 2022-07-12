// save and clear high scores and retrieve scores from local storage

function printHighScores() {
  var highscores = JSON.parse(window.localStorage.getItem("higscores")) || [];

  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    var liTag = createElement("li");
    console.log(createElement);
    liTag.textContent = score.playerInitials + "-" + score.score;
  });
}

function clearHighscores() {
  window.localStorage.removeItem("higscores");
  window.localStorage.reload();
  document.getElementById("clear").onclick = clearHighscores;
}

printHighScores();
