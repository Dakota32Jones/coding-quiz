// creating variables that will traverse down the DOM.
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var questionsEl = document.querySelector("#questions");
var startBtn = document.querySelector("#start-btn");
var feedbackEl = document.querySelector("#feedback");
var initialsEl = document.querySelector("#initials");
var QuestionTitle = document.querySelector("#question-title");
var endScreen = document.querySelector("#end-screen");
var startScreen = document.querySelector("#start-screen");
var timeRemaining = 75;
var timer;
var currentQuestion = 0;
var question = questions[currentQuestion];
var finalScoreEL = document.querySelector("#final-score");

// setting a countdown timer for the game
function countdown() {
  timeRemaining--;

  timerEl.textContent = parseInt(timeRemaining);
  if (timeRemaining <= 0) {
    clearInterval(timer);
  }
}
// once the user clicks start quiz the start screen disappears and the counter start counting down.
function startQuiz() {
  startScreen.style.display = "none";
  timerEl.textContent = timeRemaining;
  timer = setInterval(countdown, 1000);
  renderQuestion();
  renderAnswers();
}
startBtn.addEventListener("click", startQuiz);

// trying to render the questions to the screen.
function renderQuestion() {
  var questionToRender = questions[currentQuestion];
  questionsEl.textContent = questionToRender.questionText;
  questionsEl.removeAttribute("class");
}

// create buttons for the choices on the screen.
function renderAnswers() {
  console.log(question);
  var choicesToRender = question.choices;
  Object.values(choicesToRender).forEach(function (choice, index) {
    var choicesEl = document.createElement("button");
    choicesEl.textContent = choice;
    questionsEl.appendChild(choicesEl);
    choicesEl.setAttribute("value", choice);
    choicesEl.onclick = choiceClick;
  });
}
// getting the next question and if the user clicks on the wrong choice then the time decreases by 15 seconds and the next questions appears.
function choiceClick() {
  if (this.value !== questions[currentQuestion].answer) {
    timeRemaining -= 15;
    if (timeRemaining < 0) {
      timeRemaining = 0;
    }
    feedbackEl.removeAttribute("class");
    feedbackEl.textContent = "Wrong Answer";
  } else {
    feedbackEl.removeAttribute("class");
    feedbackEl.textContent = "Correct";
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    console.log("End Game");
    endGame();
  }
  if (currentQuestion !== questions.length) {
    renderQuestion();
    renderAnswers();
  }
}
//  once the game ends, the scoreboard shows up for the user to enter their initials and score.
function endGame() {
  endScreen.removeAttribute("class");
  feedbackEl.setAttribute("class", "hide");
  clearInterval(timer);
  finalScoreEL.textContent = timeRemaining;
  questionsEl.setAttribute("class", "hide");
}

function storeHighScore() {
  var scoreToAdd = {
    name: initialsEl.value,
    score: timeRemaining,
  };

  var allScores = JSON.parse(localStorage.getItem("highscores"));
  console.log(scoreToAdd);

  console.log(allScores);
  if (!allScores) {
    allScores = [];
  }
  allScores.push(scoreToAdd);
  localStorage.setItem("highscore", JSON.stringify(allScores));
}

submitBtn.addEventListener("click", storeHighScore);
