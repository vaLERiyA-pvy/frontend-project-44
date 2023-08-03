import { getRandomNum } from './cli.js';

const gcdGame = () => {
  let firstOper = getRandomNum(1, 99);
  let secondOper = getRandomNum(2, 99);
  let division = firstOper % secondOper;

  while (division !== 0) {
    firstOper = secondOper;
    secondOper = division;
    division = firstOper % secondOper;
  }
  const correctAnswer = secondOper;

  const question = `${firstOper} ${secondOper}`;
  return [question, correctAnswer.toString()];
};

export default gcdGame;
