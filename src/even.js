import readlineSync from 'readline-sync';

const name = '';
// checking for parity
const isOdd = (number) => Math.abs(number) % 2 === 1;
const isEven = (number) => number % 2 === 0;

// random number
const random = () => Math.floor((Math.random() * 100));

const message = {
  correct: 'Correct!',
  incorrectYes: "'yes' is wrong answer ;(. Correct answer was 'no'.) ",
  incorrectNo: "'no' is wrong answer ;(. Correct answer was 'yes'.) ",
  incorrect: `Let's try again, ${name}!`,
  win: `Congratulations, ${name}!`,
  desc: 'Answer "yes" if the number is even, otherwise answer "no".',
};

console.log(message.desc);
const startRound = () => {
  let isCorrect = false;
  const num = random();
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (isEven(num) && answer === 'yes' || isOdd(num) && answer === 'no') {
    console.log(message.correct);
    isCorrect = true;
  }
  if (isEven(num) && answer === 'no') {
    console.log(message.incorrectNo);
  }
  if (isOdd(num) && answer === 'yes') {
    console.log(message.incorrectYes);
  }
  return isCorrect;
};

const startGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();
    if (!isCorrect) {
      console.log(message.incorrect);
      return;
    }
  }
  console.log(message.win);
};

export default startGame;
