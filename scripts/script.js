'use strict';

// Just elements
const keyNumber = Math.floor(Math.random() * 20);
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
// Code
btnAgain.addEventListener('click', () => {
  setTimeout(function () {
    location.reload();
  }, 500);
});

btnReset.addEventListener('click', () => {
  setTimeout(function () {
    location.reload(true);
  }, 500);
});

btnSend.addEventListener('click', () => {
  const guessNumber = Number(inputWindow.value);
  if (Number(score.textContent) <= 0) {
    comment.textContent = 'Your attempts is over :< Try again';
    inputWindow.setAttribute('readonly', 'true');
    return '';
  }
  if (guessNumber === '' || isGuessed) {
    return '';
  }

  if (guessNumber === keyNumber) {
    comment.textContent = 'Congrats';
    inputWindow.setAttribute('readonly', 'true');
    answerWindow.textContent = keyNumber;
    return '';
  } else if (guessNumber > keyNumber) {
    comment.textContent = 'High';
  } else if (guessNumber < keyNumber) {
    comment.textContent = 'Low';
  }

  inputWindow.value = '';
  score.textContent = Number(score.textContent) - 1;
});
