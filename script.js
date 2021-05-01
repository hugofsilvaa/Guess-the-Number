'use strict';

let secretNumber = (Math.floor(Math.random() * 20) + 1);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    //when no imput
    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No number!'

        //when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🏆 Correct Number'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //guess it to high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 to high!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!'
            document.querySelector('.score').textContent = 0;
        }

        //guess is to low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 to low!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = (Math.floor(Math.random() * 20) + 1);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

