import readlineSync from 'readline-sync';

import { message, tool, isCorrect } from '../index.js';

console.log(message.descProgression);
export const progressionRound = () => {
  const num1 = tool.random(10);
  const num2 = tool.random(10);
  const count = tool.randomNumberInInterval(10, 5);
  const randomPosition = tool.random(count);
  const array = tool.arithmeticProgression(num1, num2, count);
  const correctAnswer = array[randomPosition];
  console.log(`Question: ${tool.hideElem(array, randomPosition)}`);
  const answer = +readlineSync.question('Your answer: ');
  tool.choice(answer, correctAnswer);
  return isCorrect;
};
const { startGame } = tool;
export default startGame;
