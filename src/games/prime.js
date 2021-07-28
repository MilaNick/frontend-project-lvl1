import getRandomNumber from '../utils.js';

const isPrime = (elem) => {
  if (elem <= 1) return false;
  for (let i = 2; i < (elem / 2); i += 1) {
    if (elem !== i && elem % i === 0) {
      return false;
    }
  }
  return true;
};
export const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const runRound = () => {
  const randomNum = getRandomNumber(100, 0);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const issue = `Question: ${randomNum}`;
  return { correctAnswer, issue };
};
