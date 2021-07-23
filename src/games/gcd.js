import readlineSync from 'readline-sync';

import { message, func } from '../index.js';

console.log(message.descGcd);

export const gcdRound = () => {
  let isCorrect = false;
  const num1 = func.random(100);
  const num2 = func.random(100);
  console.log(`Question: ${num1} ${num2}`);
  const answer = +readlineSync.question('Your answer: ');
  const correctAnswer = func.gcd(num1, num2);
  if (answer === correctAnswer) {
    console.log(message.correct);
    isCorrect = true;
  }
  if (answer !== correctAnswer) {
    console.log(`${answer} ${message.incorrectCalc} ${correctAnswer}.`);
  }
  return isCorrect;
};

const { startGame } = func;

export default startGame;
