import readlineSync from 'readline-sync';

import {
  message, tools, isCorrect, start,
} from '../index.js';

console.log(message.descGcd);
export const gcdRound = () => {
  const num1 = tools.random(100);
  const num2 = tools.random(100);
  console.log(`Question: ${num1} ${num2}`);
  const answer = +readlineSync.question('Your answer: ');
  const correctAnswer = tools.gcd(num1, num2);
  tools.choice(answer, correctAnswer);
  return isCorrect;
};
const { startGame } = tools;
export default startGame;
