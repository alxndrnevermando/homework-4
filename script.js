var start = document.getElementById("start-btn");
var questionElement = document.getElementById("questioncontainer");
var nextQuestion = document.getElementById("nextQuestion");
var answerChoices = document.getElementById("buttonsGroup");
var firstQuestion = document.getElementById("btn0");
var secondQuestion = document.getElementById("btn1");
var thirdQuestion = document.getElementById("btn2");
var fourthQuestion = document.getElementById("btn3");
var score = 0;

var time = 100;

var myCount = setInterval(function() {
    if(time<=0) {
        clearInterval(downloadTimer);
    }
    document.getElementById("demo").innerHTML = time + " seconds remaining";
    time--;
}, 1000);


const questionsArray = [
    {
        question: "1. What does HTML stand for?",
        choices: ["HyperText Markup Logic", "HyperTalk Makeup Language", "HiperText Markup Language", "HyperText Markup Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "2. What year was Javascript created?",
        choices: ["1993", "1994", "1995", "1996"],
        correctAnswer: 2
    },
    {
        question: "3. Term used to describe a function inside of an object?",
        choices: ["Method", "Parameter", "Event", "Function"],
        correctAnswer: 0
    },
]

//console.log(questionsArray[0].question);

start.addEventListener("click", startQuiz);
answerChoices.addEventListener("click", selectAnswer);

//this function is what begins when you press start
function startQuiz() {
    //console.log("Yes very nice!");
    //Hides my start button
    start.classList.add('hide');
    //Makes question and buttons reappear
    questionElement.classList.remove("hide");

    setNextQuestion();
};

function setNextQuestion() {
    nextQuestion.innerText = questionsArray[0].question;
    firstQuestion.innerText = questionsArray[0].choices[0];
    secondQuestion.innerText = questionsArray[0].choices[1];
    thirdQuestion.innerText = questionsArray[0].choices[2];
    fourthQuestion.innerText = questionsArray[0].choices[3];
 
    
    selectAnswer();
};

function selectAnswer() {
        var response = InputEvent;
        if(answerChoices == questionsArray[0].question[0].correctAnswer) {
            console.log("is this working")
        }
};

