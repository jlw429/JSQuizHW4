const username = document.getElementById('username');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('score');
console.log(mostRecentScore);

finalScore.innerText = mostRecentScore;

