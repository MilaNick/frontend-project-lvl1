import readlineSync from 'readline-sync';

import { message, func, isCorrect } from '../index.js';

console.log(message.descPrime);

export const primeRound = () => {
  const num1 = func.random(10);
  const num2 = func.random(10);
  const count = func.randomNumberInInterval(10, 5);
  const randomPosition = func.random(count);
  const array = func.arithmeticProgression(num1, num2, count);
  const correctAnswer = array[randomPosition];
  console.log(`Question: ${func.hideElem(array, randomPosition)}`);
  const answer = +readlineSync.question('Your answer: ');
  func.choice(answer, correctAnswer);
  return isCorrect;
};

const { startGame } = func;

export default startGame;
