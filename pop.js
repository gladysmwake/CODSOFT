const questions = [
  {
    question: "Which singer is known as the 'Queen of Pop'?",
    answers: [
      { text: "Britney Spears", correct: false },
      { text: "Madonna", correct: true },
      { text: "Beyoncé", correct: false },
      { text: "Lady Gaga", correct: false },
    ],
  },
  {
    question: "Who is the author of the 'Harry Potter' book series?",
    answers: [
      { text: "J.K. Rowling", correct: true },
      { text: "Stephen King", correct: false },
      { text: "George R.R. Martin", correct: false },
      { text: "Dan Brown", correct: false },
    ],
  },
  {
    question: "Which animated film features the song 'Let It Go'?",
    answers: [
      { text: "Moana", correct: false },
      { text: "Frozen", correct: true },
      { text: "Tangled", correct: false },
      { text: "Coco", correct: false },
    ],
  },
  {
    question: "Which actor plays the character of Captain Jack Sparrow in the 'Pirates of the Caribbean' film series?",
    answers: [
      { text: "Johnny Depp", correct: true },
      { text: "Orlando Bloom", correct: false },
      { text: "Geoffrey Rush", correct: false },
      { text: "Keira Knightley", correct: false },
    ],
  },
  {
    question: "Which TV show features characters named Rachel, Ross, Monica, Chandler, Joey, and Phoebe?",
    answers: [
      { text: "Friends", correct: true },
      { text: "The Office", correct: false },
      { text: "Grey's Anatomy", correct: false },
      { text: "Stranger Things", correct: false },
    ],
  },
  {
    question: "Which artist released the album '25' in 2015?",
    answers: [
      { text: "Beyoncé", correct: false },
      { text: "Adele", correct: true },
      { text: "Taylor Swift", correct: false },
      { text: "Ed Sheeran", correct: false },
    ],
  },
  {
    question: "Who played the character of Iron Man in the Marvel Cinematic Universe?",
    answers: [
      { text: "Chris Hemsworth", correct: false },
      { text: "Chris Evans", correct: false },
      { text: "Robert Downey Jr.", correct: true },
      { text: "Mark Ruffalo", correct: false },
    ],
  },
  {
    question: "Which TV series features a character named Walter White who turns to cooking methamphetamine?",
    answers: [
      { text: "Breaking Bad", correct: true },
      { text: "Stranger Things", correct: false },
      { text: "Game of Thrones", correct: false },
      { text: "The Walking Dead", correct: false },
    ],
  },
  {
    question: "Who won the first season of 'American Idol' in 2002?",
    answers: [
      { text: "Kelly Clarkson", correct: true },
      { text: "Carrie Underwood", correct: false },
      { text: "Adam Lambert", correct: false },
      { text: "Jennifer Hudson", correct: false },
    ],
  },
  {
    question: "Which film won the Academy Award for Best Picture in 2020?",
    answers: [
      { text: "Parasite", correct: true },
      { text: "Joker", correct: false },
      { text: "1917", correct: false },
      { text: "Once Upon a Time in Hollywood", correct:false},
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







