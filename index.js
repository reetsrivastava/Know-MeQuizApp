const readlineSync = require('readline-sync');
var score = 0;
var i;


var userName = readlineSync.question("Please enter your name : ");
console.log("Hi "+ userName +"!!");
var listScore =[]; 
console.log("Let's begin with the Quiz");
console.log("------------------------------------");
function quiz(question,answer) {
  console.log(question);
  
  const userAnswerDummy = readlineSync.question("Your Answer:");
  const userAnswer = userAnswerDummy.toLowerCase();
  if(userAnswer===answer) {
    console.log("Right Answer");
    score=score+4;
  } else {
    console.log("Wrong Answer!");
    score=score-2;
  }
}

var questions = [
  {ques : "Is my favorite color black?",
  answer:"yes"},
  {ques: "What is my favorite number?",
  answer:"0"},
  {ques: "Is my favorite sportsperson MS Dhoni?",
  answer:"yes"},
  {ques:"What is my current age?",
  answer:"21"},
  {ques:"In which city do i live?",
  answer:"prayagraj"}
  
];

for(i=0;i<questions.length;i++) {
  console.log("Question Number "+(i+1));
  quiz(questions[i].ques,questions[i].answer);
  console.log("Score : "+score);
  console.log("----------------------------------")
}

console.log("---------------------------");
console.log("Thanks for playing "+userName);
console.log("Your Final Score is: "+score);
