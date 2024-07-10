document.querySelectorAll('.take-quiz').forEach(button => {
  button.addEventListener('click', () => {
    const quizType = button.dataset.quiz;
    switch (quizType) {
      case 'general':
        // Redirect to general knowledge quiz
        window.location.href = 'general-quiz.html';
        break;
      case 'math':
        // Redirect to math quiz
        window.location.href = 'math-quiz.html';
        break;
      case 'geography':
        // Redirect to geography quiz
        window.location.href = 'geography-quiz.html';
        break;
      case 'language':
        // Redirect to language and grammar quiz
        window.location.href = 'language-quiz.html';
        break;
      case 'pop-culture':
        // Redirect to pop culture quiz
        window.location.href = 'pop-culture-quiz.html';
        break;
      case 'logic':
        // Redirect to logic puzzles
        window.location.href = 'logic-puzzles.html';
        break;
      default:
        break;
    }
  });
});
