import { getRandomNum } from './cli.js';

const progressionGame = () => {
  const progressionNew = [];
  const randomNum = getRandomNum(1, 99);
  const stepNum = getRandomNum(2, 6);
  const step = stepNum * 10;

  for (let i = 0; i < step; i += stepNum) {
    progressionNew.push(randomNum + i);
  }

  const hiddenElement = getRandomNum(1, 9);
  const progressionFin = progressionNew;
  const correctAnswer = progressionFin[hiddenElement];
  progressionFin[hiddenElement] = '..';
  const question = progressionNew.join(',').toString();

  return [question, correctAnswer.toString()];
};

export default progressionGame;
