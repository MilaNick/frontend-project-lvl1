import { name } from '../bin/brain-games.js';

export const message = {
  correct: 'Correct!',
  incorrect1: ' is wrong answer ;(. Correct answer was ',
  loser: `Let's try again, ${name}!`,
  win: `Congratulations, ${name}!`,
  descEven: 'Answer "yes" if the number is even, otherwise answer "no".',
  descCalc: 'What is the result of the expression?',
  descGcd: 'Find the greatest common divisor of given numbers.',
  descProgression: 'What number is missing in the progression?',
  descPrime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};
export let isCorrect;

export const tools = {
  isOdd: (number) => Math.abs(number) % 2 === 1, // checking for parity
  isEven: (number) => Math.abs(number) % 2 === 0, // checking for parity
  random: (a) => Math.floor((Math.random() * a)), // get random number
  randomNumberInInterval: (max, min) => Math.floor((Math.random() * (max - min + 1)) + min), // get random number in interval
  randomOperator: () => {
    const arr = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * 4);
    return arr[randomIndex];
  }, // choice randomOperator
  getExpression: (a, b, c) => {
    if (c === '*') return (a * b);
    if (c === '+') return (a + b);
    if (c === '-') return (a - b);
  }, // converting a string to a mathematical expression
  getLargestDivisor: (a, b) => {
    let result = 0;
    for (let i = 1; i <= a; i += 1) {
      if (b % (a / i) === 0) {
        result = a / i;
        return result;
      }
    }
    return result;
  }, // for getting the largest divisor
  gcd: (a, b) => (a < b ? tools.getLargestDivisor(a, b) : tools.getLargestDivisor(b, a)), // choosing the divisor and the divisible
  hideElem: (arr, i) => {
    const newArray = [...arr];
    newArray[i] = '..';
    return newArray.join(' ');
  }, // hide an element
  getProgression: (start, step, count) => {
    let number = start;
    const arithmeticProgress = [number];
    for (let i = 0; i < count; i += 1) {
      arithmeticProgress.push(number + step);
      number += step;
    }
    return arithmeticProgress;
  },
  isPrime: (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < (num / 2); i++) {
      if (num !== i && num % i === 0) {
        return false;
      }
    }
    return true;
  },
  choice: (answer, correctAnswer) => {
    isCorrect = false;
    if (answer === correctAnswer) {
      console.log(message.correct);
      isCorrect = true;
    }
    if (answer !== correctAnswer) {
      console.log(`'${answer}' ${message.incorrect1} '${correctAnswer}'.`);
    }
  },
  startGame: (runRound) => {
    for (let i = 2; i >= 0; i -= 1) {
      isCorrect = runRound();
      if (!isCorrect) {
        console.log(message.loser);
        return;
      }
    }
    console.log(message.win);
  },
};
