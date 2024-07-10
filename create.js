const quizForm = document.getElementById("quiz-form");
const questionsContainer = document.getElementById("questions-container");
const addQuestionButton = document.getElementById("add-question-btn");
const submitButton = document.getElementById("submit-btn");

let questionCount = 1;
let quizData = [];

addQuestionButton.addEventListener("click", function() {
    const newQuestionContainer = document.createElement("div");
    newQuestionContainer.classList.add("question-container");

    newQuestionContainer.innerHTML = `
        <textarea id="question-${questionCount}" class="question-input" placeholder="Question ${questionCount}" required></textarea>
        <div class="options-container">
            <input type="text" class="option-input" placeholder="Option 1" required>
            <input type="text" class="option-input" placeholder="Option 2" required>
            <input type="text" class="option-input" placeholder="Option 3" required>
            <input type="text" class="option-input" placeholder="Option 4" required>
        </div>
        <select class="correct-answer-select">
            <option value="0">Option 1</option>
            <option value="1">Option 2</option>
            <option value="2">Option 3</option>
            <option value="3">Option 4</option>
        </select>
    `;

    questionsContainer.appendChild(newQuestionContainer);
    questionCount++;
});

quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    quizData = [];
    const questionContainers = document.querySelectorAll(".question-container");

    questionContainers.forEach((container) => {
        const questionText = container.querySelector(".question-input").value;
        const options = Array.from(container.querySelectorAll(".option-input")).map(option => option.value);
        const correctAnswerIndex = container.querySelector(".correct-answer-select").value;

        const question = {
            question: questionText,
            options: options,
            correctAnswer: parseInt(correctAnswerIndex)
        };

        quizData.push(question);
    });

    // Store the quiz data in localStorage
    localStorage.setItem('newQuizData', JSON.stringify(quizData));

    // Redirect to the quiz.html page
    window.location.href = "quiz.html";
});
