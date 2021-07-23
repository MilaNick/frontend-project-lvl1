import readlineSync from 'readline-sync';

import { message, func } from '../index.js';

console.log(message.descCalc);

export const calcRound = () => {
  let isCorrect = false;
  const num1 = func.random(10);
  const num2 = func.random(10);
  const operator = func.randomOperator();
  console.log(`Question: ${num1} ${operator} ${num2}`);
  const answer = +readlineSync.question('Your answer: ');
  const correctAnswer = func.result(num1, num2, operator);
  if (answer === correctAnswer) {
    console.log(message.correct);
    isCorrect = true;
  }
  if (answer !== correctAnswer) {
    console.log(`${answer} ${message.incorrectCalc} ${correctAnswer}.`);
  }
  return isCorrect;
};

const { startGame } = func;

export default startGame;
