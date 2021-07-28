import getRandomNumber from '../utils.js';

const isEven = (number) => Math.abs(number) % 2 === 0;
export const desc = 'Answer "yes" if the number is even, otherwise answer "no".';
export const runRound = () => {
  const randomNum = getRandomNumber(100, 0);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  const issue = `Question: ${randomNum}`;
  return { correctAnswer, issue };
};
