import readlineSync from 'readline-sync';

import { message, tools } from '../utils.js';

import engine from '../engine.js';

engine.outputTerminal(message.descGcd);
const getLargestDivisor = (a, b) => (b === 0 ? a : getLargestDivisor(b, a % b));
export const gcdRound = () => {
  const num1 = tools.random(100);
  const num2 = tools.random(100);
  engine.outputTerminal(`Question: ${num1} ${num2}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = getLargestDivisor(num1, num2).toString();
  engine.choice(answer, correctAnswer);
  return engine.choice(answer, correctAnswer);
};
const { startGame } = engine;
export default startGame;
