import { getRandomNum } from './cli.js';

const calcGame = () => {
  const firstOper = getRandomNum(1, 10);
  const secondOper = getRandomNum(1, 10);
  const arrOper = ['+', '-', '*'];
  const randOper = Math.floor(Math.random() * arrOper.length);
  const operator = arrOper[randOper];
  let correctAnswer = 0;

  switch (operator) {
    case '+':
      correctAnswer = firstOper + secondOper;
      break;
    case '-':
      correctAnswer = firstOper - secondOper;
      break;
    case '*':
      correctAnswer = firstOper * secondOper;
      break;
    default:
      correctAnswer = 1;
  }

  const question = `${firstOper} ${operator} ${secondOper}`;

  return [question, correctAnswer.toString()];
};

export default calcGame;
