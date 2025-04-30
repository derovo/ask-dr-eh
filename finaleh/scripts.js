// script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("askForm");
  const input = document.getElementById("questionInput");
  const display = document.getElementById("questionList");

  let questions = JSON.parse(localStorage.getItem("questions")) || [];

  function renderQuestions() {
    display.innerHTML = "";
    questions.forEach(q => {
      const p = document.createElement("p");
      p.textContent = q;
      display.appendChild(p);
    });
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const newQ = input.value.trim();
    if (newQ) {
      questions.push(newQ);
      localStorage.setItem("questions", JSON.stringify(questions));
      input.value = "";
      showPopup(text);
      renderQuestions();
    }
  });

  renderQuestions();
});
