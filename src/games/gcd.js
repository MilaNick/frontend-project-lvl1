import readlineSync from 'readline-sync';

import { message, tools } from '../utils.js';

import { engine, isCorrect } from '../engine.js';

engine.outputTerminal(message.descGcd);
const getLargestDivisor = (a, b) => {
  let result = 0;
  for (let i = 1; i <= a; i += 1) {
    if (b % (a / i) === 0) {
      result = a / i;
      return result;
    }
  }
  return result;
}; // for getting the largest divisor
const gcd = (a, b) => (a < b ? getLargestDivisor(a, b) : getLargestDivisor(b, a));// choosing the divisor and the divisible
export const gcdRound = () => {
  const num1 = tools.random(100);
  const num2 = tools.random(100);
  engine.outputTerminal(`Question: ${num1} ${num2}`);
  const answer = +readlineSync.question('Your answer: ');
  const correctAnswer = tools.gcd(num1, num2);
  tools.choice(answer, correctAnswer);
  return isCorrect;
};
const { startGame } = tools;
export default startGame;
