import { name } from '../bin/brain-games.js';

export const message = {
  correct: 'Correct!',
  incorrectYes: "'yes' is wrong answer ;(. Correct answer was 'no'.) ",
  incorrectNo: "'no' is wrong answer ;(. Correct answer was 'yes'.) ",
  incorrectCalc: ' is wrong answer ;(. Correct answer was ',
  incorrect: `Let's try again, ${name}!`,
  win: `Congratulations, ${name}!`,
  descEven: 'Answer "yes" if the number is even, otherwise answer "no".',
  descCalc: 'What is the result of the expression?',
  descGcd: 'Find the greatest common divisor of given numbers.',
};

export let result = 0;

export const func = {
  isOdd: (number) => Math.abs(number) % 2 === 1, // checking for parity
  isEven: (number) => Math.abs(number) % 2 === 0, // checking for parity
  random: (a) => Math.floor((Math.random() * a)), // random number
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
