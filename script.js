'use strict'

//document.querySelector('.guess-message').textContent = 'Правильно!';
document.querySelector('.number-input').value = 10;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guesNumber = Number(document.querySelector('.number-input').value)
    console.log(typeof guesNumber);

    if (!guesNumber) {
        document.querySelector('.guess-message').textContent = 'Введите число!';
    }   else if (guesNumber === secretNumber) {
        document.querySelector('.guess-message').textContent = 'Правильно!';
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
        document.querySelector('.question').style.width = '50rem';
    } else if (guesNumber > secretNumber) {
        if (score > 1) {
            document.querySelector('.guess-message').textContent = 'Слишком много!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.guess-message').textContent = 'Игра закончен!';
        }
    }  else if (guesNumber < secretNumber) {
        if (score > 1) {
            document.querySelector('.guess-message').textContent = 'Слишком мало!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.guess-message').textContent = 'Игра закончен!';
            document.querySelector('.score').textContent = 0;
        }
    }
})