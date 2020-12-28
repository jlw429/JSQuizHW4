const question = document.getElementById('question');
const scoreText = document.getElementById('score');
let choices = Array.from(document.querySelectorAll('.choice-text'));
let count = 80;
let score = 0;
const score_points = 20;
let acceptingAnswers = true;
const max_questions = 5;
let questionCounter = 0;
let availableQuestions = [];
let nextQuestion = true;
let lastQuestion = false;

let questions = [
  {
    question: 'What can be used to store multiple values in a single variable?',
    choice1: 'For Loop',
    choice2: 'Object',
    choice3: 'Array',
    choice4: 'While Loop',
    correct: 3,
  },
  {
    question:
      'This type of loop executes a block of code as long as a specified question is TRUE',
    choice1: 'For Loop',
    choice2: 'While Loop',
    choice3: 'if statement',
    choice4: 'None of the above',
    correct: 2,
  },
  {
    question: 'This method rounds a number downward to its nearest integer',
    choice1: 'Math Random',
    choice2: 'Math Ceiling',
    choice3: 'Math Trunc',
    choice4: 'Math Floor',
    correct: 4,
  },
  {
    question: 'This is a container for storing data values',
    choice1: 'variable',
    choice2: 'string',
    choice3: 'array',
    choice4: 'Integer',
    correct: 1,
  },
  {
    question: 'What determines the accessibility or visibility of variables?',
    choice1: 'Scope',
    choice2: 'Object',
    choice3: 'variable',
    choice4: 'Javascript',
    correct: 1,
  },
];
//Starts the game, puts everything at 0
function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  newQuestion();
}
//created due to bug happening with event listeners. Seemed that the array would splice the questions double.
function handleOnClick(event) {
  
  let selectedChoice = event.target;
  let selectedAnswer = selectedChoice.dataset['number'];

  let classToApply =
    selectedAnswer == currentQuestion.correct ? 'correct' : 'incorrect';
  ;
//This turns the timer down by 20 seconds if you get a incorrect answer
//THis also adds points.
  if (classToApply === 'correct') {
    incrementScore(score_points);
  } else {
    count = count - 20;
  }

    nextQuestion = true;
  if (availableQuestions.length == 0) {
    lastQuestion = true;
  }
  
}
// I Wanted the questions random, went with add floor as well as creating a variable within the function. 
function newQuestion() {
  nextQuestion = false;
  questionCounter++;
  let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];

  question.innerText = currentQuestion.question;

 //The bugiest part. I couldn't for the life of me figure it out. Starting at question 3, it would double points as well as splice out more questions. Had to research removeevent listener. It worked and basically I had to for every question remove, then add the event listener.
  // acceptingAnswers = true;
  choices.forEach(function (choice) {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
    choice.removeEventListener('click', handleOnClick);
    choice.addEventListener('click', handleOnClick);
  });

  availableQuestions.splice(questionsIndex, 1);
}
//Sends the score to local storage as well as well as link the end page.
function endGame() {
  localStorage.setItem('score', score);
  window.location.replace('end.html');
  //link to end page
}

//Timer - tried to keep all operations involving the timer in here, with exception of the reducing the clock when you answered something incorrectly. 
setInterval(function () {
  count--;
  if (count >= 0) {
    id = document.getElementById('countdown');
    id.innerHTML = count;
  }
    if (lastQuestion) {
    endGame();
    return;
  }
  if (nextQuestion) {
    newQuestion();
  }
  if (count === 0) {
    id.innerHTML = "Time's Up";
    endGame();
  }
}, 1000);
// How it increases the score. 
function incrementScore(num) {
  score += num;
  scoreText.innerText = score;
}
//calls the function for the fun to begin.
startGame();
