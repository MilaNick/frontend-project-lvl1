import { getRandomNumber } from '../utils.js';

import engine from '../engine.js';

const isEven = (number) => Math.abs(number) % 2 === 0;
const desc = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundCounter = 3;
const runRound = () => {
  const randomNum = getRandomNumber(100, 0);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  const question = randomNum;
  return { correctAnswer, question };
};
const startGame = () => engine(desc, runRound, roundCounter);
export default startGame;
