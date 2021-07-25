import readlineSync from 'readline-sync';

import { message, tools, isCorrect } from '../index.js';

console.log(message.descPrime);
export const primeRound = () => {
  const num = tools.random(100);
  console.log(`Question: ${num}`);
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
