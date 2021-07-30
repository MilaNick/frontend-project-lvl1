import { getRandomNumber } from '../utils.js';

import engine from '../engine.js';

const description = 'What number is missing in the progression?';

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
const getRoundData = () => {
  const randomNum = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 10);
  const count = getRandomNumber(5, 10);
  const randomPosition = getRandomNumber(5, count - 1);
  const progression = getProgression(randomNum, step, count);
  const correctAnswer = progression[randomPosition].toString();
  const question = hideElem(progression, randomPosition);
  return { correctAnswer, question };
};
const startGame = () => engine(description, getRoundData);
export default startGame;
