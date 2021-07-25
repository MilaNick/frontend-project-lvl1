/* eslint-disable */
import readlineSync from 'readline-sync';

import {message, tools, isCorrect } from '../index.js';

console.log(message.descEven);
export const evenRound = () => {
  const num = tools.random(100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  let correctAnswer;
  if (tools.isEven(num)) correctAnswer = 'yes';
  if (tools.isOdd(num))  correctAnswer = 'no';
  tools.choice(answer, correctAnswer);
  return isCorrect;
};
const { startGame } = tools;
export default startGame;
