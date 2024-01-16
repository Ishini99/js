const questions  = [
    {
    question : "20 + 20 - 10 + 80 + 40 - 10" , 
    answers:[
        {Text :"140", correct :true},
        {Text :"120", correct :false},
        {Text :"160", correct :false},
        {Text :"110", correct :false},
    ]
},
{
    question : "10 + 30 + 50 + 80 + 40 - 100" , 
    answers:[
        {Text :"140", correct :false},
        {Text :"120", correct :false},
        {Text :"160", correct :false},
        {Text :"110", correct :true},
    ]
},
{
    question : "30 + 20 - 200 + 80 + 50 + 100" , 
    answers:[
        {Text :"80", correct :true},
        {Text :"120", correct :false},
        {Text :"160", correct :false},
        {Text :"110", correct :false},
    ]
},
{
    question : "200 + 200 - 100 + 800 " , 
    answers:[
        {Text :"1100", correct :true},
        {Text :"1200", correct :false},
        {Text :"1600", correct :false},
        {Text :"1100", correct :false},
    ]
},
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ","+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}