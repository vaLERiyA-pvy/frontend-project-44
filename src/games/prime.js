import game from '../index.js';
import getRandomNum from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const primeStart = () => game(gameDescription, primeGame);

export default primeStart;
