import readlineSync from 'readline-sync';

import { message, tools } from '../utils.js';

import { engine, isCorrect } from '../engine.js';

engine.outputTerminal(message.descEven);
export const evenRound = () => {
  const isOdd = (number) => Math.abs(number) % 2 === 1;
  const isEven = (number) => Math.abs(number) % 2 === 0;
  const num = tools.random(100);
  engine.outputTerminal(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  let correctAnswer;
  if (isEven(num)) correctAnswer = 'yes';
  if (isOdd(num)) correctAnswer = 'no';
  engine.choice(answer, correctAnswer);
  return isCorrect;
};
const { startGame } = engine;
export default startGame;
