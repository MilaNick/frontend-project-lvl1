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

export const tools = {
  random: (a) => Math.floor((Math.random() * a)), // get random number
  randomNumberInInterval: (max, min) => Math.floor((Math.random() * (max - min + 1)) + min),
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
};
