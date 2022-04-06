// ****Working on start and timer button***//
const startButton = document.getElementById('start-btn')
// let timer = document.getElementById("timer");
// **adding containers to quiz questions and answers**//
let quizContainer = document.getElementById("#quiz");
let question = document.querySelector("#question");
let choiceA = document.querySelector("#choiceA");
let choiceB = document.querySelector("#choiceB");
let choiceC = document.querySelector("#choiceC");
let choiceD = document.querySelector("#choiceD");

// choiceA.addEventListener("click", answerChoiceA);
// choiceB.addEventListener("click", answerChoiceB);
// choiceC.addEventListener("click", answerChoiceC);
// choiceD.addEventListener("click", answerChoiceD);



//***Score Container***
let scoreContainer = document.getElementById("#score");
let score = 0; 

// *****Questions with answers and choices*****//
const myQuestions = [
    {
            question: "You have 10 fingers but 3 thumbs get chopped off. How many fingers do you have left?",
            choiceA: "7",
            choiceB: "9",
            choiceC: "3",
            choiceD: "I dont have 3 thumbs",
            answer: "I dont have 3 thumbs",
    },

    {
            question: "How many years are in a decade?",
            choiceA: "12yrs",
            choiceB: "10yrs",
            choiceC: "100trs",
            choiceD: "50yrs",
            answer: "10yrs",
    },

    {
            question: "What month is Black History month?",
            choiceA: "February",
            choiceB: "May",
            choiceC: "December",
            choiceD: "July",
            answer: "February",
    },

    {
            question: "How many grams are in an Ounce?",
            choiceA: "14grams",
            choiceB: "25grams",
            choiceC: "28grams",
            choiceD: "20grams",
            answer: "28grams",
    },

    {
            question: "By the age of 18years old, how many days have you lived?",
            choiceA: "6,500 days",
            choiceB: "18 days",
            choiceC: "5,378 days",
            choiceD: "6,570 days",
            answer: "6,570 days ",
    }

]
// **pair start button with begin button**//

startButton.addEventListener("click", beginQuiz); 
// *****add function to start quiz and timer*****//
function beginQuiz() {
    countdown();
    showQuestion();
}
// *Timer function*

let timer = 60
let quizTimer = document.querySelector("#quiz-timer")
function countdown() {

    var timeLeft = setInterval(() => {
  
      if (timer >= 0 || questionIndex < 5) {
        quizTimer.textContent = timer + " seconds left";
        timer--;
        //questionIndex ++;
  
      } else {
        clearInterval(timeLeft);
  
        
      }
    }, 1000);
  }
  

// **Dynamically changes states of questions and choices**//

// function showQuestion() {
//     question.innerText = myQuestions[i].question;
//     choiceA.innerText = myQuestions[i].choiceA
//     choiceB.innerText = myQuestions[i].choiceB
//     choiceC.innerText = myQuestions[i].choiceC
//     choiceD.innerText = myQuestions[i].choiceD
// }

var timerElement = document.querySelector(".timer-count");

// var timer;
// var timerCount;

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//       if (timerCount >= 0) {
//         // Tests if win condition is met
//         if (isWin && timerCount > 0) {
//           // Clears interval and stops timer
//           clearInterval(timer);
//           winGame();
//         }
//       }
//       // Tests if time has run out
//       if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         loseGame();
//       }
//     }, 1000);
//   }