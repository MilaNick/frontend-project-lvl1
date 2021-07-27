import readlineSync from 'readline-sync';

import { message, tools } from '../utils.js';

import { engine, isCorrect } from '../engine.js';

engine.outputTerminal(message.descPrime);
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < (num / 2); i += 1) {
    if (num !== i && num % i === 0) {
      return false;
    }
  }
  return true;
};
export const primeRound = () => {
  const num = tools.random(100);
  engine.outputTerminal(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  let correctAnswer = 'no';
  if (isPrime(num)) {
    correctAnswer = 'yes';
  }
  engine.choice(answer, correctAnswer);
  return isCorrect;
};
const { startGame } = engine;
export default startGame;
