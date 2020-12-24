const question = document.getElementById('question');
let choices = Array.from(document.querySelectorAll('.choice-text'));
let count = 60;
let score = 0;
const score_points = 20;
let acceptingAnswers = true;
const max_questions = 5;
let questionCounter = 0;
let availableQuestions = []


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
    question: 'This type of loop executes a block of code as long as a specified question is TRUE',
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
    choice2: 'sting',
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
  }
];

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  newQuestion();
};

function newQuestion() {
  if(availableQuestions.length === 0 || questionCounter > max_questions) {
    localStorage.setItem(score)
  
    return window.location.assign('/end.html')
  }
    questionCounter++
    
    let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true

    choices.forEach(function (choice) {
    choice.addEventListener('click', event => {
      if(!acceptingAnswers) return

      acceptingAnswers = false;
      let selectedChoice = event.target;
      let selectedAnswer = selectedChoice.dataset['number'];

      let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

      if(classToApply === 'correct') {;
          incrementScore(score_points);
      }

      selectedChoice.parentElement.classList.add(classToApply);

      
        newQuestion();
    
    });
  });
};

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
}, 1000)

function incrementScore(num) {
  score +=num
  scoreText.innerText = score
}

startGame()