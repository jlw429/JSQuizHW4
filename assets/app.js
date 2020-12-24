const question = document.getElementById('question');
let choices = document.getElementsByClassName('.choice-text');
let count = 60;
let score = 0;
let scoreText = document.getElementById('Score');
const score_points = 100;
let acceptingAnswers = true;
const max_questions = 5;
let questionCounter = 0;
let availableQuestions = []


let questions = [
  {
    question: 'What can be used to store multiple values in a single variable?',
    choiceA: 'For Loop',
    choiceB: 'Object',
    choiceC: 'Array',
    choiceD: 'While Loop',
    correct: 3,
  },
  {
    question: 'This type of loop executes a block of code as long as a specified question is TRUE',
    choiceA: 'For Loop',
    choiceB: 'While Loop',
    choiceC: 'if statement',
    choiceD: 'None of the above',
    correct: 2,
  },
  {
    question: 'This method rounds a number downward to its nearest integer',
    choiceA: 'Math Random',
    choiceB: 'Math Ceiling',
    choiceC: 'Math Trunc',
    choiceD: 'Math Floor',
    correct: 4,
  },
  {
    question: 'This is a container for storing data values',
    choiceA: 'variable',
    choiceB: 'sting',
    choiceC: 'array',
    choiceD: 'Integer',
    correct: 1,
  },
  {
    question: 'What determines the accessibility or visibility of variables?',
    a: 'Scope',
    b: 'Object',
    c: 'variable',
    d: 'Javascript',
    correct: 1,
  }
];

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...question];
  newQuestion();
}

function newQuestion() {
  if(availableQuestions.length === 0 || questionCounter > max_questions) {
    localStorage.setItem(score)
  
    return window.location.assign('/end.html')
  }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${max_questions}`;

    let questionsIndex = Math.floor(math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(function (choice) {
        let num = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

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

      setTimeout(function () {
        selectedChoice.parentElement.classList.remove(classToApply);
        newQuestion();
      

    }, 1000);


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
}, 200);
