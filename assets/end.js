const username = document.getElementById('username');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('score');

//pulls from local storage.
finalScore.innerText = mostRecentScore;

