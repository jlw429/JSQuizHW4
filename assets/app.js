const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

//display quiz right away
buildQuiz();

//on submit, show results 
submitButton.addEventListener('click', showResults);
const questions =[
  {
    question: 'What can be used to store multiple values in a single variable?',
    a: 'For Loop',
    b: 'Object',
    c: 'Array',
    d: 'While Loop',
    answer: 3,
  },
  {
    question: 'This type of loop executes a block of code as long as a specified question is TRUE',
    a: 'For Loop',
    b: 'While Loop',
    c: 'if statement',
    d: 'None of the above',
    answer: 2,
  },
  {
    question: 'This method rounds a number downward to its nearest integer',
    a: 'Math Random',
    b: 'Math Ceiling',
    c: 'Math Trunc',
    d: 'Math Floor',
    answer: 4,
  },
  {
    question: 'This is a container for storing data values',
    a: 'variable',
    b: 'sting',
    c: 'array',
    d: 'Integer',
    answer: 1,
  },
  {
  question: 'What determines the accessibility or visibility of variables?',
    a: 'Scope',
    b: 'Object',
    c: 'variable',
    d: 'Javascript',
    answer: 1,
  },
];

function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of possible answers
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

