import readlineSync from 'readline-sync';

import { message, tools } from '../utils.js';

import engine from '../engine.js';

engine.outputTerminal(message.descProgression);
const hideElem = (arr, i) => {
  const newArray = [...arr];
  newArray[i] = '..';
  return newArray.join(' ');
};
const getProgression = (start, step, count) => {
  let number = start;
  const arithmeticProgress = [number];
  for (let i = 0; i < count; i += 1) {
    arithmeticProgress.push(number + step);
    number += step;
  }
  return arithmeticProgress;
};
const getRandomNumber = (max, min) => Math.floor((Math.random() * (max - min + 1)) + min);
export const progressionRound = () => {
  const num = tools.random(10);
  const step = tools.random(10);
  const count = getRandomNumber(10, 5);
  const randomPosition = tools.random(count);
  const array = getProgression(num, step, count);
  const correctAnswer = array[randomPosition].toString();
  engine.outputTerminal(`Question: ${hideElem(array, randomPosition)}`);
  const answer = readlineSync.question('Your answer: ');
  return engine.choice(answer, correctAnswer);
};
const { startGame } = engine;
export default startGame;
