import { name } from '../bin/brain-games.js';

export const message = {
  correct: 'Correct!',
  incorrectYes: "'yes' is wrong answer ;(. Correct answer was 'no'.) ",
  incorrectNo: "'no' is wrong answer ;(. Correct answer was 'yes'.) ",
  incorrect1: ' is wrong answer ;(. Correct answer was ',
  incorrect: `Let's try again, ${name}!`,
  win: `Congratulations, ${name}!`,
  descEven: 'Answer "yes" if the number is even, otherwise answer "no".',
  descCalc: 'What is the result of the expression?',
  descGcd: 'Find the greatest common divisor of given numbers.',
  descProgression: 'What number is missing in the progression?',
  descPrime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

export let isCorrect;
let result = 0;

export const func = {
  isOdd: (number) => Math.abs(number) % 2 === 1, // checking for parity
  isEven: (number) => Math.abs(number) % 2 === 0, // checking for parity
  random: (a) => Math.floor((Math.random() * a)), // get random number
  randomNumberInInterval: (max, min) => Math.floor((Math.random() * (max - min + 1)) + min), // get random number in interval
  randomOperator: () => {
    const arr = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * 4);
    return arr[randomIndex];
  }, // choice randomOperator
  result: (a, b, c) => {
    if (c === '*') return (parseInt(a) * parseInt(b));
    if (c === '/') return (parseInt(a) / parseInt(b));
    if (c === '+') return (parseInt(a) + parseInt(b));
    if (c === '-') return (parseInt(a) - parseInt(b));
  }, // converting a string to a mathematical expression
  getLargestDivisor: (a, b) => {
    for (let i = 1; i <= a; i += 1) {
      if (b % (a / i) === 0) {
        result = a / i;
        return result;
      }
    }
    return result;
  }, // for getting the largest divisor
  // eslint-disable-next-line max-len
  gcd: (a, b) => (a < b ? func.getLargestDivisor(a, b) : func.getLargestDivisor(b, a)), // choosing the divisor and the divisible
  hideElem: (arr, i) => {
    const substitute = '..';
    // eslint-disable-next-line no-param-reassign
    arr[i] = substitute;
    return arr.join(' ');
  }, // hide an element
  arithmeticProgression: (start, step, count) => {
    let number = start;
    const arithmeticProgress = [number];
    for (let i = 0; i < count; i += 1) {
      arithmeticProgress.push(number + step);
      number += step;
    }
    return arithmeticProgress;
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
  startGame: (game) => {
    for (let i = 0; i < 3; i += 1) {
      const isCorrect = game();
      if (!isCorrect) {
        console.log(message.incorrect);
        return;
      }
    }
    console.log(message.win);
  },
};
