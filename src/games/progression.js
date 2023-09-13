import game from '../index.js';
import getRandomNum from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progressionNew = [];

  for (let i = 0; i < length; i += 1) {
    progressionNew.push(start + i * step);
  }

  return progressionNew;
};

const progressionGame = () => {
  const start = getRandomNum(0, 5);
  const step = getRandomNum(1, 5);
  const length = getRandomNum(10, 15);
  const progressionNew = getProgression(start, step, length);
  const hiddenNumber = getRandomNum(0, progressionNew.length - 1);
  const correctAnswer = progressionNew[hiddenNumber].toString();
  progressionNew[hiddenNumber] = '..';
  const question = progressionNew.join(' ');

  return [question, correctAnswer];
};

const progressionStart = () => game(gameDescription, progressionGame);

export default progressionStart;
