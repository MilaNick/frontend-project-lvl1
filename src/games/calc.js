import readlineSync from 'readline-sync';

import { message, tool, isCorrect } from '../index.js';

console.log(message.descCalc);
export const calcRound = () => {
  const num1 = tool.random(10);
  const num2 = tool.random(10);
  const operator = tool.randomOperator();
  console.log(`Question: ${num1} ${operator} ${num2}`);
  const answer = +readlineSync.question('Your answer: ');
  const correctAnswer = tool.getExpression(num1, num2, operator);
  tool.choice(answer, correctAnswer);
  return isCorrect;
};
const { startGame } = tool;
export default startGame;
