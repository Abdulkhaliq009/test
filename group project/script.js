// buttons
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

// screens div or section
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

//  <section id="quiz-screen" class="hidden">

// .hidden {
//   display: none;
// }

// quiz-screen
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const questionCounter = document.getElementById("question-counter");

// result-screen
const resultText = document.getElementById("result-text");
const resultMessage = document.getElementById("result-message");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      { text: "Hamburg", correct: false },
      { text: "Berlin", correct: true },
      { text: "München", correct: false },
    ],
  },
  {
    question: "question 2",
    answers: [
      { text: "text 1", correct: false },
      { text: "text 2", correct: true },
      { text: "text 3", correct: false },
    ],
  },
];

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  showQuestion();
});
restartBtn.addEventListener("click", startGame);

function startGame() {
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  console.log("showQuestion work");
  alert("showQuestion in process =( ");
}

function selectAnswer() {
  console.log("selectAnswer work");
}

function showResults() {
  console.log("showResults work");
}


//<button id="load-Question-button">load-Question</button>
// for debug

// <button id="start-screen-button">start-screen-button</button>
// <button id="quiz-screen-button">quiz-screen-buttonn</button>
// <button id="result-screen-button">result-screen-button</button>

const startScreenButton = document.getElementById("start-screen-button");
const quizScreenButton = document.getElementById("quiz-screen-button");
const resultScreenButton = document.getElementById("result-screen-button");

const loadQuestionButton = document.getElementById("load-Question-button");

startScreenButton.addEventListener("click", startScreenShow);
quizScreenButton.addEventListener("click", quizScreenShow);
resultScreenButton.addEventListener("click", resultScreenShow);

loadQuestionButton.addEventListener("click", showQuestion);

function startScreenShow() {
  startScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
}

function quizScreenShow() {
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
}

function resultScreenShow() {
  startScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  quizScreen.classList.add("hidden");
}
