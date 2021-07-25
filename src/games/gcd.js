import readlineSync from 'readline-sync';

import {
  message, tool, isCorrect, start,
} from '../index.js';

console.log(message.descGcd);
export const gcdRound = () => {
  const num1 = tool.random(100);
  const num2 = tool.random(100);
  console.log(`Question: ${num1} ${num2}`);
  const answer = +readlineSync.question('Your answer: ');
  const correctAnswer = tool.gcd(num1, num2);
  tool.choice(answer, correctAnswer);
  return isCorrect;
};
const { startGame } = tool;
export default startGame;
