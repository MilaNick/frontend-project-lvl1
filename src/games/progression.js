import getRandomNumber from '../utils.js';

const hideElem = (arr, i) => {
  const newArray = [...arr];
  newArray[i] = '..';
  return newArray.join(' ');
};
const getProgression = (start, step, count) => {
  let elem = start;
  const arithmeticProgress = [elem];
  for (let i = 0; i < count; i += 1) {
    arithmeticProgress.push(elem + step);
    elem += step;
  }
  return arithmeticProgress;
};
export const desc = 'What number is missing in the progression?';
export const runRound = () => {
  const randomNum = getRandomNumber(10, 0);
  const step = getRandomNumber(10, 0);
  const count = getRandomNumber(10, 5);
  const randomPosition = Math.floor(Math.random() * count);
  const progression = getProgression(randomNum, step, count);
  const correctAnswer = progression[randomPosition].toString();
  const issue = `Question: ${hideElem(progression, randomPosition)}`;
  return { correctAnswer, issue };
};
