import readlineSync from 'readline-sync';

import { message, tools, isCorrect } from '../index.js';

console.log(message.descProgression);
export const progressionRound = () => {
  const num1 = tools.random(10);
  const num2 = tools.random(10);
  const count = tools.randomNumberInInterval(10, 5);
  const randomPosition = tools.random(count);
  const array = tools.getProgression(num1, num2, count);
  const correctAnswer = array[randomPosition];
  console.log(`Question: ${tools.hideElem(array, randomPosition)}`);
  const answer = +readlineSync.question('Your answer: ');
  tools.choice(answer, correctAnswer);
  return isCorrect;
};
const { startGame } = tools;
export default startGame;
