const questions = [
    {
        question: "What is 15 - 7?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false },
        ],
    },
    {
        question: "What is the square root of 64?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false },
        ],
    },
    {
        question: "What is 3 squared?",
        answers: [
            { text: "6", correct: false },
            { text: "9", correct: true },
            { text: "12", correct: false },
            { text: "15", correct: false },
        ],
    },
    {
        question: "What is 25 divided by 5?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false },
        ],
    },
    {
        question: "What is 2 multiplied by 9?",
        answers: [
            { text: "16", correct: false },
            { text: "18", correct: true },
            { text: "20", correct: false },
            { text: "22", correct: false },
        ],
    },
    {
        question: "What is the value of 'x' in the equation 2x + 5 = 11?",
        answers: [
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: false },
        ],
    },
    {
        question: "What is the next number in the Fibonacci sequence after 1, 1, 2, 3, 5, __?",
        answers: [
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false },
            { text: "9", correct: false },
        ],
    },
    {
        question: "What is the sum of the interior angles of a triangle?",
        answers: [
            { text: "180 degrees", correct: true },
            { text: "90 degrees", correct: false },
            { text: "270 degrees", correct: false },
            { text: "360 degrees", correct:false},
        ],
    },
    {
        question: "What is the circumference of a circle with radius 5 units (rounded to the nearest whole number)?",
        answers: [
            { text: "15 units", correct:false},
            { text: "31 units", correct:true},
            { text:"47 units", correct:false},
            {text:"62 units",correct:false},
        ],
    },
    {
        question:"If a car travels at a speed of 60 miles per hour, how far will it travel in 3 hours?",
        answers:[
            {text:"120 miles",correct:false},
            {text:"180 miles",correct:true},
            {text:"240 miles",correct:false},
            {text:"300 miles",correct:false},
        ],
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Restart";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", startQuiz);
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});






startQuiz();









