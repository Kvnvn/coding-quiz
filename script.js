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
var resultsEL = document.querySelector(".results")
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
        if (secondsLeft <= 0) {
            timerElement.textcontent = "Time:" + 0;
        }
    }, 1000);
};

//questions will be in an array

//startbutton."restart"
var questions = [
    {
        q: "Commonly used data types DO NOT INCLUDE:",
        a: "1.Alerts",
        b: "2.Booleans",
        c: "3.Strings",
        d: "4.Numbers",
        correct: "1.Alerts",
    },
    {
        q: "The condition in an if I else statement is enclosed within...",
        a: "1.qoutes",
        b: "2.curly brackets",
        d: "3.square brackets",
        c: "4.parenthesis",
        correct: "4.parenthesis"
    },
    {
        q: "Arrays in Javascript can be use to store...",
        a: "1.numbers and strings",
        b: "2.other arrays",
        c: "3.booleans",
        d: "4.all of the above",
        correct: "3.booleans"
    },
    {
        q: "String value must be enclosed within _____ when being assigned to variables.",
        a: "1.commas",
        b: "2.curly brackets",
        c: "3.brackets",
        d: "4. parenthesis",
        correct: "2.curly brackets"
    }


];

//var LastQuestionIndex = questions.length - 1;
var questionsIndex = 0;
var currentQuestion = questions[questionsIndex];

function renderQuestions() {
    currentQuestion = questions[questionsIndex];
    question.textContent = currentQuestion.q;
    ChoiceA.textContent = currentQuestion.a;
    ChoiceB.textContent = currentQuestion.b;
    ChoiceC.textContent = currentQuestion.c;
    ChoiceD.textContent = currentQuestion.d;
};

var score = 0;

BtnContainer.addEventListener("click", handleAnswerButtonClick);

function handleAnswerButtonClick(event) {

    if (event.target.matches("button") && (event.target.textContent === currentQuestion.correct)) {
        score++;
        resultsEL.textContent = "Correct";
    }

    else {
        resultsEL.textContent = "Wrong"
        secondsLeft -= 5;

        if (secondsLeft <= 0) {
            timerElement.textContent = "Time:" + 0;
            clearTimeout()
        }
        else {
            timerElement.textContent = "Time: " + secondsLeft;
        }

        startTimer();
    }
    if (questionsIndex < questions.length - 1) {
        questionsIndex++;
        renderQuestions();
    }
};