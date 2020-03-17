//Basic layout 
//document.getElementbyId
var code = document.getElementById("coder")
var start = document.getElementById("startquiz")
var quiz = document.getElementById("quiz")
var question = document.getElementById("question")
var BtnContainer = document.querySelector(".Btn-container")
var ChoiceA = document.getElementById("A")
var ChoiceB = document.getElementById("B")
var ChoiceC = document.getElementById("C")
var ChoiceD = document.getElementById("D")

var questions = [
    {
        q: "Commonly used data types DO NOT INCLUDE",
        a: "1.Strings",
        b: "2.Booleans",
        c: "3.Alerts",
        d: "4.Numbers",
        correct: "3.Alerts",
    },
    {
        q: "The condition in an if I else statement is enclosed within",
        a: "1.qoutes",
        b: "2.curly brackets",
        c: "3.parenthesis",
        d: "4.square brackets",
        correct: "2.curly brackets"
    }


];

var LastQuestionIndex = questions.length - 1;
var questionsIndex = 0;

function renderQuestions() {
    var currentQuestion = questions[questionsIndex];
    question.textContent = currentQuestion.q;
    ChoiceA.textContent = currentQuestion.a;
    ChoiceB.textContent = currentQuestion.b;
    ChoiceC.textContent = currentQuestion.c;
    ChoiceD.textContent = currentQuestion.d;
};

BtnContainer.addEventListener("click", handleAnswerButtonClick)

function handleAnswerButtonClick(event) {

    if (event.target.matches("button")) {

        // so it is a button after all!
        console.log(event.target.textContent)
    }
}




//adding eventlistener to start quiz
// timer has to be set with  "start quiz button" in order for game to begin
start.addEventListener("click", startQuiz);
start.addEventListener("click", startTimer);

function startQuiz() {
    start.style.display = "none";
    code.style.display = "none";
    renderQuestions();
    quiz.style.display = "block";
};

//Navigation bar timer
//clickable "view highscore" and counter that gives countdown from 75secs"
var timerElement = document.querySelector(".timer");

var secondsLeft = 75;
var timerInterval;

// Create the countdown timer.
function startTimer() {
    timerInterval = setInterval(function () {
        //update countdown
        timerElement.textContent = "Time: " + secondsLeft;
        secondsLeft--;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
};

//questions will be in an array

//startbutton."restart"
