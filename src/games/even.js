import readlineSync from 'readline-sync';

import { message, func } from '../index.js';

console.log(message.descEven);

export const evenRound = () => {
  let isCorrect = false;
  const num = func.random(100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (func.isEven(num) && answer === 'yes' || func.isOdd(num) && answer === 'no') {
    console.log(message.correct);
    isCorrect = true;
  }
  if (func.isEven(num) && answer === 'no') {
    console.log(message.incorrectNo);
  }
  if (func.isOdd(num) && answer === 'yes') {
    console.log(message.incorrectYes);
  }
  return isCorrect;
};
const { startGame } = func;

export default startGame;
