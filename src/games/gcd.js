import getRandomNumber from '../utils.js';

const getLargestDivisor = (a, b) => (b === 0 ? a : getLargestDivisor(b, a % b));
export const desc = 'Find the greatest common divisor of given numbers.';
export const runRound = () => {
  const randomNum1 = getRandomNumber(100, 0);
  const randomNum2 = getRandomNumber(100, 0);
  const correctAnswer = getLargestDivisor(randomNum1, randomNum2).toString();
  const issue = `Question: ${randomNum1} ${randomNum2}`;
  return { correctAnswer, issue };
};
