const quizForm = document.getElementById("quiz-form");
const quizPreview = document.getElementById("quiz-preview");

quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const question = document.getElementById("question").value;
    const answers = [
        document.getElementById("answer1").value,
        document.getElementById("answer2").value,
        document.getElementById("answer3").value,
        document.getElementById("answer4").value
    ];
    const correctAnswer = parseInt(document.getElementById("correct-answer").value);

    const newQuestion = document.createElement("div");
    newQuestion.innerHTML = `
        <h3>${question}</h3>
        <ul>
            ${answers.map((answer, index) => `
                <li>${index + 1}: ${answer}${index + 1 === correctAnswer ? " (Correct)" : ""}</li>`
            ).join("")}
        </ul>
    `;

    quizPreview.appendChild(newQuestion);
});
