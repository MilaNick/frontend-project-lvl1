import readlineSync from 'readline-sync';

import { message, tools, isCorrect } from '../index.js';

console.log(message.descCalc);
export const calcRound = () => {
  const num1 = tools.random(10);
  const num2 = tools.random(10);
  const operator = tools.randomOperator();
  console.log(`Question: ${num1} ${operator} ${num2}`);
  const answer = +readlineSync.question('Your answer: ');
  const correctAnswer = tools.getExpression(num1, num2, operator);
  tools.choice(answer, correctAnswer);
  return isCorrect;
};
const { startGame } = tools;
export default startGame;
