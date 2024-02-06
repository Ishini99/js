const questions = [
    {
        question: "20 + 20 - 10 + 80 + 40 - 10",
        answers: [
            { text: "140", correct: true },
            { text: "120", correct: false },
            { text: "160", correct: false },
            { text: "110", correct: false },
        ]
    },
    {
        question: "10 + 30 + 50 + 80 + 40 - 100",
        answers: [
            { text: "140", correct: false },
            { text: "120", correct: false },
            { text: "160", correct: false },
            { text: "110", correct: true },
        ]
    },
    {
        question: "30 + 20 - 200 + 80 + 50 + 100",
        answers: [
            { text: "80", correct: true },
            { text: "120", correct: false },
            { text: "160", correct: false },
            { text: "110", correct: false },
        ]
    },
    {
        question: "200 + 200 - 100 + 800",
        answers: [
            { text: "1100", correct: true },
            { text: "1200", correct: false },
            { text: "1600", correct: false },
            { text: "1100", correct: false },
        ]
    },
];

const questionElement = document.querySelector(".quiz .question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", () => selectAnswer(answer.correct));
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = `Your Score: ${score}/${questions.length}`;
    nextButton.style.display = "none"; // Hide the next button at the end of the quiz
}

startQuiz();
