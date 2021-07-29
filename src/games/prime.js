import { getRandomNumber } from '../utils.js';

import engine from '../engine.js';

const isPrime = (elem) => {
  if (elem <= 1) return false;
  for (let i = 2; i < (elem / 2); i += 1) {
    if (elem !== i && elem % i === 0) {
      return false;
    }
  }
  return true;
};
const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const roundCounter = 3;
const runRound = () => {
  const randomNum = getRandomNumber(100, 0);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const question = randomNum;
  return { correctAnswer, question };
};
const startGame = () => engine(desc, runRound, roundCounter);
export default startGame;
