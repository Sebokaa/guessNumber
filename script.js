'use strict';

let randomNum = Math.trunc(Math.random() * 20 + 1);
const answer = document.querySelector('.ans');
const input = document.querySelector('.userInput');
const checkBut = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.scoreNums');
const highScore = document.querySelector('.highScore');
const overlay = document.querySelector('.overlay');

let scoreNum = 20;
let highScoreNum = 0;

const isClicked = () => {
  if (input.value != '') {
    if (Number(input.value) == randomNum) {
      if (scoreNum > highScoreNum) {
        highScoreNum = scoreNum;
      }
      answer.textContent = randomNum;
      document.body.style.backgroundColor = '#60b347';
      message.textContent = 'Correct Number!';
      message.style.fontSize = '25px';
      scoreNum = 20;
      score.textContent = scoreNum;
      highScore.textContent = highScoreNum;
      input.value = '';
      randomNum = Math.trunc(Math.random() * 20 + 1);
    } else if (Number(input.value) > randomNum) {
      document.body.style.backgroundColor = '#ff2c2c';
      message.textContent = 'Too High!';
      message.style.fontSize = '25px';
      scoreNum -= 1;
      score.textContent = scoreNum;
      input.value = '';
    } else {
      document.body.style.backgroundColor = '#ff2c2c';
      message.textContent = 'Too Low!';
      message.style.fontSize = '25px';
      scoreNum--;
      score.textContent = scoreNum;
      input.value = '';
    }
    if (scoreNum <= 0) {
      overlay.style.top = '0px';
    }
    console.log(randomNum);
  }
};

const againClicked = () => {
  document.body.style.backgroundColor = '#222';
  message.textContent = 'Guess Number!';
  scoreNum = 20;
  score.textContent = scoreNum;
  highScoreNum = 0;
  highScore.textContent = highScoreNum;
  overlay.style.top = '-900px';
  answer.textContent = '?';
  randomNum = Math.trunc(Math.random() * 20 + 1);
};
