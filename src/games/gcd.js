import readlineSync from 'readline-sync';

import { message, func, isCorrect } from '../index.js';

console.log(message.descGcd);

export const gcdRound = () => {
  const num1 = func.random(100);
  const num2 = func.random(100);
  console.log(`Question: ${num1} ${num2}`);
  const answer = +readlineSync.question('Your answer: ');
  const correctAnswer = func.gcd(num1, num2);
  func.choice(answer, correctAnswer);
  return isCorrect;
};

const { startGame } = func;

export default startGame;
