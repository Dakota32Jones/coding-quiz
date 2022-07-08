// creating variables that will traverse down the DOM.
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var questionsEl = document.querySelector("#questions");
var startBtn = document.querySelector("#start-btn");
var feedbackEl = document.querySelector("#feedback");
var initialsEl = document.querySelector("#initials");

// quiz variables

var timerId;
var currentQuestionIndex = 0;
var time = questions.length * 15;

// hide the start

function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  //   after starting the starting screen we need to reveal the questions.

  questionsEl.removeAttribute("class");

  // once questions are revealed we now, reveal the timer to countdown

  timerId = setInterval(clockTick, 1000);

  timerEl.textContent = time;

  getQuestion();
}
