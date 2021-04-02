'use strict';

// BASIC VALUES
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

//anonymos function displays a message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//AGAIN
document.querySelector('.again').addEventListener('click', function () {
  //location.reload(); //easy way
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  displayMessage('Empieza...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});

//GUESSING
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no number
  if (!guess) {
    displayMessage('🚫 No es número!');

    // when correct number
  } else if (guess === secretNumber) {
    document.querySelector('.check').disabled = true;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Número Correcto!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    //record of highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when number is wrong
  } else if (guess !== secretNumber) {
    
    //still chances to keep playing
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Muy alto!' : '📉 Muy bajo!');
      score--;

      // display lost theme
    } else {
      document.querySelector('.score').textContent = '0';
      document.querySelector('body').style.backgroundColor = 'red';
      displayMessage('🧨 Has Perdido!!!');
    }
  }
  document.querySelector('.score').textContent = score;
});
