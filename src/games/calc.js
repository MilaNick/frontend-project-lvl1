import { getRandomNumber } from '../utils.js';

import engine from '../engine.js';

const getRandomOperator = () => {
  const arrOperators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * arrOperators.length);
  return arrOperators[randomIndex];
};
// eslint-disable-next-line consistent-return
const calculate = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '*':
      return firstNum * secondNum;
    case '-':
      return firstNum - secondNum;
    case '+':
      return firstNum + secondNum;
    default:
      break;
  }
};
const desc = 'What is the result of the expression?';
const roundCounter = 3;
const runRound = () => {
  const randomNum1 = getRandomNumber(10, 0);
  const randomNum2 = getRandomNumber(10, 0);
  const operator = getRandomOperator();
  const correctAnswer = calculate(randomNum1, randomNum2, operator).toString();
  const question = `${randomNum1} ${operator} ${randomNum2}`;
  return { correctAnswer, question };
};
const startGame = () => engine(desc, runRound, roundCounter);
export default startGame;
