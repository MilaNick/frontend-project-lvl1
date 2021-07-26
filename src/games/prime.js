import readlineSync from 'readline-sync';

import { message, tools, isCorrect } from '../utils.js';
import { engine } from '../engine';

engine.outputTerminal(message.descPrime);
export const primeRound = () => {
  const num = tools.random(100);
  engine.outputTerminal(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  let correctAnswer = 'no';
  if (tools.isPrime(num)) {
    correctAnswer = 'yes';
  }
  tools.choice(answer, correctAnswer);
  return isCorrect;
};
const { startGame } = tools;
export default startGame;
