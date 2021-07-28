import readlineSync from 'readline-sync';

import welcome from './games/cli.js';

const engine = (desc, game) => {
  const name = welcome();
  console.log(desc);
  for (let i = 0; i < 3;) {
    const resultRound = game();
    const { issue } = resultRound;
    const { correctAnswer } = resultRound;
    console.log(issue);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default engine;
