const questions = [
    {
        question: "If you have a bowl with six apples and you take away four, how many do you have?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "2", correct: true },
            { text: "0", correct: false },
        ],
    },
    {
        question: "I am taken from a mine and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
        answers: [
            { text: "Coal", correct: true },
            { text: "Gold", correct: false },
            { text: "Diamond", correct: false },
            { text: "Silver", correct: false },
        ],
    },
    {
        question: "What has keys but can't open locks?",
        answers: [
            { text: "Keyboard", correct: true },
            { text: "Locksmith", correct: false },
            { text: "Piano", correct: false },
            { text: "Chest", correct: false },
        ],
    },
    {
        question: "What has a head, a tail, is brown, and has no legs?",
        answers: [
            { text: "Penny", correct: true },
            { text: "Snake", correct: false },
            { text: "Dog", correct: false },
            { text: "Horse", correct: false },
        ],
    },
    {
        question: "Forward I am heavy, but backward I am not. What am I?",
        answers: [
            { text: "Ton", correct: true },
            { text: "Feather", correct: false },
            { text: "Rock", correct: false },
            { text: "Cloud", correct: false },
        ],
    },
    {
        question: "What comes next in the sequence: 2, 4, 6, 8, ___?",
        answers: [
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "14", correct: false },
            { text: "16", correct: false },
        ],
    },
    {
        question: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies. Is this statement true or false?",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ],
    },
    {
        question: "Which of the following words is the odd one out?",
        answers: [
            { text: "Apple", correct: false },
            { text: "Banana", correct: true },
            { text: "Orange", correct: false },
            { text: "Grape", correct: false },
        ],
    },
    {
        question: "If a plane crashes on the border between the US and Canada, where do they bury the survivors?",
        answers: [
            { text: "US", correct: false },
            { text: "Canada", correct: false },
            { text: "Survivors don't get buried", correct: true },
            { text: "Both US and Canada", correct: false },
        ],
    },
    {
        question: "How many months have 28 days?",
        answers: [
            { text: "1", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false },
            { text: "Depends on the year", correct: false },
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









