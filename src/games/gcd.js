import { getRandomNumber } from '../utils.js';

import engine from '../engine.js';

const getLargestDivisor = (a, b) => (b === 0 ? a : getLargestDivisor(b, a % b));
const desc = 'Find the greatest common divisor of given numbers.';
const roundCounter = 3;
const runRound = () => {
  const randomNum1 = getRandomNumber(100, 0);
  const randomNum2 = getRandomNumber(100, 0);
  const correctAnswer = getLargestDivisor(randomNum1, randomNum2).toString();
  const question = `${randomNum1} ${randomNum2}`;
  return { correctAnswer, question };
};
const startGame = () => engine(desc, runRound, roundCounter);
export default startGame;
