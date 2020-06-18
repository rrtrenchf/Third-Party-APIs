//needs timer
var start = document.querySelector("#start-btn")
var options = document.getElementById("option-Btnz")
var timerEl = document.getElementById("timer")
var questions = document.querySelector("#questions")
var titleEl= document.getElementById("title")
var scoreboxEl=document.getElementById("scorebox")
var submitEl= document.getElementById("submit")
var inputEl= document.getElementById("input")
scoreboxEl.setAttribute("style", "display:none")
//questions list
var questions = [{
  title:"What is Javascript?",
   choices:["language","animal","person", "dog"],
   answer:"language"
},{
  title: "What is a for loop?",
  choices: ["Loops through an html document", "loop through a computer screen", "loops throught a code block"],
  answer: "loops through a block of code"
},{
  title: "what year was javascript created?",
  choices: ["1995", "1998", "1888", "2002"],
  answer: "1995"
},{
  title: "Which symbol comments out a line of code?",
  choices: ["< >", "||", "??", "//"],
  answer: "//"
}]
// The first view of the application displays a button used to start the quiz.

//these are global variables
var secondsLeft = 20;
//track the questions
var qindex=0
var score=0

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft
    if(secondsLeft <= 0) {
      gameOver()
      clearInterval(timerInterval);
    }

  }, 1000);
}

//start quiz and timer at the same time with the start quiz button
function startGame (event) {
event.preventDefault ()
setTime()
askQuestion()
start.setAttribute("style", "display:none")
}

start.addEventListener ("click", startGame)
  //set up event listener for the answer buttons that gets the text from the button and checks if they got the correct answer
function askQuestion(){
  options.innerHTML=""
  //show the question to the user
  titleEl.textContent = questions[qindex].title
  //show the choices  
  for (let i = 0; i < questions[qindex].choices.length; i++){
     var choiceBtn = document.createElement("button");
     choiceBtn.textContent = questions[qindex].choices[i];
     choiceBtn.addEventListener("click",checkChoices)
     options.append(choiceBtn)
    
    //  console.log(options)
    

  }

  
}
function checkChoices(event) {
  event.preventDefault()
  // console.log("works")
  if (questions[qindex].answer !== event.target.textContent) {
    console.log("correct")
    secondsLeft=secondsLeft -5
  } else{
    score=score + 5
  }
  qindex++ 
  if(qindex>=questions.length){
    gameOver()
  
    
  }else{
    askQuestion()
  }


}
function gameOver(){
  scoreboxEl.setAttribute ("style", "display:block")
    options.innerHTML=""
    titleEl.textContent= "Game Over! Score = " + score
    timerEl.setAttribute("style", "display:none")
    storeScore()
    displayScore()
  
}
//save in local storage

function storeScore(event) {   
 var input= inputEl.value
  localStorage.setItem([input],[score],JSON(stringify));

  

  
}
//display scoreboard
function displayScore(){
  var score=json.parse(localStorage.getItem(input, score))
  gameOver.setAttribute("style","display:none")
  

}
//submitting score
submit.addEventListener("click", storeScore,displayScore)
  




// Clicking the 'Start Quiz' button displays a series of questions.

//  Once the quiz begins, a countdown timer starts.

//  The timer ends when all questions have been answered or the timer reaches 0.

// ✓ After the game ends, the user can save their initials and score to a highscores view using local storage.

// ✓ Repository contains quality README with description, screenshot, link to deployed application.


