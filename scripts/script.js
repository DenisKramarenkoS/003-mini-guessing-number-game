'use strict';

// Just elements
const keyNumber = Math.round(Math.random() * 20) + 1;
console.log(keyNumber);

// DOM elements
const btnAgain = document.getElementById('-btn__again');
const btnReset = document.getElementById('-btn__reset');
const btnSend = document.getElementById('-btn__send');

const inputWindow = document.getElementById('-input__window');
const answerWindow = document.getElementById('-answer__window');

const score = document.getElementById('-score');
const highscore = document.getElementById('-highscore');
const comment = document.getElementById('-comment');

let isGuessed = false;

// Values from LocalStorage
const highscoreLocal = Number(localStorage.getItem('highscore'));

if (Boolean(highscoreLocal)) {
  highscore.textContent = highscoreLocal;
}
// Code

btnAgain.addEventListener('click', () => {
  setTimeout(function () {
    location.reload();
  }, 500);
});

btnReset.addEventListener('click', () => {
  localStorage.clear();
  setTimeout(function () {
    location.reload();
  }, 500);
});

btnSend.addEventListener('click', () => {
  const guessNumber = Number(inputWindow.value);
  
  if (Number(score.textContent) <= 0) {
    comment.textContent = 'Your attempts is over :< Try again';
    inputWindow.setAttribute('readonly', 'true');
    return;
  }

  if (guessNumber === '' || isGuessed) {
    return;
  }

  if (guessNumber === keyNumber) {
    comment.textContent = 'Congrats';
    inputWindow.setAttribute('readonly', 'true');
    answerWindow.textContent = keyNumber;

    if (Number(score.textContent) > Number(highscore.textContent)) {
      highscore.textContent = score.textContent;
      localStorage.setItem('highscore', highscore.textContent);
    }

    return;
  } else if (guessNumber > keyNumber) {
    comment.textContent = 'High';
  } else if (guessNumber < keyNumber) {
    comment.textContent = 'Low';
  }

  inputWindow.value = '';
  score.textContent = Number(score.textContent) - 1;
});
