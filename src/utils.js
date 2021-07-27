import welcome from './games/cli.js';

const name = welcome();
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
};
