//html elements
var counterEl = document.getElementById('counter');
var startBoxEl = document.getElementById('start-box');
var startButtonEl = document.getElementById('start-button');
var quizBoxEl = document.getElementById('quiz-box');
var questionEl = document.getElementById('question');
var savedScoresEl = document.getElementById('saved-scores');
var addInitialsEl = document.getElementById('initials');
var playAgainEl = document.getElementById('play-again');
var clearScores = document.getElementById('clear-scores')
var scoreBoxEl = document.getElementById('score-stuff')

var score = 0;
var timeLeft = 40;

counterEl.textContent = timeLeft;

var questions = [
    ["what is stuff?",["1", "2", "3", "4"], [0, 0, 0, 1]], 
    ["what is junk?",["1", "2", "3", "4"], [0, 0, 0, 1]], 
    ["what is ssadf?",["1", "2", "3", "4"],[0, 0, 0, 1]], 
    ["what is stsadlasdf?",["1", "2", "3", "4"], [0, 0, 0, 1]], 
    ["what is ;a;lkd?",["1", "2", "3", "4"], [0, 0, 0, 1]], 
];

const choices = 1;
const question = 0;
const answer = 2;
var questionIndex = 0;

function init() {
    questionIndex === 0;
    // score === 0;
    // timeLeft === 40;
    //set timer
    reset();
    quizBoxEl.setAttribute("data-state", "active");
    startBoxEl.setAttribute("data-state", "inactive");
    populateQuestion();
}

function populateQuestion(){
    var newQuestionEl = document.createElement('h5');
    newQuestionEl.textContent=questions[questionIndex][question];
    quizBoxEl.append(newQuestionEl);
    for(var j=0; j<questions[questionIndex][choices].length; j++){
        var newBtnEl = document.createElement('button');
        newBtnEl.textContent=questions[questionIndex][choices][j];
        newBtnEl.setAttribute('data-correct', questions[questionIndex][answer][j])
        quizBoxEl.append(newBtnEl);
    }   
}     
    

//------Event Listeners----------

//start button
startButtonEl.addEventListener("click", function(event){
    init();
});

//quiz answer buttons
quizBoxEl.addEventListener("click", function(event){
    var element = event.target;
    console.log(element);
    var isCorrect = document.createElement('h5');
    if(element.matches("button")) {
        if(element.dataset.correct === "1"){
            isCorrect.textContent = "correct";
            score += 10;
            quizBoxEl.append(isCorrect);
            console.log(score);
        } else {
            isCorrect.textContent = "Nope"
            quizBoxEl.append(isCorrect);
        }
    }
    console.log("question index: " +questionIndex);
    if (questionIndex === questions.length-1) {
        quizBoxEl.setAttribute("data-state", "inactive");
        scoreBoxEl.setAttribute("data-state", "active");
        quizBoxEl.innerHTML = "";
    } else {
        questionIndex++;
        quizBoxEl.innerHTML = "";
        populateQuestion();
    }
});

//reset game

function reset() {
    questionIndex = 0;
    score = 0
    timeLeft = 40;
}

playAgainEl.addEventListener("click", function(){
    questionIndex = 0;
    quizBoxEl.innerHTML = "";
    startBoxEl.setAttribute("data-state", "active");
    scoreBoxEl.setAttribute("data-state", "inactive");
    console.log("question index: " + questionIndex);
    return;
})






