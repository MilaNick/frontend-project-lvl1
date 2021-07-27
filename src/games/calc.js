import readlineSync from 'readline-sync';

import { message, tools } from '../utils.js';

import { engine, isCorrect } from '../engine.js';

engine.outputTerminal(message.descCalc);
const getRandomOperator = () => {
  const arr = ['+', '-', '*', '/'];
  const randomIndex = Math.floor(Math.random() * 4);
  return arr[randomIndex];
};
// eslint-disable-next-line consistent-return
const getExpression = (a, b, c) => {
  if (c === '*') return (a * b);
  if (c === '/') return (a / b);
  if (c === '+') return (a + b);
  if (c === '-') return (a - b);
}; // converting a string to a mathematical expression
export const calcRound = () => {
  const num1 = tools.random(10);
  const num2 = tools.random(10);
  const operator = getRandomOperator();
  engine.outputTerminal(`Question: ${num1} ${operator} ${num2}`);
  const correctAnswer = getExpression(num1, num2, operator).toString();
  const answer = readlineSync.question('Your answer: ');
  engine.choice(answer, correctAnswer);
  return isCorrect;
};
const { startGame } = engine;
export default startGame;
