import { getRandomNumber } from '../utils.js';

import engine from '../engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => Math.abs(number) % 2 === 0;
const getRoundData = () => {
  const randomNum = getRandomNumber(0, 100);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  const question = randomNum;
  return { correctAnswer, question };
};
const startGame = () => engine(description, getRoundData);
export default startGame;
