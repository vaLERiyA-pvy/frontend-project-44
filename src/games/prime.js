import { getRandomNum } from './cli.js';
import { expression } from '../expression.js';

const isPrime = (question) => {
  if (question < 2) {
    return false;
  }

  let divider = 2;
  while (divider <= question / 2) {
    if (question % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const primeGame = () => {
  const question = getRandomNum(1, 99);
  const correctAnswer = isPrime(question) ? expression.yes : expression.no;

  return [question, correctAnswer];
};

export default primeGame;
