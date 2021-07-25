/* eslint-disable */
import readlineSync from 'readline-sync';

import { message, tool } from '../index.js';

console.log(message.descEven);
export const evenRound = () => {
  let isCorrect = false;
  const num = tool.random(100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (tool.isEven(num) && answer === 'yes' || tool.isOdd(num) && answer === 'no') {
    console.log(message.correct);
    isCorrect = true;
  }
  if (tool.isEven(num) && answer === 'no') {
    console.log(message.incorrectNo);
  }
  if (tool.isOdd(num) && answer === 'yes') {
    console.log(message.incorrectYes);
  }
  return isCorrect;
};
const { startGame } = tool;
export default startGame;
