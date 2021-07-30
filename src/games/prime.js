import { getRandomNumber } from '../utils.js';

import engine from '../engine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (elem) => {
  if (elem <= 1) return false;
  for (let i = 2; i < Math.sqrt(elem); i += 1) {
    if (Math.sqrt(elem) !== i && elem % i === 0) {
      return false;
    }
  }
  return true;
};
const getRoundData = () => {
  const randomNum = getRandomNumber(0, 100);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const question = randomNum;
  return { correctAnswer, question };
};
const startGame = () => engine(description, getRoundData);
export default startGame;
