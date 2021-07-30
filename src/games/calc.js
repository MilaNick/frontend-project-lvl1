import { getRandomNumber } from '../utils.js';

import engine from '../engine.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
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
const getRoundData = () => {
  const randomNum1 = getRandomNumber(0, 10);
  const randomNum2 = getRandomNumber(0, 10);
  const operator = getRandomOperator();
  const correctAnswer = calculate(randomNum1, randomNum2, operator).toString();
  const question = `${randomNum1} ${operator} ${randomNum2}`;
  return { correctAnswer, question };
};
const startGame = () => engine(description, getRoundData);
export default startGame;
