const question = document.getElementById('question');
let choices = document.getElementsByClassName('choice');
console.log(choices);
let count = 60;
let score = 0;
let scoreText = document.getElementById('Score');
const score_points = 100;
const max_questions = 5;
let questionCounter = 0;

const questions = [
  {
    question: 'What can be used to store multiple values in a single variable?',
    answerA: 'For Loop',
    answerB: 'Object',
    answerC: 'Array',
    answerD: 'While Loop',
    correct: 3,
  },
  {
    question:
      'This type of loop executes a block of code as long as a specified question is TRUE',
    answerA: 'For Loop',
    answerB: 'While Loop',
    answerC: 'if statement',
    answerD: 'None of the above',
    correct: 2,
  },
  {
    question: 'This method rounds a number downward to its nearest integer',
    a: 'Math Random',
    b: 'Math Ceiling',
    c: 'Math Trunc',
    d: 'Math Floor',
    correct: 4,
  },
  {
    question: 'This is a container for storing data values',
    a: 'variable',
    b: 'sting',
    c: 'array',
    d: 'Integer',
    correct: 1,
  },
  {
    question: 'What determines the accessibility or visibility of variables?',
    a: 'Scope',
    b: 'Object',
    c: 'variable',
    d: 'Javascript',
    correct: 1,
  },
];

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...question];
  newQuestion();
}

function newQuestion() {}

//Timer

setInterval(function () {
  count--;
  if (count >= 0) {
    id = document.getElementById('countdown');
    id.innerHTML = count;
  }
  if (count === 0) {
    id.innerHTML = "Time's Up";
  }
}, 200);
