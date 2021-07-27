import { message } from './utils.js';

let isCorrect;
const engine = {
  outputTerminal: (content) => console.log(content),
  choice: (answer, correctAnswer) => {
    isCorrect = false;
    if (answer === correctAnswer) {
      engine.outputTerminal(message.correct);
      isCorrect = true;
    }
    if (answer !== correctAnswer) {
      engine.outputTerminal(`'${answer}' ${message.incorrect1} '${correctAnswer}'.`);
    }
    return isCorrect;
  },
  startGame: (runRound) => {
    for (let i = 2; i >= 0; i -= 1) {
      isCorrect = runRound();
      if (!isCorrect) {
        engine.outputTerminal(message.loser);
        return;
      }
    }
    engine.outputTerminal(message.win);
  },
};
export default engine;
