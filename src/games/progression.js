import { getRandomNumber } from '../utils.js';

import engine from '../engine.js';

const hideElem = (arr, i) => {
  const newArray = [...arr];
  newArray[i] = '..';
  return newArray.join(' ');
};
const getProgression = (start, step, count) => {
  const arithmeticProgress = [start];
  for (let i = 1; i < count; i += 1) {
    arithmeticProgress.push(start + step * i);
  }
  return arithmeticProgress;
};
const desc = 'What number is missing in the progression?';
const roundCounter = 3;
const runRound = () => {
  const randomNum = getRandomNumber(10, 0);
  const step = getRandomNumber(10, 0);
  const count = getRandomNumber(10, 5);
  const randomPosition = Math.floor(Math.random() * count);
  const progression = getProgression(randomNum, step, count);
  const correctAnswer = progression[randomPosition].toString();
  const question = hideElem(progression, randomPosition);
  return { correctAnswer, question };
};
const startGame = () => engine(desc, runRound, roundCounter);
export default startGame;
