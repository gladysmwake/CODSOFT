const questions = [
  {
    question: "What is the term for a word that has the opposite meaning of another word?",
    answers: [
      { text: "Synonym", correct: false },
      { text: "Antonym", correct: true },
      { text: "Homonym", correct: false },
      { text: "Homophone", correct: false },
    ],
  },
  {
    question: "Which of the following is a punctuation mark used to separate items in a list?",
    answers: [
      { text: "Period", correct: false },
      { text: "Comma", correct: true },
      { text: "Colon", correct: false },
      { text: "Semicolon", correct: false },
    ],
  },
  {
    question: "What is the term for a group of words that expresses a complete thought?",
    answers: [
      { text: "Phrase", correct: false },
      { text: "Clause", correct: true },
      { text: "Sentence", correct: false },
      { text: "Fragment", correct: false },
    ],
  },
  {
    question: "Which of the following is a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable?",
    answers: [
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: true },
      { text: "Hyperbole", correct: false },
      { text: "Onomatopoeia", correct: false },
    ],
  },
  {
    question: "What is the term for a word that imitates the sound it represents?",
    answers: [
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Hyperbole", correct: false },
      { text: "Onomatopoeia", correct: true },
    ],
  },
  {
    question: "Which of the following is a verb tense that indicates an action that was completed before another past action?",
    answers: [
      { text: "Present Continuous", correct: false },
      { text: "Past Perfect", correct: true },
      { text: "Future Perfect", correct: false },
      { text: "Present Perfect", correct:false},
    ],
  },
  {
    question: "What is the term for a word that is spelled the same forwards and backwards?",
    answers: [
      { text: "Palindrome", correct: true },
      { text: "Anagram", correct: false },
      { text: "Homonym", correct: false },
      { text: "Acronym", correct:false},
    ],
  },
  {
    question: "Which of the following is a sentence that contains two or more independent clauses?",
    answers: [
      { text: "Simple Sentence", correct: false },
      { text: "Complex Sentence", correct: false },
      { text: "Compound Sentence", correct:true},
      { text: "Run-on Sentence", correct:false},
    ],
  },
  {
    question: "What is the term for the study of the structure and rules of language?",
    answers: [
      { text: "Linguistics", correct:true},
      { text: "Grammar", correct:false},
      { text: "Syntax", correct:false},
      { text:"Semantics", correct:false},
    ],
  },
  {
    question: "Which part of speech is used to describe a noun or pronoun?",
    answers:[
      {text:"Adjective", correct:true},
      {text:"Adverb", correct:false},
      {text:"Preposition", correct:false},
      {text:"Conjunction", correct:false},
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







