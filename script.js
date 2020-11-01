var start = document.getElementById("start-btn");
var questionElement = document.getElementById("questioncontainer");

start.addEventListener("click", startQuiz);
//this function is what begins when you press start
function startQuiz() {
    //console.log("Yes very nice!");
    //Hides my start button
    start.classList.add('hide');
    //Makes question and buttons reappear
    questionElement.classList.remove("hide");
    


}

function setNextQuestion() {

}

function selectAnswer() {

}

var questions = [
    {
        question: "1. What does HTML stand for?",
        choices: ["HyperText Markup Logic", "HyperTalk Makeup Language", "HiperText Markup Language", "HyperText Markup Language"],
        correctAnswer: 3
    },
]