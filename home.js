// Get references to the necessary elements
const createQuizButton = document.querySelector('.create-quiz');
const takeQuizButton = document.querySelector('.take-quiz');
const quizContainer = document.createElement('div');
quizContainer.classList.add('quiz-container');

// Store the created quizzes
let quizzes = [];

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});



// Function to create a new quiz
function createQuiz() {
  const quiz = {
    questions: [],
    answers: []
  };

  const questionInput = prompt('Enter a question:');
  const answerInputs = prompt('Enter the multiple-choice answers (separated by commas):').split(',');
  const correctAnswer = prompt('Enter the correct answer index (0-based):');

  quiz.questions.push(questionInput);
  quiz.answers.push(answerInputs);
  quiz.correctAnswer = parseInt(correctAnswer);

  quizzes.push(quiz);
  alert('Quiz created successfully!');
}

// Function to take a quiz
function takeQuiz() {
  if (quizzes.length === 0) {
    alert('No quizzes available. Please create a quiz first.');
    return;
  }

  const selectedQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
  let score = 0;

  for (let i = 0; i < selectedQuiz.questions.length; i++) {
    const question = selectedQuiz.questions[i];
    const answers = selectedQuiz.answers[i];
    const correctAnswer = selectedQuiz.correctAnswer;

    const userAnswer = parseInt(prompt(`${question}\n${answers.map((a, index) => `${index}. ${a}`).join('\n')}\nEnter the correct answer index (0-based):`));

    if (userAnswer === correctAnswer) {
      score++;
    }
  }

  alert(`Your score: ${score}/${selectedQuiz.questions.length}`);
}

// Add event listeners to the buttons
createQuizButton.addEventListener('click', createQuiz);
takeQuizButton.addEventListener('click', takeQuiz);
