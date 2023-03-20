var questions = [
    {question: "what is stuff?", answers: ["1", "2", "3", "4"]}, 
    {question: "what is stuff?", answers: ["1", "2", "3", "4"]}, 
    {question: "what is stuff?", answers: ["1", "2", "3", "4"]}, 
    {question: "what is stuff?", answers: ["1", "2", "3", "4"]}, 
    {question: "what is stuff?", answers: ["1", "2", "3", "4"]}
];

for(var i; i<questions.length; i++){
    html.question = questions[i].question;
    for(var j; j<questions[i].answers.length; j++){
        html.answerj = questions[i].answers[j];
    }
}






























// var questions = [
//     ["what is stuff?",["1", "2", "3", "4"]], 
//     ["what is stuff?",["1", "2", "3", "4"]], 
//     ["what is stuff?",["1", "2", "3", "4"]], 
//     ["what is stuff?",["1", "2", "3", "4"]], 
//     ["what is stuff?",["1", "2", "3", "4"]], 
// ];
// const answers = 1;
// const question = 0;

// for(var i; i<questions.length; i++){
//     html.question = questions[i][question];
//     for(var j; j<questions[i][answers].length; j++){
//         html.answerj = questions[i][answers][j];
//     }
// }

