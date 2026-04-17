const quizContainer = document.getElementById('quiz');
quizContainer.classList.add("quiz-container");

const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
  {
    question: "Ruqayya is completing her MPhil at:",
    answers: {
      a: "QUT",
      b: "Griffith",
      c: "UQ",
      d: "All of the above"
    },
    correctAnswer: "a"
  },
   {
    question: "What clinical stage of schizophrenia is Ruqayya currently focusing on :",
    answers: {
      a: "Chronic phase",
      b: "Prodromal",
      c: "Premorbid",
      d: "Ultra High Risk"
    },
    correctAnswer: "c"
  },
   {
    question: "Ruqayya's skills include :",
    answers: {
      a: "Quantitative data analysis",
      b: "Research translation and communication",
      c: "Stakeholder and community engagement",
      d: "All of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "Ruqayya's research is in ",
    answers: {
      a: "Depression",
      b: "Anxiety",
      c: "Bipolar",
      d: "Schizophrenia"
    },
    correctAnswer: "d"
  }
];

function buildQuiz() {
  const output = [];

  for (let i = 0; i < quizQuestions.length; i++) {
    const answers = [];

    for (let letter in quizQuestions[i].answers) {
      answers.push(
        '<label>' +
          '<input type="radio" name="question' + i + '" value="' + letter + '">' +
          letter + ': ' +
          quizQuestions[i].answers[letter] +
        '</label>'
      );
    }

    output.push(
      '<div class="question-box">' +
        '<div class="question">' + quizQuestions[i].question + '</div>' +
        '<div class="answers">' + answers.join('') + '</div>' +
      '</div>'
    );
  }

  quizContainer.innerHTML = output.join('');
}
function showResults() {
  var answerContainers = quizContainer.querySelectorAll('.answers');
// keep track of user's answers  
   var numCorrect = 0; 
// for each question...
    for (i = 0; i < quizQuestions.length; i++) {
// find selected answer
     userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value; // if answer is correct
     if (userAnswer === quizQuestions[i].correctAnswer) {
      numCorrect++;
// color the answers green
       answerContainers[i].style.color = 'lightgreen';
     } else {
// color the answers red
       answerContainers[i].style.color = 'red';
    }
  }

  if (numCorrect === 0) {
    resultsContainer.innerHTML = "That wasn’t your best effort — you didn’t get a single answer correct.";
  }
  if (numCorrect === 1) {
    resultsContainer.innerHTML = "There’s room for improvement there! You only got one correct answer.";
  }
  if (numCorrect === 2) {
    resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4. Have another go to improve.";
  }
  if (numCorrect === 3) {
    resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4.";
  }
  if (numCorrect === 4) {
    resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4.";
  }
}
buildQuiz();

submitButton.onclick = function () {
  showResults();
};
const feedbackEl = document.querySelector("#feedback");

function updateFeedback(message) {
  feedbackEl.textContent = message;
}