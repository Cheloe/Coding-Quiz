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

var score = 0;
var timeLeft = 40;

counterEl.textContent = timeLeft;



var questions = [
    ["what is stuff?",["1", "2", "3", "4"], [0, 0, 0, 1]], 
    ["what is junk?",["1", "2", "3", "4"], "4"], 
    ["what is ssadf?",["1", "2", "3", "4"], "4"], 
    ["what is stsadlasdf",["1", "2", "3", "4"], "4"], 
    ["what is ;a;lkd?",["1", "2", "3", "4"], "4"], 
];
const choices = 1;
const question = 0;
const answer = 2;
var questionIndex = 0

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
    //console.log(event);
    populateQuestion();
});

//quiz answer buttons
quizBoxEl.addEventListener("click", function(event){
    var element = event.target;
    var isCorrect = document.createElement('h5');
    if(element.matches('button')) {
        console.log(element.dataset.correct);
        if(element.dataset.correct === "1"){
            isCorrect.textContent = "correct";
            score + 10;
            quizBoxEl.append(isCorrect);
            console.log(score);
        } else {
            isCorrect.textContent = "Nope"
            quizBoxEl.append(isCorrect);
        }
    }
    questionIndex++;
    populateQuestion();
});











// var questions = [
//     {question: "what are things?", answers: ["1", "2", "3", "4"], correct: "4"}, 
//     {question: "what is stuff?", answers: ["1", "2", "3", "4"], correct: "2"}, 
//     {question: "what do?", answers: ["1", "2", "3", "4"], correct: "3"}, 
//     {question: "what is up?", answers: ["1", "2", "3", "4"], correct: "1"}, 
//     {question: "what is life?", answers: ["1", "2", "3", "4"], correct: "2"}
// ];


    // console.log(questions);
    // //questionEl.textContent = questions[1].question;
    // var newQuestionEl = document.createElement('h2');
    // var newBtnEl = document.createElement('button');
    // console.log(newBtnEl);
    // console.log(newQuestionEl);

    // for(var i; i<sizeof(questions); i++){
    //     newQuestionEl.textContent = questions[i].question;
    //     console.log(newQuestionEl)
    //     quizBoxEl.append(newQuestionEl);
    //     for(var j; j<questions[i].answers.length; j++){
    //         newBtnEl.textContent = questions[i].answers[j];
    //         quizBoxEl.append(newBtnEl);
    //     }
    // }
