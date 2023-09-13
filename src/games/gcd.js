import game from '../index.js';
import getRandomNum from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const computeGcd = (firstValue, secondValue) => {
  const division = firstValue % secondValue;
  if (!secondValue) {
    return firstValue;
  }

  return computeGcd(secondValue, division);
};

const gcdGame = () => {
  const firstOper = getRandomNum(1, 99);
  const secondOper = getRandomNum(2, 99);

  const correctAnswer = computeGcd(firstOper, secondOper).toString();
  const question = `${firstOper} ${secondOper}`;
  return [question, correctAnswer];
};

const gcdStart = () => game(gameDescription, gcdGame);

export default gcdStart;
