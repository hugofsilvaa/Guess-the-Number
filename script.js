'use strict';

let secretNumber = (Math.floor(Math.random() * 20) + 1);

let score = 20;
let highscore = 0;

const message = (message) => {
    document.querySelector('.message').textContent = message;
}

const scoring = (scores) => {
    document.querySelector('.score').textContent = scores;
}

const numberStyle = (width) => {
    document.querySelector('.number').style.width = width;
}

const numberText = (text) => {
    document.querySelector('.number').textContent = text;
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    //when the guess is right
    if (!guess) {
        message('⛔️ No number!');

        //when player wins
    } else if (guess === secretNumber) {
        message('🏆 Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        numberStyle('30rem');
        numberText(secretNumber);

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            message(guess > secretNumber ? '📈 to high!' : '📉 to low!');
            score--;
            scoring(score);
        } else {
            message('💥 You lost the game!');
            scoring(0);
        }
    }
})

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = (Math.floor(Math.random() * 20) + 1);
    message('Start guessing...');
    scoring(score);
    numberText('?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#484d5c';
    numberStyle('15rem');
})

