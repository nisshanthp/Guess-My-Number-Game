'use strict';

/*
console.log(document.querySelector('.message').textContent); //what the content of element was before change

document.querySelector('.message').textContent = 'Correct Number! 😱';

console.log(document.querySelector('.message').textContent); //after change

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //no imput
  if (!guess) {
    displayMessage('No Number 🙅🏽‍♂️ ');
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number ? 'Number is too high 📈' : 'Number is to Low 📉'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You had 20 guesses and still lost, bozo 😵');

      document.querySelector('.score').textContent = 0;
    }

    /*  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is to Low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You had 20 guesses and still lost, bozo 😵';

      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You had 20 guesses and still lost, bozo 😵';
      document.querySelector('.score').textContent = 0;
    } */
  } else {
    displayMessage('Correct Number! 😱');

    document.querySelector('body').style.backgroundColor = '#60b347'; //changing color to green if the user picks the correct number

    document.querySelector('.number').style.width = '30rem'; //increase size of number when selected

    document.querySelector('.number').textContent = number;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score; //reset score
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
