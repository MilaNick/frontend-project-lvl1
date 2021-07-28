import getRandomNumber from '../utils.js';

const getRandomOperator = () => {
  const arrOperators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * arrOperators.length);
  return arrOperators[randomIndex];
};
const getExpression = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '*':
      return firstNum * secondNum;
    case '-':
      return firstNum - secondNum;
    default:
      return firstNum + secondNum;
  }
};
export const desc = 'What is the result of the expression?';
export const runRound = () => {
  const randomNum1 = getRandomNumber(10, 0);
  const randomNum2 = getRandomNumber(10, 0);
  const operator = getRandomOperator();
  const correctAnswer = getExpression(randomNum1, randomNum2, operator).toString();
  const issue = `Question: ${randomNum1} ${operator} ${randomNum2}`;
  return { correctAnswer, issue };
};
