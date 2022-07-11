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
  var question = questions[currentQuestion];
  var choicesToRender = question.choices;
  Object.values(choicesToRender).forEach(function (choice, index) {
    var choicesEl = document.createElement("button");
    choicesEl.textContent = choice;
    questionsEl.appendChild(choicesEl);
  });
}

function choiceClick() {
  choicesEl.onclick = choiceClick;

  if (this.value !== questions[currentQuestionIndex].answer) {
    var time = questions.length * 10;

    time -= 15;

    if (time <= 0) {
    }
    timerEl.textContent = time;
    feedbackEl.textContent = "Wrong Answer!";
    feedbackEl.style.color = "red";
    feedbackEl.style.fontSize = "400%";
  } else {
    feedbackEl.textContent = "Correct Answer!";
    feedbackEl.style.color = "green";
    feedbackEl.style.fontSize = "400%";
  }
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }),
    1000;
}
